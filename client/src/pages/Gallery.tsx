export function Gallery() {
    return (
        <div className='gallery-container h-full w-screen flex flex-col items-center justify-center font-oswald'>
            <div className='gallery-header w-full bg-slate-700 flex justify-center md:justify-start text-center'>
                <div className='gallery-text-container mt-36 mb-4 md:ml-32'>
                    <h1 className='text-5xl md:text-6xl text-white'>
                        GALLERY
                    </h1>
                </div>
            </div>
            <div
            className='background-image relative w-screen'
            style={{
                backgroundImage: `url(${'/images/join-bg.png'})`,
                backgroundSize: 'cover',
                filter: 'grayscale(70%)',
                height: '75vh'
            }}
            >
                <div
                    className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-center"
                    style={{
                    background: 'rgba(39, 159, 255, 0.5)',
                    }}
                >
                    <div className="gallery-text-container mx-12 px-16 py-12 bg-slate-100 bg-opacity-75 border-2 border-slate-800">
                        <h1 className="text-slate-900 text-2xl md:text-5xl font-bold mb-4 md:mb-16">PHOTO GALLERY</h1>
                        <p className="text-xl md:text-3xl">
                            COMING SOON!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}