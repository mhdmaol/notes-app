import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles/style.css';
import NotesApp from './components/NotesApp';
import { BrowserRouter } from 'react-router-dom';
import ThemeProvider from './components/ThemeProvider';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <BrowserRouter>
        <NotesApp />
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>,
);
