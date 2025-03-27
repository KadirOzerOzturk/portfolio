import React from 'react';


function About() {
    return (
        <div className="flex flex-col md:grid md:grid-cols-2 min-h-screen bg-custom-black text-center px-6 md:px-12 py-8 gap-10">
            {/* Left Side: Skills */}
            <div className="flex justify-center md:justify-end">
                <div className="flex flex-col gap-6 w-full md:w-3/4 ">
                    {[
                        { title: "Frontend", description: "I can create responsive and user-friendly interfaces using HTML, CSS, and JavaScript. I can also use popular JavaScript frameworks like React." },
                        { title: "Backend", description: "I work with Spring Boot in backend development. I have experience in creating RESTful APIs and working with databases. I developed several projects with Golang for Linux systems." },
                        { title: "DevOps", description: "I have experience in using Docker and Jenkins for CI/CD. I can deploy applications to cloud platforms like AWS and Heroku." }
                    ].map((item, index) => (
                        <div key={index} className="p-6 rounded-xl shadow-lg border border-custom-purple bg-gray-800 hover:scale-105 transition-transform duration-300">
                            <h1 className="font-bold text-lg">{item.title}</h1>
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
                    As a 4th-year Computer Engineering student at Gazi University, I am a solution-oriented software developer 
                    with a passion for web technologies. I am experienced in technologies such as Spring Boot, Golang, and React. 
                    I aim to produce scalable and efficient solutions while focusing on continuous learning and self-improvement.
                </p>
            </div>
        </div>
    );
}

export default About;
