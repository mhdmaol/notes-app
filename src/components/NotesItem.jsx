import { Link } from 'react-router-dom';

function NotesItem({ id, title, body, createdAt }){
  return (
    <div className="p-4 w-80 min-h-50 rounded shadow-md dark:bg-gray-900 dark:text-white">
      <Link to={`/notes/${id}`} className="text-xl underline">{title}</Link>
      <p className="text-sm">{createdAt}</p>
      <p className="mt-2">{body}</p>
    </div>
  );
}

export default NotesItem;