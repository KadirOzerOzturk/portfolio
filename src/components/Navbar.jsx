import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { IoMdClose } from "react-icons/io";
import { CiMenuBurger } from "react-icons/ci";
import { useTranslation } from 'react-i18next';
import { useAppContext } from '../context/AppContext';
import ThemeToggle from './ThemeToggle';
import LanguageSwitch from './LanguageSwitch';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    const [scrolled, setScrolled] = useState(false);
    const { t } = useTranslation();
    const { isDark } = useAppContext();

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    // Scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { name: 'home', label: t('nav.home'), icon: '🏠' },
        { name: 'about', label: t('nav.about'), icon: '👨‍💻' },
        { name: 'projects', label: t('nav.projects'), icon: '🚀' },
        { name: 'contact', label: t('nav.contact'), icon: '📞' }
    ];

    return (
        <>
            <nav className={`w-full h-20 flex justify-between items-center px-6 lg:px-12 z-50 transition-all duration-300 ${
                scrolled 
                    ? `${isDark ? 'bg-black/80' : 'bg-white/80'} backdrop-blur-lg border-b ${isDark ? 'border-white/10' : 'border-gray-200'} shadow-lg` 
                    : 'bg-transparent'
            }`}>
                
                {/* Logo */}
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center">
                        <span className="text-white font-bold text-lg">K</span>
                    </div>
                    <div className="hidden md:block">
                        <h1 className={`font-bold text-xl ${isDark 
                            ? 'bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent' 
                            : 'text-gray-800'
                        }`}>
                            Kadir Özer Öztürk
                        </h1>
                        <p className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                            {t('home.role')}
                        </p>
                    </div>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden lg:flex items-center gap-4">
                    <ul className="flex items-center gap-1">
                        {navItems.map((item) => (
                            <li key={item.name}>
                                <Link
                                    to={item.name}
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                    onSetActive={() => setActiveSection(item.name)}
                                    className={`px-4 py-2 rounded-xl cursor-pointer transition-all duration-300 flex items-center gap-2 ${
                                        activeSection === item.name
                                            ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-lg'
                                            : `${isDark ? 'text-gray-300 hover:text-white hover:bg-white/10' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'}`
                                    }`}
                                >
                                    <span className="text-sm">{item.icon}</span>
                                    <span className="font-medium">{item.label}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                    
                    {/* Theme and Language Controls */}
                    <div className="flex items-center gap-2 ml-4">
                        <ThemeToggle />
                        <LanguageSwitch />
                    </div>
                </div>

                {/* Mobile Controls */}
                <div className="lg:hidden flex items-center gap-2">
                    <ThemeToggle />
                    <LanguageSwitch />
                    <button 
                        onClick={toggleMenu} 
                        className={`p-3 rounded-xl transition-all duration-300 ${
                            isOpen 
                                ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white' 
                                : `${isDark ? 'text-white hover:bg-white/10' : 'text-gray-800 hover:bg-gray-100'}`
                        }`}
                    >
                        {isOpen ? <IoMdClose className="h-6 w-6" /> : <CiMenuBurger className="h-6 w-6" />}
                    </button>
                </div>
            </nav>

            {/* Mobile Dropdown Menu */}
            <div className={`lg:hidden fixed top-20 left-0 right-0 z-40 transition-all duration-300 ease-in-out ${
                isOpen 
                    ? 'opacity-100 translate-y-0 pointer-events-auto' 
                    : 'opacity-0 -translate-y-4 pointer-events-none'
            }`}>
                <div className={`${isDark ? 'bg-black/95' : 'bg-white/95'} backdrop-blur-lg border-b ${isDark ? 'border-white/10' : 'border-gray-200'} shadow-2xl`}>
                    <div className="px-6 py-6">
                        <ul className="space-y-2">
                            {navItems.map((item, index) => (
                                <li key={item.name}>
                                    <Link
                                        to={item.name}
                                        smooth={true}
                                        duration={500}
                                        onClick={toggleMenu}
                                        className={`flex items-center gap-4 p-4 rounded-xl transition-all duration-300 group ${isDark 
                                            ? 'text-gray-300 hover:text-white hover:bg-white/10' 
                                            : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                                        }`}
                                        style={{ animationDelay: `${index * 0.1}s` }}
                                    >
                                        <div className="w-10 h-10 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-lg flex items-center justify-center group-hover:from-purple-500 group-hover:to-blue-500 transition-all duration-300">
                                            <span className="text-lg">{item.icon}</span>
                                        </div>
                                        <div>
                                            <span className="font-medium text-lg">{item.label}</span>
                                            <p className={`text-xs ${isDark ? 'text-gray-500' : 'text-gray-400'} capitalize`}>
                                                {item.name} section
                                            </p>
                                        </div>
                                        <div className="ml-auto">
                                            <svg className={`w-5 h-5 transition-colors duration-300 ${isDark 
                                                ? 'text-gray-400 group-hover:text-white' 
                                                : 'text-gray-400 group-hover:text-gray-800'
                                            }`} fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"/>
                                            </svg>
                                        </div>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                        
                        {/* Mobile Footer */}
                        <div className={`mt-6 pt-6 border-t ${isDark ? 'border-white/10' : 'border-gray-200'}`}>
                            <div className="flex items-center justify-center gap-4">
                                <div className="text-center">
                                    <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                                        Made with
                                    </p>
                                    <p className="text-purple-400 font-semibold">React & ❤️</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Overlay */}
            {isOpen && (
                <div 
                    className="lg:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-30"
                    onClick={toggleMenu}
                ></div>
            )}
        </>
    );
}

export default Navbar;
