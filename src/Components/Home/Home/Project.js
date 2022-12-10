import React from 'react';
import { Link } from 'react-router-dom';

const Project = ({ project }) => {
    const { img, about, headline, live, client, server, id, summery, technology } = project;
    return (
        <div className='flex gap-10 lg:flex-row flex-col'>
            <div className='w-[100%] lg:w-[50%] '>
                <img className='rounded-lg' src={img} alt="" />
            </div>
            <div className='w-[100%] lg:w-[50%] flex flex-col items-center lg:items-end'>
                <div className='flex gap-2 mb-5'>
                    <a href={live} className='px-2 lg:px-2 py-1 border border-text text-slate-200 rounded text-sm ' target="_blank">View Project</a>
                    <a href={client} className='px-2 lg:px-2 py-1 border border-text text-slate-200 rounded text-sm' target="_blank">Client Code</a>
                    <a href={server} className='px-2 lg:px-2 py-1 border border-text text-slate-200 rounded text-sm' target="_blank">Server Code</a>
                </div>

                <p className='text-slate-300'>{about}</p>
                <p className='text-3xl text-slate-50'>{headline}</p>

                <div className='bg-background text-slate-300 p-5 font-light flex flex-col items-end w-[100%] mt-3'>
                    <p>{summery}
                    </p>

                </div>
                <div className='w-[100%] flex justify-center lg:justify-end'>
                    <div className='flex flex-wrap gap-2 lg:gap-1 mt-5 lg:mt-5  '>
                        {
                            technology.map((tech, idx) => <p key={idx} className='text-slate-300 px-1 text-[12px] lg:text-[16px]   lg:px-2 py-1 bg-slate-700'>{tech}</p>)
                        }
                    </div>
                </div>
                {/*  <div className='bg-project details'>
                    <Link> <a className='px-2 lg:px-2 py-1 border border-text text-slate-200 rounded text-sm ' target="_blank">View Project</a></Link>
                </div> */}


            </div>
        </div>
    );
};

export default Project;