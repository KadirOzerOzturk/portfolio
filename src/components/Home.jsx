import React from 'react';

function Home() {
    const downloadResume = (lang) => {
        const resumePath = lang === "tr"
            ? "/assets/KadirOzerOzturk-CV.pdf"
            : "/assets/KadirOzerOzturk-CV-ENG.pdf";
    
        const link = document.createElement("a");
        link.href = resumePath;
        link.setAttribute("download", resumePath.split("/").pop()); // Dosya adını alır
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
    
    

    return (
        <div className='h-fit my-20 flex px-12 py-8'>
            
            <div className='flex flex-col flex-1 justify-start'>
                <p className='bg-custom-purple text-white w-fit px-4 py-1 rounded-lg text-md font-semibold'>
                    Software Engineer
                </p>
                <h1 className='text-4xl md:text-5xl lg:text-6xl mt-4 font-bold'>
                    Making The Impossible Possible.<br />Using 1's and 0's.
                </h1>
                <p className='mt-4 text-lg text-gray-400'>
                    Problem solving is what makes me unique.
                </p>
                <div className='mt-6 flex gap-4'>
                    <button onClick={() => downloadResume("eng")} className='border border-custom-purple px-6 py-2 rounded-full text-custom-purple hover:bg-custom-purple hover:text-white transition'>
                        View Resume (ENG)
                    </button>
                    <button onClick={() => downloadResume("tr")} className='border border-custom-purple px-6 py-2 rounded-full text-custom-purple hover:bg-custom-purple hover:text-white transition'>
                        View Resume (TR)
                    </button>
                </div>
            </div>

            <div className='flex flex-1 justify-center items-center relative'>
                <div className='bg-gray-700 p-6 rounded-full hover:scale-110 transition absolute hover:text-xl peer-hover:scale-110 peer-transition shadow-2xl shadow-black'
                    style={{ top: '30px', right: '50px' }}>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" alt="Java" className='w-40 h-40 ' />
                </div>
                <div className='bg-gray-700 p-6 rounded-full hover:scale-110 transition absolute hover:text-xl peer-hover:scale-110 peer-transition shadow-2xl shadow-black' 
                    style={{ top: '150px', right: '-20px' }}>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React.js" className='w-20 h-20' />
                </div>
                <div className='bg-gray-700 p-6 rounded-full hover:scale-110 transition absolute hover:text-xl peer-hover:scale-110 peer-transition shadow-2xl shadow-black' 
                    style={{ top: '250px', right: '80px' }}>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg" alt="Go" className='w-20 h-20' />
                </div>
            </div>
        </div>
    );
}

export default Home;
