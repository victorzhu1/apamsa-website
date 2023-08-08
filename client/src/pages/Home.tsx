import { useRef, useEffect, useState } from 'react';


export function Home () {

    const backgroundStyle = {
        backgroundImage: `url(${'/images/hoffman.png'})`,
        backgroundRepeat: 'repeat',
    };

    const [selectedPillar, setSelectedPillar] = useState<string | null>(null);

    const pillarHeaders: { [key: string]: string } = {
        outreach: 'OUTREACH',
        professional: 'PROFESSIONAL DEVELOPMENT',
        community: 'COMMUNITY',
      };

    const pillarData: { [key: string]: string } = {
        outreach: 'Filler text for Outreach section.',
        professional: 'Filler text for Professional Development section.',
        community: 'Filler text for Community section.',
    };

    const handlePillarButtonClick = (pillar: string) => {
        setSelectedPillar(pillar);
    };

    const handleCloseButtonClick = () => {
        setSelectedPillar(null);
    };

    const dropdownContentRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (selectedPillar && dropdownContentRef.current) {
        dropdownContentRef.current.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
        }
    }, [selectedPillar]);

    return (
        <div className='home-container h-full w-screen font-oswald'>

            <div className='hero-container relative flex justify-center items-center h-screen text-white'
            style={{
                backgroundImage: `url(${'/images/home-image-crop.jpeg'})`,
                backgroundSize: 'cover',
                filter: 'grayscale(70%)',
            }}>
                <div
                    className="absolute w-full h-full flex flex-col justify-center items-center"
                    style={{
                    background: 'rgba(39, 159, 255, 0.6)',
                    }}
                    >
                        <div className='home-info ml-5 mr-5 md:ml-0 md:mr-80 mb-8 space-y-4'>
                            <h1 className="text-5xl md:text-9xl font-bold ">UPENN APAMSA</h1>
                            <p className="text-xl md:text-2xl font-bold">THE FIRST PRE-MEDICAL AANHPI ORGANIZATION AT UPENN</p>
                            <div className="home-info-buttons">
                                <a role="button" href="/overview" className="inline-block border border-white cursor-pointer px-4 py-3 
                                text-center text-xl font-semibold uppercase text-white transition duration-200 ease-in-out 
                                hover:bg-opacity-25 hover:bg-white">
                                    LEARN MORE
                                </a>
                                <span style={{ margin: '0 5px' }}></span>
                                <a role="button" href="/events" className="inline-block border border-white cursor-pointer px-4 py-3 
                                text-center text-xl font-bold text-white transition duration-200 ease-in-out 
                                hover:bg-opacity-25 hover:bg-white">
                                    COMING UP
                                </a>
                            </div>
                        </div>
                    </div>
                
            </div>

            <div className="mission-container w-screen"
                style={backgroundStyle}>
                <div className="chapter-info-container flex flex-col md:flex-row align-items-center justify-center px-8 py-8 md:px-0 md:py-16">
                
                    <img src="/images/chapter-into-pic.jpeg" alt="pic" 
                            className="object-cover shadow mb-8 md:mb-0 md:w-2/5 md:h-2/5"
                            /> 
                    <div className="chapter-info-text md:w-1/3 md:flex flex-col md:ml-32 text-center">
                        <h1 className="text-slate-900 inline-block text-4xl md:text-5xl font-bold mb-4 md:mb-16 px-12 py-3
                         bg-white border-4 border-slate-800">OUR CHAPTER</h1>
                        <p className="text-xl">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                    </div>
                </div>
                <div className="mission-info-container bg-slate-500 py-16 flex flex-col text-center text-white">
                    <h1 className="text-4xl md:text-5xl font-bold mb-8"> OUR MISSION </h1>
                    <p className="w-2/3 md:w-1/2 mx-auto text-lg md:text-2xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                        ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                </div>
            </div>


            <div className="pillars-container w-screen py-16 text-center"
                style={backgroundStyle}>
                <h1 className="text-slate-900 inline-block text-4xl md:text-5xl font-bold mb-8 md:mb-16 px-12 py-3 bg-white border-4 border-slate-800">OUR PILLARS</h1>
                <div className="pillars-menu-horizontal space-y-8 md:space-y-0 mx-20 md:mx-16 flex flex-col md:flex-row justify-between">
                    <div className="pillar-item flex flex-col justify-center">
                        <div
                        className='relative items-center'
                        onClick={() => handlePillarButtonClick('outreach')}
                        >
                            <img
                                src='/images/outreach-new.jpeg'
                                alt='image'
                                className='rounded-full shadow-lg mb-3 transition-transform transform-gpu hover:scale-105 cursor-pointer'
                            />
                        </div>
                        <button
                            className={`inline-block border-4 border-slate-800 bg-white cursor-pointer px-4 py-2 text-center text-md md:text-2xl 
                            font-bold text-slate-800`}
                            onClick={() => handlePillarButtonClick('outreach')}
                            >
                            OUTREACH
                        </button>
                       
                    </div>
                    <div className="pillar-item flex flex-col justify-center">
                        <div
                        className='relative items-center'
                        onClick={() => handlePillarButtonClick('professional')}
                        >
                            <img
                                src='/images/professional-new.jpeg'
                                alt='image'
                                className='rounded-full shadow-lg mb-3 transition-transform transform-gpu hover:scale-105 cursor-pointer'
                            />
                        </div>
                        <button
                            className={`inline-block border-4 border-slate-800 bg-white cursor-pointer px-4 py-2 text-center text-md md:text-2xl 
                            font-bold text-slate-800`}
                            onClick={() => handlePillarButtonClick('professional')}
                            >
                            PROFESSIONAL DEVELOPMENT
                        </button>
                        
                    </div>
                    <div className="pillar-item flex flex-col justify-center">
                        <div
                        className='relative items-center'
                        onClick={() => handlePillarButtonClick('community')}
                        >
                            <img
                                src='/images/community-new.jpeg'
                                alt='image'
                                className='rounded-full shadow-lg mb-3 transition-transform transform-gpu hover:scale-105 cursor-pointer'
                            />
                        </div>
                        <button
                            className={`inline-block border-4 border-slate-800 bg-white cursor-pointer px-4 py-2 text-center text-md md:text-2xl
                            font-bold text-slate-800`}
                            onClick={() => handlePillarButtonClick('community')}
                            >
                            COMMUNITY
                        </button>
                        
                    </div>
                </div>
            </div>

            <div ref={dropdownContentRef} 
                className={`dropdown-content w-full bg-white }`}>
                {selectedPillar && (
                <div className='mb-4 px-4 py-12 mx-auto'>
                    <div className='dropdown-text-container mx-4 md:mx-16'>
                        <h1 className='text-slate-900 text-3xl font-bold mb-4'>{pillarHeaders[selectedPillar]}</h1>
                        <p className='text-slate-800'>{pillarData[selectedPillar]}</p>
                        <button
                            className='mt-4 px-4 py-2 text-white bg-slate-800 font-semibold hover:bg-opacity-75 transition duration-200'
                            onClick={handleCloseButtonClick}
                            >
                            CLOSE
                        </button>
                    </div>
                </div>
                )}
            </div>
            

         </div>
    )
}