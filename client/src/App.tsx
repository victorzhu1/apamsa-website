import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Announcements } from './pages/Announcements';
import { CourseSearch } from './pages/CourseSearch';
import { ResearchSearch } from './pages/ResearchSearch';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar/>
      <div className='page-content'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/announcements' element={<Announcements />} />
          <Route path='/coursesearch' element={<CourseSearch />} />
          <Route path='/research' element={<ResearchSearch />} />
        </Routes>
      </div>
      <Footer/>
    </>
  );
}

export default App;
