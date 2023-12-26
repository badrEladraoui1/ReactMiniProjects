/* eslint-disable react/prop-types */

import styles from "../../styles/NotesList/NoteItem.module.css"; 

const NoteItem = ({
  noteTitle,
  noteId,
  noteState,
  onToggleNote,
  onDeleteItem,
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
      <button className={styles.button} onClick={() => onDeleteItem(noteId)}>Delete !!!</button>
    </li>
  );
};

export default NoteItem;
