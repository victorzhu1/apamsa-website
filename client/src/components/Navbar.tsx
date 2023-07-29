
export default function Navbar() {
  return (
    <nav className="absolute w-full flex items-center justify-center dark:bg-gray-900 text-white font-oswald" style={{ zIndex: 1 }}>
        <div className="navbar-menu-items">
          <ul className="menu my-2 menu-horizontal flex justify-between space-x-24 text-2xl">
            <li><a href='/' className='p-2 font-bold hover:bg-blue-100 hover:bg-opacity-25 duration-150'>HOME</a></li>
            <li>
              <a className='p-2 font-bold hover:bg-blue-100 hover:bg-opacity-25 duration-150'>ABOUT</a>
              <ul className="w-36 p-2 absolute bg-gray-400 shadow text-lg">
                <li><a href='/overview' className='p-2 hover:bg-blue-100 hover:bg-opacity-25 duration-150'>OVERVIEW</a></li>
                <li><a href='/exec' className='p-2 hover:bg-blue-100 hover:bg-opacity-25 duration-150'>EXEC BOARD</a></li>
              </ul>
            </li>

            <li><a href='/announcements' className='p-2 font-bold hover:bg-blue-100 hover:bg-opacity-25 duration-150'>MEMBERS</a></li>


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

            <li><a href='/join' className='p-2 font-bold hover:bg-blue-100 hover:bg-opacity-25 duration-150'>JOIN US</a></li>

          </ul>
        </div>
    </nav>
  );
}

