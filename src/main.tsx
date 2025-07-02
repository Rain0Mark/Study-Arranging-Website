import { ThemeProvider } from '@emotion/react';
import { BrowserRouter, Route, Routes } from 'react-router';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import theme from './theme.tsx';
import TodoListLayout from './components/TodoLayout.tsx';
import CourseOverview from './CourseOverview.tsx';
import CoursePageWrapper from './components/Course/CoursePageWrapper.tsx';
import './index.css'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter basename="/~b13902070/">
        <Routes>
          <Route path="/" element={<TodoListLayout />}>
            <Route path="/" element={<CourseOverview />} />
            <Route path="course/:id" element={<CoursePageWrapper />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>
);
