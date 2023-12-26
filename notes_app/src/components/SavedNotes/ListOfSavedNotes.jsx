/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useMemo, useState } from "react";

import SavedItem from "./SavedItem";

import styles from "../../styles/SavedNotes/ListOfSavedNotes.module.css";

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
        <div className={styles.search}>
          <h2 htmlFor="search">Search : </h2>
          <input
            onChange={(e) => setQuery(e.target.value)}
            id="search"
            type="text"
          ></input>
        </div>
      )}

      <ol className={styles.ol}>
        {filteredItems.length >= 1 ? filteredItems.map((filteredItem) => (
          <SavedItem key={filteredItem.id} filteredItem={filteredItem} />
        )) : <h2>save your notes !!!</h2>}
      </ol>
      {((notes.length > 1 && savedNotes.length >= 1) ||
        savedNotes.length > 1) && (
        <button className={styles.button} onClick={onDeleteAllSavedNotes}>
          Delete All
        </button>
      )}
    </div>
  );
};

export default ListOfSavedNotes;
