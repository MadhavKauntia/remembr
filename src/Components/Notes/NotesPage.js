import { useEffect, useContext, useState } from 'react';
import AuthContext from '../../Store/auth-context';
import styles from './NotesPage.module.css';
import NotesHeader from './NotesHeader';
import Search from './Search';
import NotesList from './NotesList';

const NotesPage = (props) => {
    const authCtx = useContext(AuthContext);
    const [notes, setNotes] = useState([]);
    const fetchNotes = async () => {
        const response = await fetch(process.env.REACT_APP_BACKEND_URL + '/note?email=' + authCtx.authDetails.email);
        const data = await response.json();
        setNotes(data);
    };
    async function sendNote(note) {
        const response = await fetch(process.env.REACT_APP_BACKEND_URL + '/note', {
            method: "POST",
            body: note,
            headers: {
                "Content-Type": "application/json",
                "email": authCtx.authDetails.email,
                "firstName": authCtx.authDetails.firstName,
                "lastName": authCtx.authDetails.lastName,
                "frequency": "5"
            }
        });
        fetchNotes();
    }
    async function deleteNoteFromDb(id) {
        const response = await fetch(process.env.REACT_APP_BACKEND_URL + '/note?id=' + id, {
            method: "DELETE",
        });
        fetchNotes();
    }
    useEffect(() => {
        let isMounted = true;
        fetchNotes()
        return () => { isMounted = false; }
    }, []);

    const addNote = (text) => {
        sendNote(text);
    };

    const deleteNote = (id) => {
        deleteNoteFromDb(id);
    };
    const [searchText, setSearchText] = useState("");
    return <div className={styles.container}>
        <NotesHeader />
        <Search handleSearchNote={setSearchText} />
        <NotesList
            notes={notes.filter((note) =>
                note.note.toLowerCase().includes(searchText)
            )}
            addNote={addNote}
            deleteNote={deleteNote}
        />
    </div>
}

export default NotesPage;