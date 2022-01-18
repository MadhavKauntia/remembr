import { useState, useContext } from "react";
import Landing from "../Landing/Landing";
import Login from "../Login/Login";
import FlexBox from "../UI/FlexBox/FlexBox";
import styles from "./Content.module.css";
import logo from "../../assets/taking-notes.svg";
import AuthContext from "../../Store/auth-context";
import NotesList from "../Notes/NotesList";
import { nanoid } from "nanoid";
import Search from "../Notes/Search";
import NotesHeader from "../Notes/NotesHeader";

const Content = (props) => {
  const [getStarted, setGetStarted] = useState(false);
  const authCtx = useContext(AuthContext);

  const goBackHandler = () => {
    setGetStarted(false);
  };

  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "First Note",
      date: "15/04/2021",
    },
    {
      id: nanoid(),
      text: "Second Note",
      date: "16/04/2021",
    },
    {
      id: nanoid(),
      text: "Third Note",
      date: "17/04/2021",
    },
    {
      id: nanoid(),
      text: "Fourth Note",
      date: "18/04/2021",
    },
  ]);

  const addNote = (text) => {
    setNotes((prevState) => [
      ...prevState,
      {
        id: nanoid(),
        text: text,
        date: new Date().toLocaleDateString(),
      },
    ]);
  };

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  const [searchText, setSearchText] = useState("");
  return (
    <>
      {authCtx.isLoggedIn || (
        <FlexBox className={styles.content}>
          <img className={styles.logo} src={logo} alt="taking notes" />
          {getStarted || <Landing setGetStarted={setGetStarted} />}
          {getStarted && <Login goBackHandler={goBackHandler} />}
        </FlexBox>
      )}
      {authCtx.isLoggedIn && (
        <div className={styles.container}>
          <NotesHeader />
          <Search handleSearchNote={setSearchText} />
          <NotesList
            notes={notes.filter((note) =>
              note.text.toLowerCase().includes(searchText)
            )}
            addNote={addNote}
            deleteNote={deleteNote}
          />
        </div>
      )}
    </>
  );
};

export default Content;
