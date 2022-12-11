import React from 'react';
import { FaMobile, FaPhoneAlt } from 'react-icons/fa';
import { SiGithub, SiLinkedin } from "react-icons/si";

const Footer = () => {
    return (
        <footer className="footer items-center p-4 bg-skills px-20 text-neutral-content">
            <div className='flex items-center justify-center gap-10 '>
                <p>Copyright © 2022 - All right reserved</p>

            </div>
            <div className='flex'>
                <div className='flex items-center gap-2'>
                    <FaPhoneAlt></FaPhoneAlt>
                    <p> +90 507 626 0228</p>
                </div>
                <div className='flex items-center gap-2'>
                    <FaMobile></FaMobile>
                    <p> tauhidhasan11@gmail.com</p>
                </div>
            </div>

            <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
                <a href="https://github.com/tauhid-hasan-dev" target='blank'><SiGithub className='text-xl lg:text-2xl text-gray-300' ></SiGithub></a>
                <a href="https://www.linkedin.com/in/tauhid-hasan/" target='blank'><SiLinkedin className='text-xl lg:text-2xl text-blue-600' ></SiLinkedin></a>
            </div>
        </footer>
    );
};

export default Footer;