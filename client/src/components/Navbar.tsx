import { useState } from "react";

export default function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  
  return (
    <nav className="absolute w-full flex items-center justify-center dark:bg-gray-900 text-white font-oswald" style={{ zIndex: 1 }}>
        <div className="navbar-menu-items w-full">

          <div className="block md:hidden m-4">
            <button className="p-2 border-4" onClick={toggleMenu}>
              <i className="fa-solid fa-bars text-4xl transition duration-200 hover:text-slate-400"></i>
            </button>
          </div>

          <div className={`md:hidden fixed top-0 left-0 w-64 p-4 bg-slate-500 border-r-2 border-slate-800 h-full overflow-y-auto transform transition-transform duration-300 ${menuOpen ? "translate-x-0" : "-translate-x-full"}`}>
          <button className="p-2 border-4" onClick={toggleMenu}>
            <i className="fa-solid fa-bars text-4xl transition duration-200 hover:text-slate-400"></i>
          </button>
          <ul className="menu my-8 space-y-2 w-full menu-vertical justify-evenly text-2xl">
            <li><a href='/' className='p-2 font-bold hover:bg-blue-100 hover:bg-opacity-25 duration-150'>HOME</a></li>
            <li><a href='/overview' className='p-2 font-bold hover:bg-blue-100 hover:bg-opacity-25 duration-150'>OVERVIEW</a></li>
            <li><a href='/exec' className='p-2 font-bold hover:bg-blue-100 hover:bg-opacity-25 duration-150'>EXEC BOARD</a></li>
            <li><a href='/gallery' className='p-2 font-bold hover:bg-blue-100 hover:bg-opacity-25 duration-150'>GALLERY</a></li>
            <li><a href='/events' className='p-2 font-bold hover:bg-blue-100 hover:bg-opacity-25 duration-150'>EVENTS</a></li>
            <li><a href='/coursesearch' className='p-2 font-bold hover:bg-blue-100 hover:bg-opacity-25 duration-150'>COURSE SEARCH</a></li>
            <li><a href='/more' className='p-2 font-bold hover:bg-blue-100 hover:bg-opacity-25 duration-150'>MORE</a></li>
            <li><a href='/join' className='p-2 font-bold hover:bg-blue-100 hover:bg-opacity-25 duration-150'>JOIN US!</a></li>
          </ul>
        </div>

          <ul className="menu hidden md:flex my-2 w-full menu-horizontal justify-evenly text-2xl">
            <li><a href='/' className='p-2 font-bold hover:bg-blue-100 hover:bg-opacity-25 duration-150'>HOME</a></li>
            <li>
              <a className='p-2 font-bold hover:bg-blue-100 hover:bg-opacity-25 duration-150'>ABOUT US</a>
              <ul className="w-36 p-2 absolute bg-gray-400 shadow text-lg">
                <li><a href='/overview' className='p-2 hover:bg-blue-100 hover:bg-opacity-25 duration-150'>OVERVIEW</a></li>
                <li><a href='/exec' className='p-2 hover:bg-blue-100 hover:bg-opacity-25 duration-150'>EXEC BOARD</a></li>
              </ul>
            </li>

            <li><a href='/gallery' className='p-2 font-bold hover:bg-blue-100 hover:bg-opacity-25 duration-150'>GALLERY</a></li>


            <li>
            <a href="/" className="flex items-center rounded-md hover:bg-blue-100 hover:bg-opacity-25 p-2 duration-150">
              <img src="/images/image-logo-small.jpg" className="h-12" alt="Logo" />
            </a>
            </li>

            <li><a href='/events' className='p-2 font-bold hover:bg-blue-100 hover:bg-opacity-25 duration-150'>EVENTS</a></li>

            <li>
              <a className='p-2 font-bold hover:bg-blue-100 hover:bg-opacity-25 duration-150'>RESOURCES</a>
              <ul className="w-48 p-2 absolute bg-gray-400 shadow text-lg">
                <li><a href='/coursesearch' className='p-2 font-bold hover:bg-blue-100 hover:bg-opacity-25 duration-150'>COURSE SEARCH</a></li>
                <li><a href='/more' className='p-2 font-bold hover:bg-blue-100 hover:bg-opacity-25 duration-150'>MORE</a></li>
              </ul>
            </li>

            <li><a href='/join' className='p-2 font-bold hover:bg-blue-100 hover:bg-opacity-25 duration-150'>JOIN!</a></li>

          </ul>
        </div>
    </nav>
  );
}

