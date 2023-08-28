import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Home } from './pages/Home';
import { Overview } from './pages/Overview';
import { Events } from './pages/Events';
import { CourseSearch } from './pages/CourseSearch';
import { Resources } from './pages/Resources';
import { Exec } from './pages/Exec';
import { CreatePost } from './pages/CreatePost';
import { Login } from './pages/Login';
import { Join } from './pages/Join';
import { Gallery } from './pages/Gallery';


function App() {
  return (
    <>
      <Navbar/>
      <div className='page-content'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/overview' element={<Overview />} />
          <Route path='/exec' element={<Exec />} />
          <Route path='/gallery' element={<Gallery />} />
          <Route path='/events' element={<Events />} />
          {/* <Route path='/coursesearch' element={<CourseSearch />} /> */}
          <Route path='/resources' element={<Resources />} />
          <Route path='/create' element={<CreatePost />} />
          <Route path='/login' element={<Login />} />


          <Route path='/join' element={<Join />} />
        </Routes>
      </div>
      <Footer/>
    </>
  );
}

export default App;
