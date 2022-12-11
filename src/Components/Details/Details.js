import React from 'react';
import { FaExternalLinkAlt, FaGithub, FaHome, FaServer } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';

const Details = () => {
    const project = useLoaderData()
    const { imgOne, imgTwo, imgThree, imgFour, imgFive, imgSix, textOne, textTwo, textThree, textFour, textFive, textSix, headline, about, details, technology, live, client, server } = project;
    return (
        <div className=' px-5 lg:px-24 bg-background py-10 lg:py-20 text-slate-200'>
            <Link to='/'><div className='text-2xl lg:text-4xl hover:text-text flex justify-center lg:justify-start mb-5'>
                <FaHome></FaHome>
            </div></Link>
            <div className=' flex-col  flex justify-center  items-center mb-16 gap-5'>
                <div className='text-3xl lg:text-4xl font-bold'>
                    {headline}
                </div>
                <div className='flex gap-2 mb-5 justify-center'>
                    <a href={live} className='px-2 lg:px-2 py-1  text-slate-300 rounded text-sm ' target="_blank"><FaExternalLinkAlt className='text-xl hover:text-blue-400'></FaExternalLinkAlt></a>
                    <a href={client} className='px-2 lg:px-2 py-1  text-slate-300 rounded text-sm' target="_blank"><FaGithub className='text-xl hover:text-blue-400'></FaGithub></a>
                    <a href={server} className='px-2 lg:px-2 py-1  text-slate-300 rounded text-sm ' target="_blank"><FaServer className='text-xl hover:text-blue-400'></FaServer></a>
                </div>
                <div className=' '>
                    <div className='flex flex-wrap gap-2 lg:gap-1    '>
                        {
                            technology.map((tech, idx) => <p key={idx} className='text-slate-300 px-1 text-[12px] lg:text-[16px]   lg:px-2 py-1 bg-slate-800 rounded '>{tech}</p>)
                        }
                    </div>
                </div>
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-2 gap-16'>
                <div className='flex flex-col gap-4'>
                    <div>
                        <p>{textOne}</p>
                    </div>
                    <div>
                        <img className='rounded-lg' src={imgOne} alt="" />
                    </div>
                </div>
                <div className='flex flex-col gap-4'>
                    <div>
                        <p>{textTwo}</p>
                    </div>
                    <div>
                        <img className='rounded-lg' src={imgTwo} alt="" />
                    </div>
                </div>
                <div className='flex flex-col gap-4'>
                    <div>
                        <p>{textThree}</p>
                    </div>
                    <div>
                        <img className='rounded-lg' src={imgThree} alt="" />
                    </div>
                </div>
                <div className='flex flex-col gap-4'>
                    <div>
                        <p>{textFour}</p>
                    </div>
                    <div>
                        <img className='rounded-lg' src={imgFour} alt="" />
                    </div>
                </div>
                <div className='flex flex-col gap-4'>
                    <div>
                        <p>{textFive}</p>
                    </div>
                    <div>
                        <img className='rounded-lg' src={imgFive} alt="" />
                    </div>
                </div>
                <div className='flex flex-col gap-4'>
                    <div>
                        <p>{textSix}</p>
                    </div>
                    <div>
                        <img className='rounded-lg' src={imgSix} alt="" />
                    </div>
                </div>
            </div>

            <div className='flex flex-col items-center mt-16 gap-5'>
                <p className='text-4xl'>Project Details</p>
                <p className='px-5 lg:px-60 '>{details}</p>
            </div>
        </div>
    );
};

export default Details;