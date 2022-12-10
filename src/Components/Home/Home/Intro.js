import React from 'react';

const Intro = () => {
    return (
        <div className='h-screen mt-20 bg-background px-28 py-28 flex flex-col gap-5' >
            <div>
                <span className='text-text'>Hello, I am </span> <span className='text-5xl font-semibold text-slate-500'>Tauhid Hasan</span>
            </div>
            <div>
                <span className='text-text'>And, I am a </span> <span className='text-6xl font-semibold text-slate-300'>Frontend Developer</span>
            </div>
            <div>
                <span className='text-text text-slate-400'>I'm passionate about bringing the technical and visual aspects of digital products to life and care deeply about the user interface and user experience, beautiful pixels, and writing clean accessible code that's readable by humans. </span>
            </div>
        </div>
    );
};

export default Intro;