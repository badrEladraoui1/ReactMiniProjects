/* eslint-disable react/prop-types */

import styles from "../../styles/SavedNotes/SavedItem.module.css";

function SavedItem({ filteredItem }) {
  return (
    <div>
      <li className={styles.savedLi}>
        <h3>{filteredItem.note}</h3>
        <hr/>
      </li>
    </div>
  );
}

export default SavedItem;
