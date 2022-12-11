import React from 'react';
import { Link } from 'react-router-dom';
import { FaExternalLinkAlt, FaGithub, FaServer } from "react-icons/fa";

const Project = ({ project }) => {
    const { img, about, headline, live, client, server, id, summery, technology } = project;
    return (
        <div>
            <div className='flex gap-10 lg:flex-row flex-col'>
                <div className='w-[100%] lg:w-[50%] '>
                    <img className='rounded-lg  hover:scale-105 transform transition duration-700 ' src={img} alt="" />
                </div>
                <div className='w-[100%] lg:w-[50%] flex flex-col items-center lg:items-end'>
                    <div className='flex gap-2 mb-5'>
                        <a href={live} className='px-2 lg:px-2 py-1  text-slate-300 rounded text-sm ' target="_blank"><FaExternalLinkAlt className='text-xl hover:text-blue-400'></FaExternalLinkAlt></a>
                        <a href={client} className='px-2 lg:px-2 py-1  text-slate-300 rounded text-sm' target="_blank"><FaGithub className='text-xl hover:text-blue-400'></FaGithub></a>
                        <a href={server} className='px-2 lg:px-2 py-1  text-slate-300 rounded text-sm ' target="_blank"><FaServer className='text-xl hover:text-blue-400'></FaServer></a>
                    </div>

                    <p className='text-slate-400'>{about}</p>
                    <p className='text-3xl text-slate-100'>{headline}</p>

                    <div className='bg-skills text-slate-300 p-5 font-light flex flex-col items-start w-[100%] mt-3'>
                        <p className=''>{summery}
                        </p>
                    </div>
                    <div className='w-[100%] flex justify-center lg:justify-end'>
                        <div className='flex flex-wrap gap-2 lg:gap-1 mt-5 lg:mt-5  '>
                            {
                                technology.map((tech, idx) => <p key={idx} className='text-slate-300 px-1 text-[12px] lg:text-[16px]   lg:px-2 py-1 bg-slate-800 rounded '>{tech}</p>)
                            }
                        </div>
                    </div>
                </div>
            </div>
            <Link to={`/project/details/${id}`}><button className=" px-2  py-1  rounded mt-5 text-white bg-gradient-to-r from-blue-600 to-sky-600 hover:from-blue-700 hover:to-sky-700 " target="_blank">Project Details</button></Link>
        </div>
    );
};

export default Project;