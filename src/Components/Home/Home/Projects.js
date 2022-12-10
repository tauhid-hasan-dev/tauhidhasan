import React from 'react';

const Projects = () => {
    return (
        <div className='px-8 py-14 lg:py-28 flex flex-col gap-28 lg:gap-40  bg-skills lg:px-40' id='projects' >
            <div className='flex gap-10 lg:flex-row flex-col'>
                <div className='w-[100%] lg:w-[50%] '>
                    <img className='rounded-lg' src="https://i.ibb.co/B2VrfSY/dsfsdfsdf.jpg" alt="" />
                </div>
                <div className='w-[100%] lg:w-[50%] flex flex-col items-center lg:items-end'>
                    <div className='flex gap-2 mb-5'>
                        <a href="https://used-book-store-90b6b.web.app/" className='px-2 lg:px-2 py-1 border border-text text-slate-200 rounded text-sm ' target="_blank">View Project</a>
                        <a href="https://github.com/tauhid-hasan-dev/used-books-client" className='px-2 lg:px-2 py-1 border border-text text-slate-200 rounded text-sm' target="_blank">Client Code</a>
                        <a href="https://github.com/tauhid-hasan-dev/used-books-server" className='px-2 lg:px-2 py-1 border border-text text-slate-200 rounded text-sm' target="_blank">Server Code</a>
                    </div>

                    <p className='text-slate-300'>A rare and old books store</p>
                    <p className='text-3xl text-slate-50'>Rare Books- Buy & sell</p>

                    <div className='bg-background text-slate-300 p-5 font-light flex flex-col items-end w-[100%] mt-3'>
                        <p>Admin dashboard implemented. Admin can see and delete any user.
                        </p>
                        <p>Handled user authentication with firebase and secured API with JWT. </p>
                        <p>A buyer can buy a book. A seller can add, delete and advertise  books.</p>
                    </div>
                    <div className='w-[100%] flex justify-center lg:justify-end'>
                        <div className='flex flex-wrap gap-2 lg:gap-1 mt-5 lg:mt-5  '>
                            <p className='text-slate-300 px-1 text-[12px] lg:text-[16px]   lg:px-2 py-1 bg-slate-700'>ReactJs</p>
                            <p className='text-slate-300 px-1 text-[12px] lg:text-[16px]  lg:px-2 py-1 bg-slate-700'>Tailwind CSS</p>
                            <p className='text-slate-300 px-1 text-[12px] lg:text-[16px]  lg:px-2 py-1 bg-slate-700'>ExpressJs</p>
                            <p className='text-slate-300 px-1 text-[12px] lg:text-[16px]  lg:px-2 py-1 bg-slate-700'>MongoDB</p>
                            <p className='text-slate-300 px-1 text-[12px] lg:text-[16px]  lg:px-2 py-1 bg-slate-700'>Firebase</p>
                            <p className='text-slate-300 px-1 text-[12px] lg:text-[16px]  lg:px-2 py-1 bg-slate-700'>Stripe</p>
                            <p className='text-slate-300 px-1 text-[12px] lg:text-[16px]  lg:px-2 py-1 bg-slate-700'>Axios</p>
                        </div>
                    </div>


                </div>
            </div>

            {/* =================================== */}


            <div className='flex gap-10 lg:flex-row flex-col'>
                <div className='w-[100%] lg:w-[50%] '>
                    <img className='rounded-lg' src="https://i.ibb.co/fqskycJ/zaha.jpg" alt="" />
                </div>
                <div className='w-[100%] lg:w-[50%] flex flex-col items-center lg:items-end'>
                    <div className='flex gap-2 mb-5'>
                        <a href="https://architect-tauhid-hasan.web.app/" className='px-2 lg:px-2 py-1 border border-text text-slate-200 rounded text-sm' target="_blank">View Project</a>
                        <a href="https://github.com/tauhid-hasan-dev/architect-zaha-hadid-client" className='px-2 lg:px-2 py-1 border border-text text-slate-200 rounded text-sm' target="_blank">Client Code</a>
                        <a href="https://github.com/tauhid-hasan-dev/architect-zaha-hadid-server" className='px-2 lg:px-2 py-1 border border-text text-slate-200 rounded text-sm' target="_blank">Server Code</a>
                    </div>

                    <p className='text-slate-300'>A service based wep app</p>
                    <p className='text-3xl text-slate-50'>Architect Zaha Hadid</p>

                    <div className='bg-background text-slate-300 p-5 font-light flex flex-col items-end w-[100%] mt-3'>
                        <p>Users can see service details and add a review for a specific service.
                        </p>
                        <p>Only logged-in users can go to my reviews', edit and delete a review. </p>
                        <p>SPA, CRUD, responsive, Firebase(Auth), and authorization(JWT).</p>
                    </div>
                    <div className='w-[100%] flex justify-center lg:justify-end'>
                        <div className='flex flex-wrap gap-2 lg:gap-1 mt-5 lg:mt-5  '>
                            <p className='text-slate-300 px-1 text-[12px] lg:text-[16px]   lg:px-2 py-1 bg-slate-700'>ReactJs</p>
                            <p className='text-slate-300 px-1 text-[12px] lg:text-[16px]  lg:px-2 py-1 bg-slate-700'>Tailwind CSS</p>
                            <p className='text-slate-300 px-1 text-[12px] lg:text-[16px]  lg:px-2 py-1 bg-slate-700'>ExpressJs</p>
                            <p className='text-slate-300 px-1 text-[12px] lg:text-[16px]  lg:px-2 py-1 bg-slate-700'>MongoDB</p>
                            <p className='text-slate-300 px-1 text-[12px] lg:text-[16px]  lg:px-2 py-1 bg-slate-700'>Firebase</p>
                            <p className='text-slate-300 px-1 text-[12px] lg:text-[16px]  lg:px-2 py-1 bg-slate-700'>JSON Web Token</p>
                        </div>
                    </div>

                </div>
            </div>

            {/* =================================== */}

            <div className='flex gap-10 lg:flex-row flex-col'>
                <div className='w-[100%] lg:w-[50%] '>
                    <img className='rounded-lg' src="https://i.ibb.co/6NQnWhP/2.jpg" alt="" />
                </div>
                <div className='w-[100%] lg:w-[50%] flex flex-col items-center lg:items-end'>
                    <div className='flex gap-2 mb-5'>
                        <a href="https://learning-platform-client-d552c.web.app/" className='px-2 lg:px-2 py-1 border border-text text-slate-200 rounded text-sm' target="_blank">View Project</a>
                        <a href="https://github.com/tauhid-hasan-dev/edu-cate-ed-tech-client" className='px-2 lg:px-2 py-1 border border-text text-slate-200 rounded text-sm' target="_blank">Client Code</a>
                        <a href="https://github.com/tauhid-hasan-dev/edu-cate-ed-tech-server" className='px-2 lg:px-2 py-1 border border-text text-slate-200 rounded text-sm' target="_blank">Server Code</a>
                    </div>

                    <p className='text-slate-300'>An Ed-Tech website for a startup</p>
                    <p className='text-3xl text-slate-50'>edu-Cate</p>

                    <div className='bg-background text-slate-300 p-5 font-light flex flex-col items-end w-[100%] mt-3'>
                        <p>Firebase user authentication applied with mail, google and GitHub.
                        </p>
                        <p>Dynamic routing in course details. Private route applied </p>
                        <p>SPA, responsive, unique design, private routes, dynamic routes</p>
                    </div>
                    <div className='w-[100%] flex justify-center lg:justify-end'>
                        <div className='flex flex-wrap gap-2 lg:gap-1 mt-5 lg:mt-5  '>
                            <p className='text-slate-300 px-1 text-[12px] lg:text-[16px]   lg:px-2 py-1 bg-slate-700'>ReactJs</p>
                            <p className='text-slate-300 px-1 text-[12px] lg:text-[16px]  lg:px-2 py-1 bg-slate-700'>Tailwind CSS</p>
                            <p className='text-slate-300 px-1 text-[12px] lg:text-[16px]  lg:px-2 py-1 bg-slate-700'>ExpressJs</p>
                            <p className='text-slate-300 px-1 text-[12px] lg:text-[16px]  lg:px-2 py-1 bg-slate-700'>MongoDB</p>
                            <p className='text-slate-300 px-1 text-[12px] lg:text-[16px]  lg:px-2 py-1 bg-slate-700'>Firebase</p>
                            <p className='text-slate-300 px-1 text-[12px] lg:text-[16px]  lg:px-2 py-1 bg-slate-700'>JSON Web Token</p>
                        </div>
                    </div>

                </div>
            </div>


        </div>
    );
};

export default Projects;