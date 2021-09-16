import React from 'react';
import animate from '../src/images/animate.jpg';
import About from './About';
import Common from './Common';
import Contact from './Contact';
import Service from './Service';

const Home = () => {
    return (
        <>
            <Common
            name="Grow Your Business With Us" 
            imgsrc={animate} 
            visit='/service' 
            btname="Get Started"
             />
             <About />
             <Service />
             <Contact />
        </>
    )
}

export default Home;
