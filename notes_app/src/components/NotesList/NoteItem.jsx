/* eslint-disable react/prop-types */

import styles from "../../styles/NotesList/NoteItem.module.css";

const NoteItem = ({
  noteTitle,
  noteId,
  noteState,
  onToggleNote,
  onDeleteItem,
  onSaveAllDoneNotes,
  notes
}) => {
  return (
    <li className={styles.li}>
      <input
        checked={noteState}
        type="checkbox"
        onChange={(event) => {
          onToggleNote(noteId, event.target.checked);
        }}
      />
      <h3>{noteTitle}</h3>
      <button className={styles.button} onClick={() => onDeleteItem(noteId)}>
        Delete
      </button>
      
      {notes.length === 1 && <button className={styles.button} onClick={onSaveAllDoneNotes}>Save</button>}
      
    </li>
  );
};

export default NoteItem;
