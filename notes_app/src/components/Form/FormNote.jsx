/* eslint-disable react/prop-types */
import { useState } from "react";

import Button from "../Buttons/Button";

import styles from "../../styles/Form/FormNote.module.css";

const FormNote = ({ onAddNewNoteToNotes }) => {
  const [newNote, setNewNote] = useState("");

  const handleSumbit = (event) => {
    event.preventDefault();
    if (newNote === "") return "";
    onAddNewNoteToNotes(newNote);
    setNewNote("");
  };

  return (
    <form className={styles.form} onSubmit={handleSumbit}>
      <h2 htmlFor="note"> your note : </h2>
      <input
        value={newNote}
        onChange={(e) => setNewNote(e.target.value)}
        id="note"
        type="text"
      />
      <Button className={styles.button} type="submit">
        Add Note
      </Button>
    </form>
  );
};

export default FormNote;
