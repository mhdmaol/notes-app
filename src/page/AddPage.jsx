import useInput from '../hooks/useInput';
import { BiCheck } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { addNote } from '../utils/network-data';

function AddPage(){
  const [title, setTitle] = useInput();
  const [body, setBody] = useInput();

  function onSubmitHandler(){
    addNote({ title, body });
  }

  return (
    <form action="" className="border p-8 flex flex-col items-center gap-4">
      <input
        type="text"
        className="text-3xl shadow-md focus-visible:shadow-xl outline-0 rounded-md p-6 leading-relaxed w-full"
        placeholder="Masukkan Judul"
        value={title}
        onChange={setTitle}
      />

      <textarea
        type="text"
        className="text-xl shadow-md focus-visible:shadow-xl outline-0 rounded-md p-6 leading-relaxed w-full min-h-70"
        placeholder="Masukkan Isi Catatan"
        value={body}
        onChange={setBody}
      />

      <Link
        to='/'
        type="submit"
        className="fixed shadow-xl inset-be-0 right-0 m-8 rounded-full hover:-translate-y-0.5 hover:bg-white transition bg-gray-100 p-4"
        onClick={onSubmitHandler}
      >

        <BiCheck></BiCheck>
      </Link>
    </form>
  );
}

export default AddPage;