export function More() {
    return (
        <div className='more-container h-full w-screen flex flex-col items-center justify-center font-oswald'>
            <div className='more-header w-full bg-slate-700 flex justify-center md:justify-start text-center'>
                <div className='more-text-container mt-36 mb-4 md:ml-32'>
                    <h1 className='text-5xl md:text-6xl text-white'>
                        MORE
                    </h1>
                </div>
            </div>
            <div className='more-content flex flex-col'>

                <p className='mr-20'>Placeholder paragraph</p>

                <p>Placeholder paragraph</p>
            </div>
        </div>
    )
}