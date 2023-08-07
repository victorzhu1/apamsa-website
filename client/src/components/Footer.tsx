import { SetStateAction, useState } from "react";

export default function Footer() {

  const [email, setEmail] = useState('');

  const handleInputChange = (e: { target: { value: SetStateAction<string>; }; }) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    //send email to server
    console.log('Email:', email);
    setEmail('');
  };
  
  return (
    <footer className='footer-container w-screen md:px-64 py-8 md:py-16 bg-slate-700 text-white font-oswald'>
        <div className='flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0'>
            <div className='logo-container flex flex-col items-center justify-center'>
              <img src="/images/image-logo-small.jpg" className="h-16" alt="Logo" />
              <h1 className="text-center">UPENN APAMSA</h1>
            </div>
            <div className='footer-newsletter'>
                <h1 className='mb-2 font-semibold text-base text-center'>SUBSCRIBE TO OUR NEWSLETTER!</h1>
                <div className='subscribe-button'>
                  <form onSubmit={handleSubmit}>
                    <input
                      type='email'
                      value={email}
                      onChange={handleInputChange}
                      placeholder='yourname@upenn.edu'
                      className='border border-gray-300 px-2 py-1 mr-2 text-slate-800'
                    />
                    <button
                      type='submit'
                      className='bg-slate-500 text-white px-4 py-2 transition duration-200 hover:bg-slate-400 '
                    >
                      SUBMIT
                    </button>
                  </form>
                </div>
            </div>
            <div className='footer-links'>
                <h1 className='font-semibold mb-2'>OUR LINKS</h1>
                <div className='socials-container flex flex-row justify-between space-x-2'>
                  <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-instagram text-4xl transition duration-200 hover:text-slate-400"></i>
                  </a>
                  <a href="https://www.tiktok.com/" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-tiktok text-3xl transition duration-200 hover:text-slate-400"></i>
                  </a>
                </div>
            </div>
        </div>
    </footer>
  );
}

