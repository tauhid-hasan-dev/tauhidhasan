import React, { useEffect, useState } from 'react';
import Project from './Project';

const Projects = () => {
    const [projects, setProjects] = useState([])

    useEffect(() => {
        fetch('https://portfolio-tauhid-server.vercel.app/projects')
            .then(res => res.json())
            .then(data => {
                /* console.log(data); */
                setProjects(data)
            })
    }, [])

    return (
        <div className='bg-background px-8 lg:px-40 py-14 lg:py-28 flex flex-col gap-10' id='projects'>
            <div className='text-slate-200 font-bold text-3xl '>
                Some of My Projects
            </div>
            <div className='flex flex-col gap-28 lg:gap-40'   >
                {
                    projects.map(project => <Project key={project.id} project={project}></Project>)
                }
            </div>
        </div>
    );
};

export default Projects;