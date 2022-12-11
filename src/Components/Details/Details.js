import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Details = () => {
    const datas = useLoaderData()
    console.log(datas)
    return (
        <div className='mt-32'>
            <p>this is the main factor</p>
        </div>
    );
};

export default Details;