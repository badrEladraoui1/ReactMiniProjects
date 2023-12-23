import { useEffect, useState } from "react";
import FormNote from "./FormNote";
import ListOfNote from "./ListOfNote";

const App = () => {
  const [notes, setNotes] = useState(() => {
    const localValue = localStorage.getItem("NOTES");
    if (localValue == null) return [];
    return JSON.parse(localValue);
  });

  useEffect(() => {
    localStorage.setItem("NOTES", JSON.stringify(notes));
  }, [notes]);

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

  return (
    <div>
      <h1>NOTES TAKING APP</h1>
      <FormNote onAddNewNoteToNotes={addNewNoteToNotes} />
      <ListOfNote
        notes={notes}
        onToggleNote={toggleNote}
        onDeleteItem={deleteItem}
        onDeleteAll={deleteAll}
        onResetAllNotes={resetAllNotes}
      />
    </div>
  );
};

export default App;
