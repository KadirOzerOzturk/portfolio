import React from 'react';
import { Helmet } from 'react-helmet';

function Home() {
    const downloadResume = (lang) => {
        const resumePath = lang === "tr"
            ? "/assets/KadirOzerOzturk-CV.pdf"
            : "/assets/KadirOzerOzturk-CV-ENG.pdf";

        const link = document.createElement("a");
        link.href = resumePath;
        link.setAttribute("download", resumePath.split("/").pop());
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <>
            <Helmet>
                <meta name="description" content="Learn more about Kadir Özer Öztürk, a software engineer passionate about problem-solving and technology." />
                <meta name="keywords" content="software engineer, Kadir Özer Öztürk, resume, tech, problem-solving" />
                <meta property="og:title" content="About Me - Kadir Özer Öztürk" />
                <meta property="og:description" content="Explore the profile of Kadir Özer Öztürk, a software engineer with expertise in Java, React, and Go." />
            </Helmet>
            <div className="h-fit my-20 flex flex-col md:flex-row px-12 py-8 items-center">
                <div className="flex flex-col flex-1 justify-start">
                    <p className="bg-custom-purple text-white w-fit px-4 py-1 rounded-lg text-md font-semibold">
                        Software Engineer
                    </p>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl mt-4 font-bold text-center md:text-left">
                        Making The Impossible Possible.<br />Using 1's and 0's.
                    </h1>
                    <p className="mt-4 text-lg text-gray-400 text-center md:text-left">
                        Problem solving is what makes me unique.
                    </p>
                    <div className="mt-6 flex gap-4 justify-center md:justify-start">
                        <button onClick={() => downloadResume("eng")} className="border border-custom-purple px-6 py-2 rounded-full text-custom-purple hover:bg-custom-purple hover:text-white  hover:scale-105  transition-transform duration-700 ">
                            View Resume (ENG)
                        </button>
                        <button onClick={() => downloadResume("tr")} className="border border-custom-purple px-6 py-2 rounded-full text-custom-purple hover:bg-custom-purple hover:text-white  hover:scale-105 transition-transform duration-700">
                            View Resume (TR)
                        </button>
                    </div>
                </div>

                <div className="flex flex-wrap justify-center md:justify-start gap-6 mt-8 md:pl-12 pl-0 md:mt-0">
                    {[
                        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg", size: "w-16 h-16 md:w-20 md:h-20" },
                        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", size: "w-16 h-16 md:w-20 md:h-20" },
                        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg", size: "w-16 h-16 md:w-20 md:h-20" }
                    ].map((icon, index) => (
                        <div key={index} className="bg-gray-700  p-4 md:p-6 rounded-full hover:scale-110 transition shadow-2xl shadow-black">
                            <img src={icon.src} alt="Tech Logo" className={icon.size} />
                        </div>
                    ))}
                </div>
            </div>
        </>

    );
}

export default Home;
