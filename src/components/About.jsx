import { FaCode } from 'react-icons/fa';
import { MdMonitor } from 'react-icons/md';

function About() {
    return (
        <div className='grid grid-cols-2 h-screen bg-custom-black text-center px-12 py-8'>
           <div className='flex justify-end '>
           <div className='flex flex-col gap-6 w-3/4 '>
                <div className=' p-6 rounded-xl shadow-lg border border-purple'>
                    <div className='flex items-center justify-center gap-5'>
                    
                    <h1 className=' font-bold '>Frontend</h1>
                    </div>
                    <p className=' text-gray-400 mt-2'>
                        I can create responsive and user-friendly interfaces using HTML, CSS, and JavaScript.
                        I can also use popular JavaScript frameworks like React.
                    </p>
                </div>

                <div className=' p-6 rounded-xl shadow-lg border border-purple'>
                <div className='flex items-center justify-center gap-5'>
                    <h1 className=' font-bold '>Backend</h1>
                    </div>

                    <p className=' text-gray-400 mt-2'>
                        I work with Spring Boot in backend development. I have experience in creating RESTful APIs
                        and working with databases.
                    </p>
                </div>

                <div className=' p-6 rounded-xl shadow-lg border border-purple'>
                <div className='flex items-center justify-center gap-5'>
                    <h1 className=' font-bold '>DevOps</h1>
                    </div>

                    <p className=' text-gray-400 mt-2'>
                        I have experience in using Docker and Jenkins for CI/CD. I can deploy applications to cloud platforms like AWS and Heroku.
                    </p>
                </div>
            </div>
           </div>

            {/* Sağ taraf: About Me */}
            <div className='flex flex-col text-left mt-16 px-12'>
                <p className=' text-gray-400'>Introduce</p>
                <h1 className='font-semibold text-3xl text-white'>Hi ✌ I'm Kadir Özer Öztürk.</h1>
                <p className='pt-8   text-gray-400 text-center'>
                As a 4th year Computer Engineering student at Gazi University, I am
a solution-oriented software developer with a passion for web
technologies. I am experienced in technologies such as Spring Boot,
Golang and React. I aim to produce scalable and efficient solutions. I
focus on continuous learning and self-improvement
                </p>
            </div>
        </div>
    );
}

export default About;
