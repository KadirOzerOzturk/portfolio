import React from 'react'
import { FaGithub, FaLinkedin, FaMedium } from 'react-icons/fa';

function Socials() {
  return (
   
        <div className='fixed left-0 top-1/3 z-30'>
                <ul className='bg-custom-black rounded-r-lg'>
                    <li className='hover:bg-lightPurple text-white cursor-pointer duration-200 p-2 m-1 rounded-xl'>
                        <a href="https://www.linkedin.com/in/kadirozerozturk/" target='_blank' rel='noopener noreferrer'>
                        <FaLinkedin className='h-8 w-8 m-1' />

                        </a>
                    </li>
                    <li className='hover:bg-lightPurple text-white cursor-pointer duration-200 p-2 m-1 rounded-xl'>
                        <a href="https://github.com/KadirOzerOzturk" target='_blank' rel='noopener noreferrer'>
                        <FaGithub  className='h-8 w-8 m-1'/>

                        </a>
                    </li>
                    <li className='hover:bg-lightPurple text-white cursor-pointer duration-200 p-2 m-1 rounded-xl'>
                        <a href="https://medium.com/@ozturkkadirozer" target='_blank' rel='noopener noreferrer'>
                        <FaMedium  className='h-8 w-8 m-1'/>

                        </a>
                    </li>
                </ul>
            </div>
  
  )
}

export default Socials