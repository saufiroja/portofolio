import React from 'react';
import { Route, Routes } from 'react-router-dom';

import {
  About,
  Certificate,
  Education,
  Experience,
  Main,
  Navbar,
  Skills,
  NotFound,
} from './components';
import Projects from './pages/Projects/Projects';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='about' element={<About />} />
        <Route path='/skills' element={<Skills />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/education' element={<Education />} />
        <Route path='/certificate' element={<Certificate />} />
        <Route path='/experience' element={<Experience />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
