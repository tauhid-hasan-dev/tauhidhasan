import React from 'react';

const Contact = () => {
    return (
        <div className=' bg-background ' id='contact'>
            <div className='w-full flex justify-center bg-background py-16 '>
                <div className='pb-10 lg:w-1/2 w-[90%]'>
                    <p className='text-sm lg:text-lg  text-slate-300 font-light text-center mb-2'>I am Actively looking for a Junior Frontend Developer position.<br></br>Please let me know If I can contribute to your business</p>

                    <form className='p-10  bg-nav-color flex flex-col gap-5'>
                        <input name='name' type='text' className="bg-slate-500 text-white  focus:bg-slate-700 input rounded-none w-full" placeholder="Your Name" required></input>
                        <input name='email' type='email' className="bg-slate-500 text-white  focus:bg-slate-700 input rounded-none w-full" placeholder="Your Email" required></input>

                        <textarea name='serviceDetails' type='text' className="bg-slate-500 text-white  focus:bg-slate-700 textarea rounded-none w-full" placeholder="Your message" required></textarea>
                        <button type='submit' className=" border border-text w-full py-3 px-10 text-white  hover:bg-slate-800 rounded">Sumbit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;