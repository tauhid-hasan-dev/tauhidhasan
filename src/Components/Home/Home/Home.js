import React from 'react';
import Contact from './Contact';
import Experiences from './Experiences';
import Intro from './Intro';
import Projects from './Projects';

const Home = () => {
    return (
        <div>
            <Intro></Intro>
            <Experiences></Experiences>
            <Projects></Projects>
            <Contact></Contact>
        </div>
    );
};

export default Home;