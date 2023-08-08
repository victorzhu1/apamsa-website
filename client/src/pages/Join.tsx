export function Join() {
    return (
        <div className='join-container h-full w-screen flex flex-col items-center justify-center font-oswald'>
            <div className='join-header w-full bg-slate-700 flex justify-center md:justify-start text-center'>
                <div className='join-text-container mt-36 mb-4 md:ml-32'>
                    <h1 className='text-5xl md:text-6xl text-white'>
                        JOIN US
                    </h1>
                </div>
            </div>
            <div
            className='background-image relative w-screen'
            style={{
                backgroundImage: `url(${'/images/join-bg.png'})`,
                backgroundSize: 'cover',
                filter: 'grayscale(70%)',
                height: '95vh',
            }}
            >
                <div
                    className="absolute w-full h-full flex flex-col justify-center items-center text-center"
                    style={{
                    background: 'rgba(39, 159, 255, 0.6)',
                    }}
                >
                    <div className="join-text-container md:flex flex-col md:space-y-4 items-center w-3/4 md:w-2/3 px-8 md:px-16 my-6 py-6 md:py-16 bg-slate-100 bg-opacity-75 
                    border-2 border-slate-800">
                        <h1 className="text-slate-900 font-bold text-2xl md:text-5xl mb-2">Interested in joining?</h1>
                        <p className="text-md md:text-xl mb-2">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                        <a role="button" href="https://www.google.com" target="_blank" rel="noreferrer" 
                        className="inline-block md:w-2/3 border-2 border-slate-800 cursor-pointer px-4 py-3 
                        text-center text-md font-semibold uppercase text-slate-800 transition duration-200 ease-in-out 
                        hover:bg-opacity-25 hover:bg-slate-900">
                            Sign up form!
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}