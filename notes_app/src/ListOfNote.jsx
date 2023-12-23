/* eslint-disable react/prop-types */
import NoteItem from "./NoteItem";
// eslint-disable-next-line react/prop-types
const ListOfNote = ({ notes , onToggleNote , onDeleteItem , onDeleteAll , onResetAllNotes}) => {
  return (
    <>
      <ul>
        {notes.map((note) => (
          <NoteItem
            key={note.id}
            // {...note}
            noteTitle={note.note}
            noteId={note.id}
            noteState={note.isDone}
            onToggleNote={onToggleNote}
            onDeleteItem={onDeleteItem}
          />
        ))}
      </ul>
      <button onClick={onDeleteAll}>Delete All</button>
      <button onClick={onResetAllNotes}>Reset All</button>
    </>
  );
};

export default ListOfNote;
