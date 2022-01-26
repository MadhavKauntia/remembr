import { useEffect, useContext, useState } from 'react';
import AuthContext from '../../Store/auth-context';
import styles from './NotesPage.module.css';
import NotesHeader from './NotesHeader';
import Search from './Search';
import NotesList from './NotesList';
import BarLoader from '../UI/BarLoader/BarLoader';

const NotesPage = (props) => {
    const authCtx = useContext(AuthContext);
    const [notes, setNotes] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const fetchNotes = async () => {
        setIsLoading(true);
        const response = await fetch(process.env.REACT_APP_BACKEND_URL + '/note?email=' + authCtx.authDetails.email);
        const data = await response.json();
        setNotes(data);
        setIsLoading(false);
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
        setIsLoading(true);
        sendNote(text);
    };

    const deleteNote = (id) => {
        setIsLoading(true);
        deleteNoteFromDb(id);
    };
    const [searchText, setSearchText] = useState("");
    return <div className={styles.container}>
        <NotesHeader />
        <Search handleSearchNote={setSearchText} />
        {isLoading && <BarLoader />}
        {!isLoading && <NotesList
            notes={notes.filter((note) =>
                note.note.toLowerCase().includes(searchText)
            )}
            addNote={addNote}
            deleteNote={deleteNote}
        />}
    </div>
}

export default NotesPage;