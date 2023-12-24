/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import SavedItem from "./SavedItem";

const ListOfSavedNotes = ({ savedNotes, notes, saveAllDoneNotes , onDeleteAllSavedNotes }) => {
  return (
    <>
      <ul>
        {savedNotes.map((savedNote) => (
          <SavedItem key={savedNote.id} savedNote={savedNote} />
        ))}
      </ul>
      {(notes.length > 1 || savedNotes.length >= 1) && (
        <>
        <button onClick={saveAllDoneNotes}>Save All Done notes</button>
        <button onClick={onDeleteAllSavedNotes}>Delete All</button>
        </>
      )}
    </>
  );
};

export default ListOfSavedNotes;
