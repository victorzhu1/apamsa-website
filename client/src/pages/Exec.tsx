import { useEffect, useState, useRef } from "react";




export function Exec() {

    const [selectedMember, setSelectedMember] = useState<string | null>(null);

    const memberNames: { [key: string]: string } = {
        a: 'HAYLE KIM',
        b: 'STACY LIANG',
        c: 'JEFF REN',
        d: 'JOEY CHEN',
        e: 'CINDY BATULZII',
        f: "ANNIE XIA"
    };

    const memberInfo: { [key: string]: string } = {
        a: 'Hayle is a junior studying Neuroscience and minoring in Chemistry from Knoxville, Tennessee. <br> <br> In her free time, she enjoys grocery shopping and baking!',
        b: 'Stacy is a junior studying Health and Societies and Biology, with a minor in Chemistry. <br> <br> From the Philly suburbs, she loves dancing, eating good food, and spending too much time on her phone.',
        c: 'Jeff is a sophomore from Northville, MI studying biology. <br> <br> He enjoys working out from judo and the gym, and gaming, reading, and partying in spare time.',
        d: 'Joey is a sophomore studying Biology and minoring in Healthcare Management from Philly. <br> <br> In her free time, she enjoys cooking and exploring the city.',
        e: 'Cindy is a junior from Highland Park, IL. She majors in Neuroscience and is minoring in Chemistry and Healthcare Management. <br> <br> She loves singing, hanging out with friends, and trying new food.',
        f: 'Annie is a junior from Cincinnati, OH studying Biology with a minor in Chemistry. <br> <br> She cooks and loves working on creative writing in her free time.'
    };

    const handleMemberButtonClick = (member: string) => {
        setSelectedMember(member);
    };

    const handleCloseButtonClick = () => {
        setSelectedMember(null);
    };

    const dropdownContentRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (selectedMember && dropdownContentRef.current) {
        dropdownContentRef.current.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
        }
    }, [selectedMember]);


    return (
        <div className='exec-container h-full w-screen flex flex-col items-center justify-center font-oswald'>
            <div className='exec-header w-full bg-slate-700 flex justify-center md:justify-start text-center'>
                <div className='exec-text-container mt-36 mb-4 md:ml-32'>
                    <h1 className='text-5xl md:text-6xl text-white'>
                        EXEC BOARD
                    </h1>
                </div>
            </div>
            <div className='exec-content-top mt-12 w-full flex flex-row justify-evenly'>
                <div className='card w-40 h-60 md:w-60 md:h-80 border-0 bg-cover transition-transform transform-gpu hover:scale-105 cursor-pointer'
                onClick={() => handleMemberButtonClick('a')}>
                    <div className='card-bg w-full h-full rounded bg-cover flex flex-col justify-end shadow'
                    style={{
                        backgroundImage: `url(${'/images/exec-headshots/hkim.jpeg'})`,
                    }}>
                        <div className='card-text w-full h-16 flex flex-col justify-center bg-slate-800 bg-opacity-50 rounded-b text-white text-center '>
                            <h1 className='inline-block text-lg'>HAYLE KIM</h1>
                            <h2 className='inline-block text-md'>CO-PRESIDENT</h2>
                        </div>
                    </div>
                </div>

                <div className='card w-40 h-60 md:w-60 md:h-80 border-0 bg-cover transition-transform transform-gpu hover:scale-105 cursor-pointer'
                onClick={() => handleMemberButtonClick('b')}>
                    <div className='card-bg w-full h-full rounded bg-cover flex flex-col justify-end shadow'
                    style={{
                        backgroundImage: `url(${'/images/exec-headshots/sliang.jpeg'})`,
                    }}>
                        <div className='card-text w-full h-16 flex flex-col justify-center bg-slate-800 bg-opacity-50 rounded-b text-white text-center '>
                            <h1 className='inline-block text-lg'>STACY LIANG</h1>
                            <h2 className='inline-block text-md'>CO-PRESIDENT</h2>
                        </div>
                    </div>
                </div>
            </div>

            <div className='exec-content-lg hidden md:block w-full'>
                <div className='exec-content-bottom my-12 w-full flex flex-row justify-evenly'>
                    <div className='card w-60 h-80 border-0 bg-cover transition-transform transform-gpu hover:scale-105 cursor-pointer'
                    onClick={() => handleMemberButtonClick('c')}>
                        <div className='card-bg w-full h-full rounded bg-cover flex flex-col justify-end shadow'
                        style={{
                            backgroundImage: `url(${'/images/exec-headshots/jren.jpeg'})`,
                        }}>
                            <div className='card-text w-full h-16 flex flex-col justify-center bg-slate-800 bg-opacity-50 rounded-b text-white text-center '>
                                <h1 className='inline-block text-lg'>JEFF REN</h1>
                                <h2 className='inline-block text-md'>VP INTERNAL</h2>
                            </div>
                        </div>
                    </div>

                    <div className='card w-60 h-80 border-0 bg-cover transition-transform transform-gpu hover:scale-105 cursor-pointer'
                    onClick={() => handleMemberButtonClick('d')}>
                        <div className='card-bg w-full h-full rounded bg-cover flex flex-col justify-end shadow'
                        style={{
                            backgroundImage: `url(${'/images/exec-headshots/jchen.jpeg'})`,
                        }}>
                            <div className='card-text w-full h-16 flex flex-col justify-center bg-slate-800 bg-opacity-50 rounded-b text-white text-center '>
                                <h1 className='inline-block text-lg'>JOEY CHEN</h1>
                                <h2 className='inline-block text-md'>VP EXTERNAL</h2>
                            </div>
                        </div>
                    </div>

                    <div className='card w-60 h-80 border-0 bg-cover transition-transform transform-gpu hover:scale-105 cursor-pointer'
                    onClick={() => handleMemberButtonClick('e')}>
                        <div className='card-bg w-full h-full rounded bg-cover flex flex-col justify-end shadow'
                        style={{
                            backgroundImage: `url(${'/images/exec-headshots/cbatulzii.jpeg'})`,
                        }}>
                            <div className='card-text w-full h-16 flex flex-col justify-center bg-slate-800 bg-opacity-50 rounded-b text-white text-center '>
                                <h1 className='inline-block text-lg'>CINDY BATULZII</h1>
                                <h2 className='inline-block text-md'>VP MARKETING</h2>
                            </div>
                        </div>
                    </div>

                    <div className='card w-60 h-80 border-0 bg-cover transition-transform transform-gpu hover:scale-105 cursor-pointer'
                    onClick={() => handleMemberButtonClick('f')}>
                        <div className='card-bg w-full h-full rounded bg-cover flex flex-col justify-end shadow'
                        style={{
                            backgroundImage: `url(${'/images/exec-headshots/axia.jpeg'})`,
                        }}>
                            <div className='card-text w-full h-16 flex flex-col justify-center bg-slate-800 bg-opacity-50 rounded-b text-white text-center '>
                                <h1 className='inline-block text-lg'>ANNIE XIA</h1>
                                <h2 className='inline-block text-md'>VP FINANCE</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className='exec-content-mobile md:hidden w-full'>
                <div className='exec-content-middle mt-6 w-full flex flex-row justify-evenly'>
                    <div className='card w-40 h-60 md:w-60 md:h-80 border-0 bg-cover transition-transform transform-gpu hover:scale-105 cursor-pointer'
                    onClick={() => handleMemberButtonClick('b')}>
                        <div className='card-bg w-full h-full rounded bg-cover flex flex-col justify-end shadow'
                        style={{
                            backgroundImage: `url(${'/images/exec-headshots/jren.jpeg'})`,
                        }}>
                            <div className='card-text w-full h-16 flex flex-col justify-center bg-slate-800 bg-opacity-50 rounded-b text-white text-center '>
                                <h1 className='inline-block text-lg'>JEFF REN</h1>
                                <h2 className='inline-block text-md'>VP INTERNAL</h2>
                            </div>
                        </div>
                    </div>

                    <div className='card w-40 h-60 md:w-60 md:h-80 border-0 bg-cover transition-transform transform-gpu hover:scale-105 cursor-pointer'
                    onClick={() => handleMemberButtonClick('b')}>
                        <div className='card-bg w-full h-full rounded bg-cover flex flex-col justify-end shadow'
                        style={{
                            backgroundImage: `url(${'/images/exec-headshots/jchen.jpeg'})`,
                        }}>
                            <div className='card-text w-full h-16 flex flex-col justify-center bg-slate-800 bg-opacity-50 rounded-b text-white text-center '>
                                <h1 className='inline-block text-lg'>JOEY CHEN</h1>
                                <h2 className='inline-block text-md'>VP EXTERNAL</h2>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='exec-content-bottom my-6 w-full flex flex-row justify-evenly'>
                    <div className='card w-40 h-60 md:w-60 md:h-80 border-0 bg-cover transition-transform transform-gpu hover:scale-105 cursor-pointer'
                    onClick={() => handleMemberButtonClick('b')}>
                        <div className='card-bg w-full h-full rounded bg-cover flex flex-col justify-end shadow'
                        style={{
                            backgroundImage: `url(${'/images/exec-headshots/cbatulzii.jpeg'})`,
                        }}>
                            <div className='card-text w-full h-16 flex flex-col justify-center bg-slate-800 bg-opacity-50 rounded-b text-white text-center '>
                                <h1 className='inline-block text-lg'>CINDY BATULZII</h1>
                                <h2 className='inline-block text-md'>VP MARKETING</h2>
                            </div>
                        </div>
                    </div>

                    <div className='card w-40 h-60 md:w-60 md:h-80 border-0 bg-cover transition-transform transform-gpu hover:scale-105 cursor-pointer'
                    onClick={() => handleMemberButtonClick('b')}>
                        <div className='card-bg w-full h-full rounded bg-cover flex flex-col justify-end shadow'
                        style={{
                            backgroundImage: `url(${'/images/exec-headshots/axia.jpeg'})`,
                        }}>
                            <div className='card-text w-full h-16 flex flex-col justify-center bg-slate-800 bg-opacity-50 rounded-b text-white text-center '>
                                <h1 className='inline-block text-lg'>ANNIE XIA</h1>
                                <h2 className='inline-block text-md'>VP FINANCE</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            

            <div ref={dropdownContentRef} 
                className={`exec-dropdown-content w-full bg-slate-400 }`}>
                {selectedMember && (
                <div className='mb-4 px-4 py-12 mx-auto'>
                    <div className='dropdown-text-container mx-4 md:mx-16'>
                        <h1 className='text-slate-900 text-3xl font-bold mb-4'>{memberNames[selectedMember]}</h1>
                        <p className='text-slate-800 md:text-lg'   dangerouslySetInnerHTML={{ __html: memberInfo[selectedMember] }}></p>
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