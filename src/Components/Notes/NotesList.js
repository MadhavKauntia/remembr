import AddNote from "./AddNote";
import Note from "./Note";
import styles from "./NotesList.module.css";

const NotesList = (props) => {
  const { notes } = props;
  const handleAddNote = (text) => {
    props.addNote(text);
  };
  return (
    <div className={styles["notes-list"]}>
      {notes.map((note) => (
        <Note
          id={note.id}
          text={note.text}
          date={note.date}
          deleteNote={props.deleteNote}
        />
      ))}
      <AddNote handleAddNote={handleAddNote} />
    </div>
  );
};

export default NotesList;
