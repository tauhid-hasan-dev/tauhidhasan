import React from 'react';
import { SiGithub, SiLinkedin } from "react-icons/si";

const Footer = () => {
    return (
        <footer className="footer items-center p-4 bg-skills px-20 text-neutral-content">

            <div className='flex items-center justify-center '>

                <p>Copyright © 2022 - All right reserved</p>
            </div>


            <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
                <a href="https://github.com/tauhid-hasan-dev" target='blank'><SiGithub className='text-4xl lg:text-3xl text-gray-300' ></SiGithub></a>
                <a href="https://www.linkedin.com/in/tauhid-hasan/" target='blank'><SiLinkedin className='text-4xl lg:text-3xl text-blue-600' ></SiLinkedin></a>
            </div>
        </footer>
    );
};

export default Footer;