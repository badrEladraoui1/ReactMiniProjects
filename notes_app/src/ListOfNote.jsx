/* eslint-disable react/prop-types */
import NoteItem from "./NoteItem";
// eslint-disable-next-line react/prop-types
const ListOfNote = ({ notes , onToggleNote , onDeleteItem , onDeleteAll , onResetAllNotes , onSelectAllNotes }) => {
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
            onSelectAllNotes={onSelectAllNotes}
          />
        ))}
      </ul>
      {notes.length > 1 && <button onClick={onDeleteAll}>Delete All</button>}
      {notes.length > 1 && <button onClick={onResetAllNotes}>Reset All</button>}
      {notes.length > 1 && <button onClick={onSelectAllNotes}>Select All</button>}

    </>
    
  );
};

export default ListOfNote;
