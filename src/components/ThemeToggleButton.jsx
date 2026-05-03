import { IoMdMoon } from 'react-icons/io';
import { MdLightMode } from 'react-icons/md';
import { useContext } from 'react';
import ThemeContext from '../context/ThemeContext';

function ThemeToggleButton() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button onClick={toggleTheme}>
      {theme === 'light' ? <MdLightMode size={20}/> : <IoMdMoon size={20}/>}
    </button>
  );
}

export default ThemeToggleButton;
