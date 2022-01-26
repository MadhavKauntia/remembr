import { MdDeleteForever } from "react-icons/md";
import styles from "./Note.module.css";

const Note = (props) => {
  return (
    <div className={styles.note}>
      <span>{props.text}</span>
      <div className={styles["note-footer"]}>
        <small>{props.date}</small>
        <MdDeleteForever
          className={styles["delete-icon"]}
          size="1.3em"
          onClick={() => props.deleteNote(props.id)}
        />
      </div>
    </div>
  );
};

export default Note;
