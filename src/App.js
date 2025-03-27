import React from 'react';
import { Helmet } from 'react-helmet';
import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { Element } from 'react-scroll';
import Socials from './components/Socials';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
    return (
        <>
            <Helmet>
                <title>Kadir Özer Öztürk - Developer Portfolio</title>
                <meta name="description" content="Welcome to Kadir Özer Öztürk's portfolio website. Explore my work in frontend, backend, DevOps, and more." />
                <meta name="keywords" content="Kadir Özer Öztürk, developer portfolio, React, Spring Boot, Golang, DevOps, Docker, AWS, web development" />
                <meta name="author" content="Kadir Özer Öztürk" />
                <meta property="og:title" content="Kadir Özer Öztürk - Developer Portfolio" />
                <meta property="og:description" content="Explore the portfolio of Kadir Özer Öztürk, a developer with experience in web technologies, backend development, and DevOps." />
                <meta property="og:image" content="URL-to-an-image-for-preview.jpg" />
                <meta property="og:url" content="https://www.yoursite.com" />
            </Helmet>

            <div className="bg-custom-gray font-kanit text-white min-h-screen flex flex-col">
                <Navbar />
                <Socials />
                <div className="h-full flex flex-col items-center justify-center">
                    <Element name="home">
                        <Home />
                    </Element>
                    <Element name="about">
                        <About />
                    </Element>
                    <Element name="projects">
                        <Projects />
                    </Element>
                    <Element name="contact">
                        <Contact />
                    </Element>
                </div>
            </div>
        </>
    );
}

export default App;
