import React from 'react';
import Project from './Project';

const Projects = () => {

    const projects = [
        {
            id: '01',
            img: 'https://i.ibb.co/B2VrfSY/dsfsdfsdf.jpg',
            about: 'A rare and old books store',
            headline: 'Rare Books- Buy & sell',
            summery: 'Admin dashboard implemented. Admin can see and delete any user.Handled user authentication with firebase and secured API with JWT. A buyer can buy a book. A seller can add, delete and advertise  books.',
            live: 'https://used-book-store-90b6b.web.app/',
            client: 'https://github.com/tauhid-hasan-dev/used-books-client',
            server: 'https://github.com/tauhid-hasan-dev/used-books-server',
            technology: ['ReactJs', 'Tailwind CSS', 'ExpressJs', 'MongoDB', 'Firebase', 'Stripe', 'Axios']
        },
        {
            id: '02',
            img: 'https://i.ibb.co/fqskycJ/zaha.jpg',
            about: 'A service based wep app',
            headline: 'Architect Zaha Hadid',
            summery: 'Users can see service details and add a review for a specific service.Only logged-in users can go to my reviews,edit and delete a review.SPA, CRUD, responsive, Firebase(Auth), and authorization(JWT)',
            live: 'https://architect-tauhid-hasan.web.app/',
            client: 'https://github.com/tauhid-hasan-dev/architect-zaha-hadid-client',
            server: 'https://github.com/tauhid-hasan-dev/architect-zaha-hadid-server',
            technology: ['ReactJs', 'Tailwind CSS', 'ExpressJs', 'MongoDB', 'Firebase', 'JSON Web Token']
        },
        {
            id: '03',
            img: 'https://i.ibb.co/6NQnWhP/2.jpg',
            about: 'An Ed-Tech website for a startup',
            headline: 'edu-Cate',
            summery: 'Firebase user authentication applied with mail, google and GitHub. Dynamic routing in course details. Private route applied.SPA, responsive, unique design, private routes, dynamic routes.',
            live: 'https://learning-platform-client-d552c.web.app/',
            client: 'https://github.com/tauhid-hasan-dev/edu-cate-ed-tech-client',
            server: 'https://github.com/tauhid-hasan-dev/edu-cate-ed-tech-server',
            technology: ['ReactJs', 'Tailwind CSS', 'ExpressJs', 'Firebase', ]
        },
    ]
    return (
        <div className='px-8 py-14 lg:py-28 flex flex-col gap-28 lg:gap-40  bg-skills lg:px-40' id='projects' >
            {
                projects.map(project => <Project key={project.id} project={project}></Project>)
            }
        </div>
    );
};

export default Projects;