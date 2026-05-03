import { BiLogOut } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import ThemeToggleButton from './ThemeToggleButton';


function Navigation({ displayUser, isArchived, logOutHandler }) {
  return (
    <div className="flex bg-blue-300 h-20 items-center p-4 shadow-md dark:bg-blue-900 dark:text-white">
      <button
        className="flex gap-2 text-2xl underline hover:cursor-pointer flex-1"
        onClick={logOutHandler}
      >
        <BiLogOut className="mt-1.5" />
        {displayUser}
      </button>

      <div className="flex gap-4">
        {isArchived ? (
          <Link to="/" className="underline">
            Active Notes
          </Link>
        ) : (
          <Link to="/archive" className="underline">
            Archived
          </Link>
        )}
        <ThemeToggleButton></ThemeToggleButton>
      </div>
    </div>
  );
}

export default Navigation;
