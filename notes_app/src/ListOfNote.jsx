/* eslint-disable react/prop-types */
import NoteItem from "./NoteItem";

import styles from "./ListOfNote.module.css"
// eslint-disable-next-line react/prop-types
const ListOfNote = ({
  notes,
  onToggleNote,
  onDeleteItem,
  onDeleteAll,
  onResetAllNotes,
  onSelectAllNotes,
}) => {
  return (
    <>
      <ul className={styles.ul}>
        {notes.map((note) => (
          <NoteItem
            key={note.id}
            // {...note}
            noteTitle={note.note}
            noteId={note.id}
            noteState={note.isDone}
            onToggleNote={onToggleNote}
            onDeleteItem={onDeleteItem}
            onSelectAllNotes={onSelectAllNotes}
          />
        ))}
      </ul>
      {notes.length > 1 && (
        <div>
          <button onClick={onDeleteAll}>Delete All</button>
          <button onClick={onResetAllNotes}>Reset All</button>
          <button onClick={onSelectAllNotes}>Select All</button>
        </div>
      )}
    </>
  );
};

export default ListOfNote;
