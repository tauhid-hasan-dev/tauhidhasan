import React from 'react';
import About from './About';
import Contact from './Contact';
/* import Experiences from './Experiences'; */
import Intro from './Intro';
import Projects from './Projects';

const Home = () => {
    return (
        <div>
            <Intro></Intro>
            <About></About>
            {/* <Experiences></Experiences> */}
            <Projects></Projects>
            <Contact></Contact>
        </div>
    );
};

export default Home;