import React from 'react';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import { useAppContext } from './context/AppContext';
import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { Element } from 'react-scroll';
import Socials from './components/Socials';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
    const { t } = useTranslation();
    const { isDark } = useAppContext();

    return (
        <>
            <Helmet>
                <title>{t('home.role')} - Kadir Özer Öztürk</title>
                <meta name="description" content={t('about.subtitle')} />
                <meta name="keywords" content="Kadir Özer Öztürk, software engineer, React, Spring Boot, Golang, DevOps, Docker, AWS, web development" />
                <meta name="author" content="Kadir Özer Öztürk" />
                <meta property="og:title" content="Kadir Özer Öztürk - Developer Portfolio" />
                <meta property="og:description" content={t('about.description')} />
                <meta property="og:image" content="URL-to-an-image-for-preview.jpg" />
                <meta property="og:url" content="https://www.yoursite.com" />
            </Helmet>

            <div className={`${isDark 
                ? 'bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900' 
                : 'bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50'
            } min-h-screen text-gray-900 dark:text-white transition-colors duration-300`}>
                
                {/* Fixed Navigation */}
                <div className="fixed top-0 left-0 right-0 z-50 bg-black/20 dark:bg-black/20 backdrop-blur-lg border-b border-white/10">
                    <Navbar />
                </div>

                {/* Floating Social Icons */}
                <div className="fixed left-6 top-1/2 transform -translate-y-1/2 z-40">
                    <Socials />
                </div>

                {/* Main Content */}
                <main className="pt-20">
                    {/* Hero Section */}
                    <Element name="home">
                        <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
                            <div className={`absolute inset-0 ${isDark 
                                ? 'bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-teal-600/20' 
                                : 'bg-gradient-to-r from-blue-200/30 via-purple-200/30 to-teal-200/30'
                            } animate-pulse`}></div>
                            <Home />
                        </section>
                    </Element>

                    {/* About Section */}
                    <Element name="about">
                        <section className={`min-h-screen py-20 ${isDark 
                            ? 'bg-gradient-to-b from-transparent to-slate-800/50' 
                            : 'bg-gradient-to-b from-transparent to-blue-100/50'
                        }`}>
                            <About />
                        </section>
                    </Element>

                    {/* Projects Section */}
                    <Element name="projects">
                        <section className={`min-h-screen py-20 ${isDark 
                            ? 'bg-gradient-to-b from-slate-800/50 to-transparent' 
                            : 'bg-gradient-to-b from-blue-100/50 to-transparent'
                        }`}>
                            <Projects />
                        </section>
                    </Element>

                    {/* Contact Section */}
                    <Element name="contact">
                        <section className={`min-h-screen flex items-center justify-center ${isDark 
                            ? 'bg-gradient-to-t from-slate-900 to-transparent' 
                            : 'bg-gradient-to-t from-blue-50 to-transparent'
                        }`}>
                            <Contact />
                        </section>
                    </Element>
                </main>

                {/* Animated Background Elements */}
                <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
                    <div className={`absolute top-1/4 left-1/4 w-64 h-64 ${isDark 
                        ? 'bg-blue-500/10' 
                        : 'bg-blue-300/20'
                    } rounded-full blur-3xl animate-bounce`}></div>
                    <div className={`absolute top-3/4 right-1/4 w-96 h-96 ${isDark 
                        ? 'bg-purple-500/10' 
                        : 'bg-purple-300/20'
                    } rounded-full blur-3xl animate-pulse`}></div>
                    <div className={`absolute bottom-1/4 left-1/3 w-80 h-80 ${isDark 
                        ? 'bg-teal-500/10' 
                        : 'bg-teal-300/20'
                    } rounded-full blur-3xl animate-bounce delay-1000`}></div>
                </div>
            </div>
        </>
    );
}

export default App;
