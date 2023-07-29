import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import { Home } from './pages/Home';
import { Overview } from './pages/Overview';
import { Events } from './pages/Events';
import { CourseSearch } from './pages/CourseSearch';
import { More } from './pages/More';
import Footer from './components/Footer';
import { Exec } from './pages/Exec';


function App() {
  return (
    <>
      <Navbar/>
      <div className='page-content'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/overview' element={<Overview />} />
          <Route path='/exec' element={<Exec />} />
          <Route path='/events' element={<Events />} />
          <Route path='/coursesearch' element={<CourseSearch />} />
          <Route path='/more' element={<More />} />
        </Routes>
      </div>
      <Footer/>
    </>
  );
}

export default App;
