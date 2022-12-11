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
        <div className='px-8 py-14 lg:py-28 flex flex-col gap-28 lg:gap-40  bg-skills lg:px-40' id='projects' >
            {
                projects.map(project => <Project key={project.id} project={project}></Project>)
            }
        </div>
    );
};

export default Projects;