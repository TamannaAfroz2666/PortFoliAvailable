import React from 'react';
import './Home.css';
import Header from '../../Layout/Header/Header';
import WelcomePage from '../WelcomePage/WelcomePage';
import BreakingNews from '../BreakingNews/BreakingNews';
import About from '../About/About';
import Services from '../Services/Services';
import Skills from '../Skills/Skills';
import EducationAndExperience from '../EducationAndExperience/EducationAndExperience';
import Portfolio from '../Portfolio/Portfolio';
import Fake from '../Portfolio/Fake';
// import Testimonials from '../Testimonials/Testimonials';
// import Products from '../Products/Products';





const Home = () => {
    return (
        <div>
            <Header></Header> 
            <WelcomePage></WelcomePage>
            <BreakingNews></BreakingNews>
            <About></About>
            <Services></Services>
            <Skills></Skills>
            <EducationAndExperience></EducationAndExperience>
            {/* <Portfolio></Portfolio> */}
            {/* <Testimonials></Testimonials> */}

            <Fake></Fake>
           
          
        </div>
    );
};

export default Home;