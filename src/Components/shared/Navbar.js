import React from 'react';
import { FaFileDownload } from 'react-icons/fa';
import { SiGithub, SiLinkedin } from 'react-icons/si';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-scroll'


const Navbar = () => {
    const menuItem = <>
        <li className='text-sm hover:text-text'>
            <Link to="about" spy={true} smooth={true} offset={-100} duration={800} >About </Link>

        </li>
        <li className='text-sm hover:text-text'>
            <Link to="projects" spy={true} smooth={true} offset={-100} duration={800} >Projects </Link>

        </li>
        <li className='text-sm hover:text-text'>
            <NavLink to='/blog'>Blog</NavLink>
        </li>

        <li className='text-sm hover:text-text'>
            <Link to="contact" spy={true} smooth={true} offset={-50} duration={800} >Contact </Link>
        </li>
        <li className='text-sm'>
            <a href='https://drive.google.com/file/d/1ix8ayp0IoC7mFdCLm0ZmK4v3okuf3HhK/view' className='pl-2 lg:pl-4 ' target="_blank" ><button className="  px-2  py-1  rounded bg-gradient-to-r from-blue-600 to-sky-600 hover:from-blue-700 hover:to-sky-700 " target="_blank">Resume</button></a>
        </li>
    </>
    return (
        <div className={`navbar z-[999] fixed top-0 bg-background shadow-md px-5 lg:px-20 py-5  `}>
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden text-white text-6xl">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3  shadow  rounded-box w-52 flex flex-col gap-5 bg-background  text-white p-5">
                        {menuItem}
                    </ul>
                </div>
                <NavLink to="/" >
                    <div className='flex  items-center justify-center normal-case text-xl   lg:text-4xl text-white font-semibold'>
                        <p className='block ml-0 lg:ml-2 font-bold text-text text-3xl lg:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-text to-blue-500 '>tasan.</p>
                    </div>
                </NavLink>
            </div>
            <div className="navbar-middle flex gap-3 ml-24 lg:mr-32">
                <a href="https://github.com/tauhid-hasan-dev" target='blank'><SiGithub className='text-lg lg:text-[16px] text-slate-400 hover:text-text' ></SiGithub></a>
                <a href="https://www.linkedin.com/in/tauhid-hasan/" target='blank'><SiLinkedin className='text-lg lg:text-[16px] text-slate-400 hover:text-text' ></SiLinkedin></a>
                <a href="https://drive.google.com/file/d/1ix8ayp0IoC7mFdCLm0ZmK4v3okuf3HhK/view" target='blank'><FaFileDownload className='block lg:hidden text-lg lg:text-[16px] text-slate-400 hover:text-text' ></FaFileDownload></a>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="flex gap-10  p-0 text-slate-100 justify-center items-center cursor-pointer text-lg ">
                    {menuItem}
                </ul>
            </div>

        </div >
    );
};

export default Navbar;