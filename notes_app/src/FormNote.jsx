/* eslint-disable react/prop-types */
import { useState } from "react";

const FormNote = ({ onAddNewNoteToNotes }) => {
  const [newNote, setNewNote] = useState("");

  const handleSumbit = (event) => {
    event.preventDefault();
    if (newNote === "") return "";
    onAddNewNoteToNotes(newNote);
    setNewNote("");
  };

  return (
    <form onSubmit={handleSumbit}>
      <label htmlFor="note"> your note : </label>
      <input
        value={newNote}
        onChange={(e) => setNewNote(e.target.value)}
        id="note"
        type="text"
      />
      <button type="submit">Add Note</button>
    </form>
  );
};

export default FormNote;
