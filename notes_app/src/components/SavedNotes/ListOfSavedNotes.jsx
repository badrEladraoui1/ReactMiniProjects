/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import SavedItem from "./SavedItem";
import styles from "../../styles/SavedNotes/ListOfSavedNotes.module.css";
import { useMemo, useState } from "react";

const ListOfSavedNotes = ({ savedNotes, notes, onDeleteAllSavedNotes }) => {
  const [query, setQuery] = useState("");

  const filteredItems = useMemo(() => {
    // ask chatGpt about these returns !!!
   return savedNotes.filter((prevSavedNote) => {
      return prevSavedNote.note.toLowerCase().includes(query.toLowerCase());
    });
  }, [savedNotes, query]);

  return (
    <div className={styles.savedNotes}>
      {savedNotes.length > 1 && (
        <div>
          <h3>Saved Notes</h3>
          <label htmlFor="search">Search : </label>
          <input
            onChange={(e) => setQuery(e.target.value)}
            id="search"
            type="text"
          ></input>
        </div>
      )}

      <ol>
        {filteredItems.map((filteredItem) => (
          <SavedItem key={filteredItem.id} filteredItem={filteredItem} />
        ))}
      </ol>
      {(notes.length > 1 || savedNotes.length >= 1) && (
        <>
          <button onClick={onDeleteAllSavedNotes}>Delete All</button>
        </>
      )}
    </div>
  );
};

export default ListOfSavedNotes;
