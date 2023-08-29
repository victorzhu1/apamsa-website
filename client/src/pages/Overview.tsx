
export function Overview() {
    return (
        <div className='overview-container h-full w-screen flex flex-col items-center justify-center font-oswald'>
            <div className='overview-header w-full bg-slate-700 flex justify-center md:justify-start text-center'>
                <div className='overview-text-container mt-36 mb-4 md:ml-32'>
                    <h1 className='text-5xl md:text-6xl text-white'>
                        OVERVIEW
                    </h1>
                </div>
            </div>
            <div className='overview-content py-4 md:py-8 flex flex-col'>

                <div className='overview-section flex flex-col md:flex-row align-items-center justify-center py-8'>
                    <img src="/images/overview-apamsa.jpeg" alt="pic" className="rounded-full shadow hidden md:block"
                        style={{
                            objectFit: 'cover',
                            width: '35%',
                            height: '35%',
                        }}/> 

                    <div className="aspect-w-4 aspect-h-3 px-6 mb-4 md:hidden">
                        <img
                            src="/images/overview-1.jpg"
                            alt="pic"
                            className="object-cover shadow"
                        />
                    </div>

                    <div className="overview-section-text w-3/4 md:w-1/3 flex flex-col md:ml-32 text-center">
                        <h1 className="text-slate-900 inline-block text-3xl lg:text-5xl font-bold mb-2 md:mb-8 md:px-12 py-3 bg-white border-4 border-slate-800">APAMSA NATIONWIDE</h1>
                        <p className="text-lg md:text-xl mb-3 md:mb-8">
                            APAMSA serves as a forum for student leaders to engage health issues and develop initiatives and projects addressing needs. 
                            The local, regional, and national activities of APAMSA aim to promote the health of the AANHPI community and help healthcare workers understand 
                            how to care for AANHPI patients in a culturally sensitive manner.
                        </p>
                        <a role="button" href="https://www.apamsa.org" target="_blank" className="inline-block border-2 border-slate-800 cursor-pointer px-2 md:px-4 py-3 
                        text-center text-md font-semibold uppercase text-slate-800 transition duration-200 ease-in-out 
                        hover:bg-opacity-25 hover:bg-slate-900">
                            CHECK OUT APAMSA'S OFFICIAL WEBSITE
                        </a>
                    </div>
                </div>

                <div className='overview-section flex flex-col md:flex-row align-items-center justify-center py-8'>
                    <div className="overview-section-text w-3/4 md:w-1/3 flex flex-col md:mr-32 text-center">
                        <h1 className="text-slate-900 inline-block text-3xl lg:text-5xl font-bold mb-2 md:mb-8 md:px-12 py-3 bg-white border-4 border-slate-800">APAMSA AT UPENN</h1>
                        <p className="text-lg md:text-xl">
                        UPenn Pre-Med APAMSA is the First AANHPI Pre-Medical Club at the University of Pennsylvania and the sixth Pre-Med division of APAMSA in the nation. 
                        Through our three pillars of Community, Professional Development, and Outreach, we create a supportive environment for aspiring AANHPI physicians.
                        </p>
                    </div>
                    <img src="/images/overview-1-square.jpg" alt="pic" className="rounded-full shadow hidden md:block"
                        style={{
                            objectFit: 'cover',
                            width: '35%',
                            height: '35%',
                        }}/> 

                    <div className="aspect-w-4 aspect-h-3 mt-3 px-6 md:hidden">
                        <img
                            src="/images/overview-1.jpg"
                            alt="pic"
                            className="object-cover shadow"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}