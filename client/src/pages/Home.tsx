export function Home () {
    return (
        <div className='home-container shadow mb-16'>
            <div className='hero-container flex justify-center items-center h-screen text-white'>
                <div
                className='background-image absolute w-full h-full'
                style={{
                    backgroundImage: `url(${'/images/home-image.jpeg'})`,
                    backgroundSize: 'cover',
                    filter: 'grayscale(80%)',
                    transform: 'scaleX(-1)',
                }}
                >
                    <div
                        className="absolute top-0 left-0 w-full h-full"
                        style={{
                        background: 'rgba(60, 120, 255, 0.6)',
                        }}
                    ></div>
                </div>
                <div className='home-info mr-80 font-rubik relative'>
                    <h1 className="text-7xl font-bold ">UPenn APAMSA</h1>
                    <p className="text-xl font-bold">placeholdertext</p>
                    <div className="home-info-buttons">
                        <a role="button" href="/about" className="inline-block cursor-pointer bg-sky-600 px-4 py-3 
                        text-center text-sm font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-blue-600
                        no-underline">
                            Learn More!
                        </a>
                        <span style={{ margin: '0 5px' }}></span>
                        <a role="button" href="/announcements" className="inline-block cursor-pointer bg-sky-600 px-4 py-3 
                        text-center text-sm font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-blue-600
                        no-underline">
                            Coming up!
                        </a>
                    </div>
                </div>
            </div>
        </div>
    
    )
}


                {/* <img src="/images/image-logo.jpg" alt="Logo" /> */}
