import React from 'react';
import { FaMobile, FaPhoneAlt } from 'react-icons/fa';
import { SiGithub, SiLinkedin } from "react-icons/si";
import { MdEmail, MdCall } from "react-icons/md";

const Footer = () => {
    return (
        <footer className="footer  flex lg:flex-row flex-col items-center  lg:justify-center gap-5 p-4 bg-skills px-8  lg:px-24 py-8 text-neutral-content">
            <div className='flex items-center justify-center lg:flex-row flex-col'>
                <p>Copyright © 2022 - All right reserved</p>
            </div>
            <div className='flex gap-2 flex-col lg:flex-row lg:gap-8 items-center justify-center '>
                <div className='flex items-center  gap-1'>
                    <MdCall></MdCall>
                    <p> +90 507 626 0228</p>
                </div>
                <div className='flex items-center gap-1'>
                    <MdEmail></MdEmail>
                    <p> tauhidhasan11@gmail.com</p>
                </div>
            </div>

            <div className="flex">
                <a href="https://github.com/tauhid-hasan-dev" target='blank'><SiGithub className='text-lg text-gray-300 hover:text-text' ></SiGithub></a>
                <a href="https://www.linkedin.com/in/tauhid-hasan/" target='blank'><SiLinkedin className='text-lg hover:text-text  text-slate-300' ></SiLinkedin></a>
            </div>
        </footer>
    );
};

export default Footer;