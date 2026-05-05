import { useEffect, useState } from 'react';
import { getActiveNotes, getArchivedNotes } from '../utils/network-data';
import NotesList from '../components/NotesList';
import SearchBar from '../components/SearchBar';
import useInput from '../hooks/useInput';
import CreateButton from '../components/CreateButton';

function HomePage({ isArchivePage }) {
  const [notes, setNotes] = useState([]);
  const [value, setValue] = useInput();


  useEffect(() => {
    async function notesList() {
      if (isArchivePage) {
        const { error, data } = await getArchivedNotes();
        if (!error) {
          setNotes(data);
        }
      } else {
        const { error, data } = await getActiveNotes();
        if (!error) {
          setNotes(data);
        }
      }
    }

    notesList();
  }, [isArchivePage]);

  const filteredNotes = notes.filter((item) => item.title.toLowerCase().includes(value.toLowerCase()) || item.body.toLowerCase().includes(value.toLowerCase()));

  return (
    <>
      <SearchBar value={value} setValue={setValue}></SearchBar>
      <NotesList notes={filteredNotes} />
      <CreateButton />
    </>
  );
}

export default HomePage;
