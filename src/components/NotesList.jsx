import NotesItem from './NotesItem';

function NotesList({ notes }){
  return (
    <section id="noteslist" className="flex flex-wrap gap-4 justify-center mt-8">
      {
        notes.map((item) => {
          return (
            <NotesItem {...item} key={item.id}/>
          );
        })
      }
    </section>
  );
}

export default NotesList;