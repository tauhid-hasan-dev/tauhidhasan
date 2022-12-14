import React from 'react';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-hot-toast';

const Contact = () => {

    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_cishln6', 'template_0q6lutg', form.current, '94VsAnmtgsysF7Ig9')
            .then((result) => {
                console.log(result.text);
                console.log('sucessfull');
                toast.success('Your message sent succefully');

            }, (error) => {
                console.log(error.text);
            });
    };


    return (
        <div className=' bg-background ' id='contact'>
            <div className='flex flex-col items-center justify-center bg-background pt-16 lg:pt-24   '>
                <div className='text-4xl mb-8 font-bold text-slate-300'>
                    <p>Contact Me</p>
                </div>
                <div className='pb-10 lg:w-1/2 w-[90%]'>
                    <p className='text-sm lg:text-lg  text-slate-300 font-light text-center mb-2'>I am Actively looking for a Junior Frontend Developer position.<br></br>Please let me know If I can contribute to your business</p>

                    <form ref={form} onSubmit={sendEmail} className='px-2 lg:px-10 pt-10 pb-10   bg-nav-color flex flex-col gap-5'>
                        <input name='user_name' type='text' className="bg-slate-800 text-white  focus:bg-slate-700 input  w-full rounded" placeholder="Your Name" required></input>
                        <input name='user_email' type='email' className="bg-slate-800 text-white  focus:bg-slate-700 input rounded w-full rou" placeholder="Your Email" required></input>

                        <textarea name='message' type='text' className="bg-slate-800 text-white  focus:bg-slate-700 textarea rounded w-full" placeholder="Your message" required></textarea>
                        <input type="submit" value="Send" className=" bg-gradient-to-r from-blue-600 to-sky-600 hover:from-blue-700 hover:to-sky-700 w-full py-3 px-10 text-white  cursor-pointer rounded" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;