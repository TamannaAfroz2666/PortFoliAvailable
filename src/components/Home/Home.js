import React from 'react';
import './Home.css';
import Header from '../../Layout/Header/Header';
import WelcomePage from '../WelcomePage/WelcomePage';
import Products from '../Products/Products';





const Home = () => {
    return (
        <div>
            <Header></Header> 
           
            <Products></Products>
            <WelcomePage></WelcomePage>
           
          
        </div>
    );
};

export default Home;