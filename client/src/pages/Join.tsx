export function Join() {
    return (
        <div className='join-container h-screen w-screen flex flex-col items-center justify-center font-oswald'>
            <div className='join-header w-full bg-slate-700 flex justify-center md:justify-start text-center'>
                <div className='join-text-container mt-36 mb-4 md:ml-32'>
                    <h1 className='text-5xl md:text-6xl text-white'>
                        JOIN US
                    </h1>
                </div>
            </div>
            <div
            className='background-image relative w-screen h-screen'
            style={{
                backgroundImage: `url(${'/images/join-bg.png'})`,
                backgroundSize: 'cover',
                filter: 'grayscale(70%)',
            }}
            >
                <div
                    className="absolute w-full h-full flex flex-col justify-center items-center text-center"
                    style={{
                    background: 'rgba(39, 159, 255, 0.6)',
                    }}
                >
                    <div className="join-text-container w-3/4 md:w-1/2 px-8 md:px-16 py-6 bg-slate-100 bg-opacity-75 border-2 border-slate-800">
                        <h1 className="text-slate-900 text-3xl md:text-5xl font-bold mb-8 md:mb-16">Interested in joining?</h1>
                        <p className="text-md md:text-xl mb-8">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                        <a role="button" href="https://www.google.com" target="_blank" className="inline-block border-2 border-slate-800 cursor-pointer px-4 py-3 
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