import { BrowserRouter, Route, Routes } from 'react-router';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import TodoListLayout from './components/TodoListLayout.tsx';
import CourseOverview from './CourseOverview.tsx';
import CoursePageWrapper from './components/CoursePage/CoursePageWrapper.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter basename="/~b13902070/">
      <Routes>
        <Route path="/" element={<TodoListLayout />}>
          <Route path="/" element={<CourseOverview />} />
          <Route path="course/:id" element={<CoursePageWrapper />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
