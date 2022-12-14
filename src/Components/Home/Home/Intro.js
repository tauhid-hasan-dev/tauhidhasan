import logo from '../../../../src/logo.svg';
import React from 'react';
import { FaCss3, FaHtml5, FaJsSquare, FaNodeJs, FaReact } from "react-icons/fa";
import { SiBootstrap, SiExpress, SiFirebase, SiGit, SiGithub, SiLinkedin, SiMongodb, SiTailwindcss } from "react-icons/si";

const Intro = () => {

    return (
        <div className='mt-8 lg:mt-16 bg-background px-8 lg:px-56 pt-24 lg:pt-28 pb-0 lg:pb-10 flex flex-col gap-12'>

            <div className=' flex flex-col lg:flex-row justify-between gap-1 lg:gap-5 ' >
                <div className='flex flex-col gap-1 lg:gap-5'>
                    <div className='flex flex-col lg:flex-row lg:items-end items-start gap-2'>
                        <p className='text-text'></p> <p className='text-3xl lg:text-5xl font-semibold text-slate-500'>Tauhid Hasan</p>
                    </div>
                    <div className='flex flex-col lg:flex-row lg:items-end items-start gap-2  '>
                        <p className='text-text'> </p> <p className='text-4xl lg:text-6xl font-semibold text-slate-300'>Frontend Developer </p>
                    </div>
                </div>
                <div className="App hidden lg:block">
                    <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo" />
                    </header>
                </div>

            </div>

            <div className='lg:w-[60%] w-[100%]'>
                <p className=' text-slate-400 text-lg  '>I'm passionate about bringing the technical and visual aspects of digital products to life and care deeply about the user interface and user experience, beautiful pixels, and writing clean accessible code that's readable by humans. </p>
            </div>




            <div className='p-5 rounded-lg  lg:mt-16  bg-skills shadow-xl flex justify-center '>
                <div className='w-[100%] lg:w-[85%] grid grid-cols-4 lg:grid-cols-12 gap-2 lg:gap-3 '>
                    <FaJsSquare className='text-4xl lg:text-5xl text-orange-300 hover:scale-105 transform transition duration-300'></FaJsSquare>
                    <FaReact className='text-4xl lg:text-5xl text-blue-300 hover:scale-105 transform transition duration-300'></FaReact>
                    <FaHtml5 className='text-4xl lg:text-5xl text-orange-500 hover:scale-105 transform transition duration-300'></FaHtml5>
                    <FaCss3 className='text-4xl lg:text-5xl text-blue-400 hover:scale-105 transform transition duration-300'></FaCss3>
                    <FaNodeJs className='text-4xl lg:text-5xl text-green-400 hover:scale-105 transform transition duration-300'></FaNodeJs>
                    <SiTailwindcss className='text-4xl lg:text-5xl text-blue-300 hover:scale-105 transform transition duration-300'></SiTailwindcss>
                    <SiBootstrap className='text-4xl lg:text-5xl text-blue-600 hover:scale-105 transform transition duration-300'></SiBootstrap>
                    <SiExpress className='text-4xl lg:text-5xl text-gray-500 hover:scale-105 transform transition duration-300'></SiExpress>
                    <SiMongodb className='text-4xl lg:text-5xl text-green-600 hover:scale-105 transform transition duration-300'></SiMongodb>
                    <SiFirebase className='text-4xl lg:text-5xl text-orange-600 hover:scale-105 transform transition duration-300'></SiFirebase>
                    <SiGit className='text-4xl lg:text-5xl text-orange-800 hover:scale-105 transform transition duration-300'></SiGit>
                    <SiGithub className='text-4xl lg:text-5xl text-gray-600 hover:scale-105 transform transition duration-300'></SiGithub>
                </div>
            </div>
        </div>
    );
};

export default Intro;