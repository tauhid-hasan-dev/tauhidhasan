import React from 'react';
import { FaHome } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Blog = () => {
    return (
        <div className='py-20 h-screen bg-background px-24'>
            <Link to='/'><div className='text-2xl text-slate-300 lg:text-4xl hover:text-text flex justify-center lg:justify-start mb-5'>
                <FaHome className=''></FaHome>
            </div></Link>
            <div className='text-3xl lg:text-4xl text-slate-200 font-bold flex justify-center'>
                <p>Blog</p>
            </div>
            <div className='flex justify-center mt-24 '>
                <p className='text-2xl lg:text-4xl text-slate-300' >Comming Soon...</p>
            </div>
        </div>

    );
};

export default Blog;