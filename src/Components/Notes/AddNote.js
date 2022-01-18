import styles from "./AddNote.module.css";
import { useState } from "react";

const AddNote = (props) => {
  const [noteText, setNoteText] = useState("");
  const characterLimit = 200;
  const handleChange = (event) => {
    if (characterLimit - event.target.value.length >= 0) {
      setNoteText(event.target.value);
    }
  };
  const handleSaveClick = () => {
    if (noteText.trim().length > 0) {
      props.handleAddNote(noteText);
      setNoteText("");
    }
  };
  return (
    <div className={`${styles.note} ${styles.new}`}>
      <textarea
        placeholder="Type to add a note..."
        cols="10"
        rows="8"
        value={noteText}
        onChange={handleChange}
      ></textarea>
      <div className={styles["note-footer"]}>
        <small>{characterLimit - noteText.length} Remaining</small>
        <button className={styles.save} onClick={handleSaveClick}>
          Save
        </button>
      </div>
    </div>
  );
};

export default AddNote;
