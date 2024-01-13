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

import Testimonials from '../Testimonials/Testimonials';
import PersonalPlan from '../PersonalPlan/PersonalPlan';
import FQA from '../FQA/FQA';
import Blogs from '../Blogs/Blogs';
import ContactMe from '../Blogs/Usability/ContactMe/ContactMe';
import Footer from '../../Layout/Footer/Footer';
// import Products from '../Products/Products';





const Home = () => {
    return (
        <div >
            <Header></Header> 
            <WelcomePage></WelcomePage>
            <BreakingNews></BreakingNews>
            <About></About>
            <Services></Services>
            <Skills></Skills>
            <EducationAndExperience></EducationAndExperience>
            <Portfolio></Portfolio>
            <Testimonials></Testimonials>
            <PersonalPlan></PersonalPlan>
            <FQA></FQA>
            <Blogs></Blogs>
            <ContactMe></ContactMe>
            {/* <Footer></Footer> */}

    
           
          
        </div>
    );
};

export default Home;