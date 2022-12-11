import React from 'react';

const About = () => {
    return (
        <div id='about' className='px-8 lg:px-72 bg-background flex lg:flex-row flex-col justify-between pt-44 pb-16 lg:pb-20  gap-16 lg:gap-5'>

            <div className='w-100% lg:w-[50%] flex flex-col gap-5'>
                <div className='text-slate-200 font-bold text-3xl '>
                    About Me
                </div>
                <div>
                    <p className=' text-slate-400'>Hello, I am Tauhid Hasan. I am a Front-End (ReactJs) Developer and actively looking for a Front-End (ReactJs) Developer role. <br></br> <br></br>I have the experiences to make websites with <span className='text-text'>HTML, CSS, Tailwind CSS, Javascript, ReactJs, ExpressJS, MongoDB</span>  . I am familiar with NodeJS, Axios, REST API, and CRUD operations. My goal is to create clean, responsive, sustainable, and user-friendly code. Furthermore, I bring high value to a team and am always eager to learn and use the latest technology to deliver creative solutions to modern problems. I am known for outstanding communication, quick learning, and adaptation skills.</p>
                </div>
            </div>
            <div className=''>
                <div className=' w-[100%] lg:w-[80%] rounded'>
                    <img className='rounded hover:scale-105 transform transition duration-700' src="https://i.ibb.co/f9ssmTh/tauhid-hasan.jpg" alt="" />
                </div>
            </div >
        </div>
    );
};

export default About;