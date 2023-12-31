/* eslint-disable react/prop-types */
import { useState } from "react";

import styles from "../../styles/Form/FormNote.module.css";

const FormNote = ({ onAddNewNoteToNotes }) => {
  const [newNote, setNewNote] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (newNote === "") return "";
    onAddNewNoteToNotes(newNote);
    setNewNote("");
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.insideForm}>
        <h2 htmlFor="note"> your note : </h2>
        <input
          value={newNote}
          onChange={(e) => setNewNote(e.target.value)}
          id="note"
          type="text"
        />
      </div>
      <button className={styles.button} type="submit">
        Add Note
      </button>
    </form>
  );
};

export default FormNote;
