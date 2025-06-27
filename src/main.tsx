import { BrowserRouter, Route, Routes } from 'react-router';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import CourseDetailWrapper from './components/Course/CourseDetailWrapper.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="course/:id" element={<CourseDetailWrapper />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
