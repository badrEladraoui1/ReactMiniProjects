/* eslint-disable react/prop-types */
import NoteItem from "./NoteItem";

import styles from "../../styles/NotesList/ListOfNote.module.css";

// eslint-disable-next-line react/prop-types
const ListOfNote = ({
  notes,
  onToggleNote,
  onDeleteItem,
  onDeleteAll,
  onResetAllNotes,
  onSelectAllNotes,
  onSaveAllDoneNotes,
}) => {
  return (
    <>
      <ul className={styles.ul}>
        {notes.map((note) => (
          <NoteItem
          notes={notes}
            key={note.id}
            // {...note}
            noteTitle={note.note}
            noteId={note.id}
            noteState={note.isDone}
            onToggleNote={onToggleNote}
            onDeleteItem={onDeleteItem}
            onSelectAllNotes={onSelectAllNotes}
            onSaveAllDoneNotes={onSaveAllDoneNotes}
          />
        ))}
      </ul>
      {notes.length > 1 && (
        <div className={styles.buttons}>
          <button className={styles.button} onClick={onDeleteAll}>
            Delete All
          </button>
          <button className={styles.button} onClick={onResetAllNotes}>
            Reset All
          </button>
          <button className={styles.button} onClick={onSelectAllNotes}>
            Select All
          </button>
          <button className={styles.button} onClick={onSaveAllDoneNotes}>
            Save All Done notes
          </button>
        </div>
      )}
    </>
  );
};

export default ListOfNote;
