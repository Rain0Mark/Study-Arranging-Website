import { BrowserRouter, Route, Routes } from 'react-router';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import CurriculumPage from './components/CurriculumPage.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/Curriculum" element={<CurriculumPage/>} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
