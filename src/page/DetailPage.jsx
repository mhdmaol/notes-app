import { useParams } from 'react-router-dom';
import { getNote } from '../utils/network-data';
import Detail from '../components/Detail';
import { useEffect, useState } from 'react';
import { BiExit, BiArchiveIn, BiArchiveOut, BiTrash } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { deleteNote } from '../utils/network-data';
import { archiveNote, unarchiveNote } from '../utils/network-data';

function DetailPage() {
  const { id } = useParams();
  const [detail, setDetail] = useState(null);

  useEffect(() => {
    async function getNotesDetail() {
      const { error, data } = await getNote(id);
      if (!error) {
        setDetail(data);
      }
    }

    getNotesDetail();
  }, []);

  if (!detail) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <Detail {...detail} />
      <div id="action-button" className="flex fixed inset-be-0 right-0 m-8">
        <Link
          to="/"
          className="hover:cursor-pointer hover:-translate-y-0.5 transition"
        >
          <BiExit size={40}></BiExit>
        </Link>
        <Link
          to="/"
          className="hover:cursor-pointer hover:-translate-y-0.5 transition"
          onClick={
            detail.archived ? () => unarchiveNote(id) : () => archiveNote(id)
          }
        >
          {detail.archived ? (
            <BiArchiveOut size={40} />
          ) : (
            <BiArchiveIn size={40} />
          )}
        </Link>
        <Link
          to="/"
          className="hover:cursor-pointer hover:-translate-y-0.5 transition"
          onClick={() => deleteNote(id)}
        >
          <BiTrash size={40} />
        </Link>
      </div>
    </>
  );
}

export default DetailPage;
