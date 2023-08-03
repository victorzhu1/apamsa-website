export function Join() {
    return (
        <div className='join-container h-screen w-screen flex flex-col items-center justify-center font-oswald'>
            <div className='join-header w-full bg-slate-700'>
                <div className='join-text-container mt-36 mb-4 ml-32 font-oswald'>
                    <h1 className='text-6xl text-white'>
                        JOIN US
                    </h1>
                </div>
            </div>
            <div
            className='background-image w-screen h-full'
            style={{
                backgroundImage: `url(${'/images/join-bg.png'})`,
                backgroundSize: 'cover',
                filter: 'grayscale(70%)',
            }}
            >
                <div
                    className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-center"
                    style={{
                    background: 'rgba(39, 159, 255, 0.6)',
                    }}
                >
                    <div className="join-text-container w-1/2 px-16 py-12 bg-slate-100 bg-opacity-75 border-2 border-slate-800">
                        <h1 className="text-slate-900 text-5xl font-bold mb-16">Interested in joining?</h1>
                        <p className="text-xl mb-8">
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