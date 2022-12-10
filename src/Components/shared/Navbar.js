import React from 'react';
import { SiGithub } from 'react-icons/si';
import { Link, NavLink } from 'react-router-dom';


const Navbar = () => {
    const menuItem = <>
        <li className='text-sm'>
            <a href="#intro" >About</a>
        </li>
        {/* <li >
            <a href="#experience">Experiences</a>
        </li> */}
        <li className='text-sm'>
            <a href="#projects">Projects</a>
        </li>
        <li className='text-sm'>
            <a href="#contact">Contact</a>
        </li>
        <li className='text-sm'>
            <a href='https://drive.google.com/file/d/1ix8ayp0IoC7mFdCLm0ZmK4v3okuf3HhK/view' className='pl-2 lg:pl-4 ' target="_blank" ><button className="hover:bg-slate-600 border border-text px-2  py-1  rounded " target="_blank">Resume</button></a>
        </li>

    </>
    return (
        <div className={`navbar fixed top-0 bg-background shadow-md px-5 lg:px-20 py-5 `}>
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden text-white text-6xl">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3  shadow  rounded-box w-52 flex flex-col gap-5 bg-slate-800 text-white p-5">
                        {menuItem}
                    </ul>
                </div>
                <Link to="/" className="normal-case text-xl   lg:text-4xl text-white font-semibold ">
                    <div className='flex  items-center justify-center'>
                        <span className='block ml-2 font-semibold text-text text-3xl lg:text-4xl'>tasan</span>
                    </div>
                </Link>
            </div>



            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal p-0 text-slate-100 gap-2 text-lg ">
                    {menuItem}
                </ul>
            </div>
        </div >
    );
};

export default Navbar;