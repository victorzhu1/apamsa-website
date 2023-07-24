
export default function Navbar() {
  return (
    <nav className="absolute w-full flex items-center justify-center dark:bg-gray-900 text-white font-rubik" style={{ zIndex: 1 }}>
        <div className="navbar-menu-items">
          <ul className="menu my-2 menu-horizontal space-x-20 text-3xl">
            <li><a href='/' className='no-underline font-bold'>HOME</a></li>
            <li>
              <a className='no-underline font-bold'>ABOUT</a>
              <ul className="p-2 absolute bg-gray-100 bg-opacity-25 shadow rounded-md text-lg">
                <li><a href='/coursesearch' className='no-underline'>OVERVIEW</a></li>
                <li><a href='/research' className='no-underline'>EXEC BOARD</a></li>
              </ul>
            </li>

            <li>
            <a href="/" className="flex items-center no-underline rounded-md hover:bg-blue-100 hover:bg-opacity-25 p-2 transition-colors duration-150">
              <img src="/images/image-logo-small.jpg" className="h-12" alt="Logo" />
            </a>
            </li>
            <li><a href='/announcements' className='no-underline font-bold'>EVENTS</a></li>
            <li>
              <a className='no-underline font-bold'>RESOURCES</a>
              <ul className="p-2 absolute bg-gray-100 bg-opacity-25 shadow rounded-md text-lg">
                <li><a href='/coursesearch' className='no-underline'>COURSE SEARCH</a></li>
                <li><a href='/research' className='no-underline'>MORE</a></li>
              </ul>
            </li>
          </ul>
        </div>
    </nav>
  );
}

