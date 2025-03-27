import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { IoMdClose } from "react-icons/io";
import { CiMenuBurger } from "react-icons/ci";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="w-full h-24 flex justify-between items-center px-6 lg:px-32 z-30 bg-custom-gray">
            <p className="font-bold font-oswald hover:text-custom-lightPurple cursor-pointer duration-200 text-xl">
                Kadir Özer Öztürk
            </p>

            <div className="hidden lg:flex items-center gap-7">
                <ul className="flex items-center gap-7">
                    {["home", "about", "projects", "contact"].map((section) => (
                        <li key={section} className="hover:text-custom-lightPurple cursor-pointer duration-200">
                            <Link to={section} smooth={true} duration={500}>{section.charAt(0).toUpperCase() + section.slice(1)}</Link>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Mobile menu toggle */}
            <div className="lg:hidden">
                <button onClick={toggleMenu} className="text-white focus:outline-none">
                    {isOpen ? <IoMdClose className="h-8 w-8" /> : <CiMenuBurger className="h-8 w-8" />}
                </button>
            </div>

            {/* Dropdown Menu */}
            {isOpen && (
                <div className="lg:hidden absolute top-24 left-0 w-full bg-custom-black flex flex-col items-center gap-4 p-4 transition-all duration-300 ease-in-out rounded-b-md">
                    <ul className="flex flex-col items-center gap-4">
                        {["home", "about", "projects", "contact"].map((section) => (
                            <li key={section} className="hover:text-custom-lightPurple cursor-pointer duration-200">
                                <Link to={section} smooth={true} duration={500} onClick={toggleMenu}>
                                    {section.charAt(0).toUpperCase() + section.slice(1)}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}

export default Navbar;
