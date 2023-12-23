/* eslint-disable react/prop-types */
const NoteItem = ({ noteTitle, noteId, noteState, onToggleNote , onDeleteItem }) => {
  return (
    <div>
      <li>
        <input
          checked={noteState}
          type="checkbox"
          onClick={(event) => {
            onToggleNote(noteId, event.target.checked);
          }}    
        />
        <label>{noteTitle}</label>
        <button onClick={() => onDeleteItem(noteId)}>Delete !!!</button>
      </li>
    </div>
  );
};

export default NoteItem;
