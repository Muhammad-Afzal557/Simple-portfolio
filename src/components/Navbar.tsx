
import { AiOutlineMenu } from "react-icons/ai";

import React from 'react'
import Link from "next/link";

const Navbar = () => {
  return (
    <div className=' container '>
        <div className=' flex justify-between items-center pt-8'>
          <div className=' text-xl font-medium'>Muhammad Afzal Soomro</div>
          <ul className=' gap-14 lg:gap-16 hidden md:flex'>
        <Link href={"/"}> <li className="menulink">Home</li> </Link>
        <Link href={"about"}> <li className="menulink">About</li> </Link>
        <Link href={"projects"}> <li className="menulink">Projects</li> </Link>
        <Link href={"skills"}> <li className="menulink">Skills</li> </Link>
        <Link href={"contact"}> <li className="menulink">Contact</li> </Link>
          </ul>
          <AiOutlineMenu  className="md:hidden " size={30}/>

        </div>
      
    </div>
  )
}

export default Navbar



// <li className=''><a href="#hero"></a>Home</li>
// <li className='menulink'><a href="#about"></a>About</li>
// <li className='menulink'><a href="/projects"></a>Projects</li>
// <li className='menulink'><a href="#skills"></a>Skills</li>
// <li className='menulink'><a href="#contact"></a>Contact</li>
