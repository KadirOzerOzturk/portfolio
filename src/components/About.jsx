import React from 'react';
import { Helmet } from 'react-helmet';

function About() {
    return (
        <>
            {/* SEO Metadata */}
            <Helmet>
                <meta name="description" content="Learn about Kadir Özer Öztürk, a solution-oriented software developer with experience in Spring Boot, Golang, and React." />
                <meta name="keywords" content="Kadir Özer Öztürk, software developer, web technologies, React, Spring Boot, Golang, DevOps, Docker, AWS" />
                <meta name="author" content="Kadir Özer Öztürk" />
                <meta property="og:title" content="About Me - Kadir Özer Öztürk" />
                <meta property="og:description" content="Learn about Kadir Özer Öztürk, a solution-oriented software developer with experience in Spring Boot, Golang, and React." />
            </Helmet>

            <div className="flex flex-col md:grid md:grid-cols-2 min-h-screen bg-custom-black text-center px-6 md:px-12 py-8 gap-10">
                {/* Left Side: Skills */}
                <div className="flex justify-center md:justify-end">
                    <div className="flex flex-col gap-6 w-full md:w-3/4">
                        {[
                            { title: "Frontend", description: "I can create responsive and user-friendly interfaces using HTML, CSS, and JavaScript. I can also use popular JavaScript frameworks like React." },
                            { title: "Backend", description: "I work with Spring Boot in backend development. I have experience in creating RESTful APIs and working with databases. I developed several projects with Golang for Linux systems." },
                            { title: "DevOps", description: "I have experience in using Docker for CI/CD. I can deploy applications to cloud platforms like AWS." }
                        ].map((item, index) => (
                            <div key={index} className="p-6 rounded-xl shadow-lg border border-custom-purple bg-gray-800 hover:scale-105 transition-transform duration-300">
                                <h2 className="font-bold text-lg">{item.title}</h2>
                                <p className="text-gray-400 mt-2">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Side: About Me */}
                <div className="flex flex-col text-center md:text-left mt-6 md:mt-16 px-4 md:px-12">
                    <p className="text-gray-400 text-sm md:text-base">Introduce</p>
                    <h1 className="font-semibold text-2xl md:text-3xl text-white">Hi ✌ I'm Kadir Özer Öztürk.</h1>
                    <p className="pt-6 md:pt-8 text-gray-400 text-sm md:text-base leading-relaxed">
                        I am a solution-oriented software developer with a strong passion for web technologies. With experience in technologies such as Spring Boot, Golang, and React, I focus on building scalable and efficient solutions. I am always committed to continuous learning and self-improvement to stay ahead in the rapidly evolving tech landscape.
                    </p>
                </div>

                {/* Using Technologies Section */}
                <div className="flex flex-col col-span-2 items-center justify-center bg-custom-black text-center py-8 px-4">
                    <h2 className="text-3xl font-semibold text-custom-purple mb-4">Technologies I Use</h2>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-4 '>

                        <div>
                            <h3 className="text-2xl text-white mb-4">Frontend</h3>
                            <div className="flex flex-wrap justify-center gap-10 mb-8">
                                <div className="flex flex-col items-center">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" className="h-16 w-16 mb-4" />
                                    <p className="text-gray-400">React</p>
                                </div>
                                <div className="flex flex-col items-center">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" className="h-16 w-16 mb-4" />
                                    <p className="text-gray-400">JavaScript</p>
                                </div>
                                <div className="flex flex-col items-center">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" alt="Tailwind CSS" className="h-16 w-16 mb-4" />
                                    <p className="text-gray-400">Tailwind CSS</p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-2xl text-white mb-4">Backend</h3>
                            <div className="flex flex-wrap justify-center gap-10 mb-8">
                                <div className="flex flex-col items-center">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" alt="Spring Boot" className="h-16 w-16 mb-4" />
                                    <p className="text-gray-400">Spring Boot</p>
                                </div>
                                <div className="flex flex-col items-center">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original-wordmark.svg" alt="Golang" className="h-16 w-16 mb-4" />
                                    <p className="text-gray-400">Golang</p>
                                </div>
                                <div className="flex flex-col items-center">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-plain.svg" alt="PostgreSQL" className="h-16 w-16 mb-4" />
                                    <p className="text-gray-400">PostgreSQL</p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-2xl text-white mb-4">DevOps</h3>
                            <div className="flex flex-wrap justify-center gap-10 mb-8">
                                <div className="flex flex-col items-center">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-plain.svg" alt="Docker" className="h-16 w-16 mb-4" />
                                    <p className="text-gray-400">Docker</p>
                                </div>
                                <div className="flex flex-col items-center">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg" alt="AWS" className="h-16 w-16 mb-4" />
                                    <p className="text-gray-400">AWS</p>
                                </div>
                                <div className="flex flex-col items-center">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" alt="Linux" className="h-16 w-16 mb-4" />
                                    <p className="text-gray-400">Linux</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}

export default About;
