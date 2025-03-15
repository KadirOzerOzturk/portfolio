import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { CiMenuBurger } from 'react-icons/ci';
import { IoMdClose } from 'react-icons/io';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className='w-3/4 h-24 flex   font-semibold  justify-between items-center px-6 lg:px-32 z-30'>
            <div className='flex items-center gap-6'>
                <p className=' font-bold font-oswald hover:text-custom-lightPurple cursor-pointer duration-200 text-xl '>Kadir Özer Öztürk</p>
            </div>

            <div className='hidden lg:flex items-center gap-7'>
                <ul className='flex items-center gap-7'>
                    <li className='hover:text-custom-lightPurple cursor-pointer duration-200 '>
                        <Link to="home" smooth={true} duration={500}>Home</Link>
                    </li>
                    <li className='hover:text-custom-lightPurple cursor-pointer duration-200 '>
                        <Link to="about" smooth={true} duration={500}>About</Link>
                    </li>
                    <li className='hover:text-custom-lightPurple cursor-pointer duration-200 '>
                        <Link to="contact" smooth={true} duration={500}>Contact</Link>
                    </li>
                </ul>
            </div>

            <div className='lg:hidden'>
                <button onClick={toggleMenu} className='text-black focus:outline-none'>
                    {isOpen ? <IoMdClose  className='h-8 w-8' /> : <CiMenuBurger  className='h-8 w-8' />}
                </button>
            </div>

            {isOpen && (
                <div className='lg:hidden absolute top-24 left-0 w-full bg-slate-300 flex flex-col items-center gap-4 p-4'>
                    <ul className='flex flex-col items-center gap-4'>
                        <li className='hover:text-custom-lightPurple cursor-pointer duration-200'>
                            <Link to="home" smooth={true} duration={500} onClick={toggleMenu}>Home</Link>
                        </li>
                        <li className='hover:text-custom-lightPurple cursor-pointer duration-200'>
                            <Link to="about" smooth={true} duration={500} onClick={toggleMenu}>About</Link>
                        </li>
                        <li className='hover:text-custom-lightPurple cursor-pointer duration-200'>
                            <Link to="contact" smooth={true} duration={500} onClick={toggleMenu}>Contact</Link>
                        </li>
                        <li className='px-3 py-1 rounded-lg bg-custom-lightPurple text-slate-200 cursor-pointer duration-200'>Resume</li>
                    </ul>
                </div>
            )}
        </div>
    );
}

export default Navbar;
