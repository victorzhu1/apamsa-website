export function Overview() {
    return (
        <div className='overview-container h-full w-screen flex flex-col items-center justify-center'>
            <div className='overview-header w-full bg-slate-700'>
                <div className='overview-text-container mt-36 mb-4 ml-32 font-oswald'>
                    <h1 className='text-6xl text-white'>
                        OVERVIEW
                    </h1>
                </div>
            </div>
            <div className='overview-content my-16 flex flex-col'>

                <p className='mr-20'>Placeholder paragraph</p>

                <p>Placeholder paragraph</p>
            </div>
        </div>
    )
}