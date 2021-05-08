import React from 'react';
import Service from '../Service/Service';
import Main from '../Main/Main';
import Navbar from './../../Shared/Navbar/Navbar';
import './Home.css';
import Projects from '../Projects/Projects';
import Testimonial from '../Testimonial/Testimonial';
import Maketeam from './../Maketeam/Maketeam';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
// import Team from '../Team/Team';



const Home = () => {
    return (
        <div>
        <Navbar/>
        <Main/>
        <Service />
        <Projects/>
        <Testimonial/>
        <Maketeam/>
        <Contact/>
        <Footer/>
        
        </div>
    );
};

export default Home;
