import { useEffect, useState } from 'react';
import { getUserLogged, putAccessToken } from '../utils/network-data';
import LoginPage from '../page/LoginPage';
import RegisterPage from '../page/RegisterPage';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../page/HomePage';
import DetailPage from '../page/DetailPage';
import { useLocation } from 'react-router-dom';
import Navigation from './Navigation';
import AddPage from '../page/AddPage';

function NotesApp() {
  const [authedUser, setAuthedUser] = useState(null);
  const [init, setInit] = useState(true);

  const location = useLocation();

  const isArchivePage = location.pathname === '/archive';

  useEffect(() => {
    async function loadUser() {
      const { error, data } = await getUserLogged();
      if (!error) {
        setAuthedUser(data);
        setInit(false);
      } else {
        setInit(false);
      }
    }

    loadUser();
  }, []);

  async function onLoginSuccess({ accessToken }) {
    putAccessToken(accessToken);
    const { data } = await getUserLogged();

    setAuthedUser(data);
  }

  function onLogOutHandler() {
    setAuthedUser(null);
    putAccessToken(null);
  }

  if (init) {
    return <p>Loading...</p>;
  }

  if (authedUser === null) {
    return (
      <Routes>
        <Route
          path="/*"
          element={<LoginPage loginSuccess={onLoginSuccess} />}
        ></Route>
        <Route path="/register" element={<RegisterPage />}></Route>
      </Routes>
    );
  }

  return (
    <div className="dark:bg-gray-500 min-h-screen min-w-screen">
      <Navigation
        displayUser={authedUser.name}
        isArchived={isArchivePage}
        logOutHandler={onLogOutHandler}
      ></Navigation>

      <Routes>
        <Route
          path="/*"
          element={
            <HomePage isArchivePage={isArchivePage} userId={authedUser.id} />
          }
        />
        <Route path="/notes/:id" element={<DetailPage />} />
        <Route path="/create-notes" element={<AddPage />} />
      </Routes>
    </div>
  );
}

export default NotesApp;
