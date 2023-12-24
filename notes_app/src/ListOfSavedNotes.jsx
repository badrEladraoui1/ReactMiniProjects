/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import SavedItem from "./SavedItem";

const ListOfSavedNotes = ({ savedNotes, notes, saveAllDoneNotes }) => {
  return (
    <>
      <ul>
        {savedNotes.map((savedNote) => (
          <SavedItem key={savedNote.id} savedNote={savedNote} />
        ))}
      </ul>
      {notes.length > 1 && (
        <button onClick={saveAllDoneNotes}>Save All</button>
      )}
    </>
  );
};

export default ListOfSavedNotes;
