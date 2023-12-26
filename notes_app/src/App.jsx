import { useEffect, useState } from "react";

import FormNote from "./components/Form/FormNote";
import ListOfNote from "./components/NotesList/ListOfNote";
import ListOfSavedNotes from "./components/SavedNotes/ListOfSavedNotes";
import Nav from "./components/Nav/Nav";

import styles from "./App.module.css";

const App = () => {
  const [notes, setNotes] = useState(() => {
    const localValue = localStorage.getItem("NOTES");
    if (localValue === null) return [];
    return JSON.parse(localValue);
  });

  const [savedNotes, setSavedNotes] = useState(() => {
    const localValue = localStorage.getItem("SAVED_NOTES");
    if (localValue === null) return [];
    return JSON.parse(localValue);
  });

  useEffect(() => {
    localStorage.setItem("NOTES", JSON.stringify(notes));
    localStorage.setItem("SAVED_NOTES", JSON.stringify(savedNotes));
  }, [notes, savedNotes]);

  const addNewNoteToNotes = (newNote) => {
    setNotes((prevNotes) => {
      return [
        ...prevNotes,
        {
          id: crypto.randomUUID(),
          note: newNote,
          isDone: false,
        },
      ];
    });
  };

  const toggleNote = (id, state) => {
    setNotes((prevNotes) => {
      return prevNotes.map((prevNote) => {
        if (prevNote.id === id) {
          return {
            ...prevNote,
            isDone: state,
          };
        }
        return prevNote;
      });
    });
  };

  const deleteItem = (id) => {
    setNotes((prevNotes) => {
      return prevNotes.filter((prevNote) => {
        return prevNote.id != id;
      });
    });
  };

  const deleteAll = () => {
    setNotes([]);
  };

  const resetAllNotes = () => {
    setNotes((prevNotes) => {
      return prevNotes.map((prevNote) => {
        if (prevNote.isDone == true) return { ...prevNote, isDone: false };
        else return { ...prevNote };
      });
    });
  };

  const selectAllNotes = () => {
    setNotes((prevNotes) => {
      return prevNotes.map((prevNote) => {
        if (prevNote.isDone === false) {
          return { ...prevNote, isDone: true };
        } else {
          return { ...prevNote };
        }
      });
    });
  };

  const saveAllDoneNotes = () => {
    const filteredNotes = notes.filter((prevNote) => prevNote.isDone === true);
    const uniqueFilterNotes = filteredNotes.filter(
      (prevFilteredNote) =>
        !savedNotes.some(
          (prevSavedNote) => prevSavedNote.note === prevFilteredNote.note
        )
    );
    const updatesSavedNotes = [...savedNotes, ...uniqueFilterNotes];
    setSavedNotes(updatesSavedNotes);
  };

  const deleteAllSavedNotes = () => {
    setSavedNotes([]);
  };

  return (
    <div className={styles.biggestContainer}>
      <Nav/>
      <div className={styles.bigContainer}>
        <div className={styles.Containers}>
          <FormNote onAddNewNoteToNotes={addNewNoteToNotes} />
          <ListOfNote
            notes={notes}
            onToggleNote={toggleNote}
            onDeleteItem={deleteItem}
            onDeleteAll={deleteAll}
            onResetAllNotes={resetAllNotes}
            onSelectAllNotes={selectAllNotes}
            onSaveAllDoneNotes={saveAllDoneNotes}
          />
        </div>

        <div className={styles.Containers}>
          <ListOfSavedNotes
            notes={notes}
            savedNotes={savedNotes}
            onDeleteAllSavedNotes={deleteAllSavedNotes}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
