import React from 'react';
import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { Element } from 'react-scroll';
import Socials from './components/Socials';
import Projects from './components/Projects';

function App() {
    return (
        <div className="bg-custom-gray  font-kanit text-white min-h-screen flex flex-col">
            <div className='items-center justify-center flex flex-col'>

            <Navbar />
           
            </div>
            <Socials />
            <div className=' h-full flex flex-col items-center justify-center'> 
            <Element name="home">
                <Home  />
            </Element>
            <Element name="about">
                <About />
            </Element>
            <Element name="projects">
                <Projects />
            </Element>
            </div>
            
            {/* Add more sections here if needed */}
        </div>
    );
}

export default App;
