import React from 'react';
import { FaGithub, FaLinkedin, FaMedium } from 'react-icons/fa';
import { useAppContext } from '../context/AppContext';

function Socials() {
    const { isDark } = useAppContext();

    return (
        <div className='fixed left-0 top-1/3 z-30'>
            <ul className={`${isDark 
                ? 'bg-black/30 border border-white/20' 
                : 'bg-white/30 border border-gray-300'
            } backdrop-blur-lg rounded-r-lg`}>
                <li className={`${isDark 
                    ? 'hover:bg-purple-500/20 text-white' 
                    : 'hover:bg-purple-100 text-gray-800'
                } cursor-pointer duration-200 p-2 m-1 rounded-xl transition-all`}>
                    <a href="https://www.linkedin.com/in/kadirozerozturk/" target='_blank' rel='noopener noreferrer'>
                        <FaLinkedin className='h-8 w-8 m-1 hover:scale-110 transition-transform' />
                    </a>
                </li>
                <li className={`${isDark 
                    ? 'hover:bg-purple-500/20 text-white' 
                    : 'hover:bg-purple-100 text-gray-800'
                } cursor-pointer duration-200 p-2 m-1 rounded-xl transition-all`}>
                    <a href="https://github.com/KadirOzerOzturk" target='_blank' rel='noopener noreferrer'>
                        <FaGithub className='h-8 w-8 m-1 hover:scale-110 transition-transform'/>
                    </a>
                </li>
                <li className={`${isDark 
                    ? 'hover:bg-purple-500/20 text-white' 
                    : 'hover:bg-purple-100 text-gray-800'
                } cursor-pointer duration-200 p-2 m-1 rounded-xl transition-all`}>
                    <a href="https://medium.com/@ozturkkadirozer" target='_blank' rel='noopener noreferrer'>
                        <FaMedium className='h-8 w-8 m-1 hover:scale-110 transition-transform'/>
                    </a>
                </li>
            </ul>
        </div>
    );
}

export default Socials;