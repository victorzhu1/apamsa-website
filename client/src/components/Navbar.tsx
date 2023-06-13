
export default function Navbar() {
  return (
    <nav className="fixed-top bg-white dark:bg-gray-900 shadow text-blue-900 font-sans">
      <div className="max-w-screen-xl flex items-center justify-between mx-auto">
        <a href="/" className="flex items-center no-underline rounded-md hover:bg-gray-200 p-2 transition-colors duration-150">
            <span className="self-center font-semibold whitespace-nowrap text-blue-900 text-3xl">APAMSA</span>
            <img src="/images/image-logo-small-dark.png" className="h-8 ml-3" alt="Logo" />
        </a>
        <div className="navbar-menu-items">
          <ul className="menu my-2 menu-horizontal px-1">
            <li><a href='/' className='no-underline font-bold'>Home</a></li>
            <li><a href='/about' className='no-underline font-bold'>About</a></li>
            <li><a href='/announcements' className='no-underline font-bold'>Announcements</a></li>
            <li>
              <a className='no-underline font-bold'>Resources</a>
              <ul className="p-2 absolute bg-white shadow rounded-md">
                <li><a href='/coursesearch' className='no-underline'>Course Search</a></li>
                <li><a href='/research' className='no-underline'>Research Search</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

