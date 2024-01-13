import React from 'react';
import './Testimonials.css';
// import image from '../../assets/Images/Portfolio/fig1.jpg'
// import image2 from '../../assets/Images/Portfolio/figma2.jpg'
// import Carousel from 'react-bootstrap/Carousel';
import { AiFillStar } from "react-icons/ai";
import { PiQuotesBold } from "react-icons/pi";
import image1 from '../../assets/Images/Client/Pic1.jpg';
import img2 from '../../assets/Images/Client/pic2.jpg';
import image3 from '../../assets/Images/Client/pic3.jpg'
import image4 from '../../assets/Images/Client/pic4.jpg'
import image5 from '../../assets/Images/Client/pic5.jpg'
import image6 from '../../assets/Images/Client/pice4.jpg'

const Testimonials = () => {
    return (
        <div className="testimonial">
            <div className='testimonialMain'>
                <div className="testimonialHead">
                    <div className="testimonialContent">
                        <div className="ratings">
                            <h1 className='ratingNumber'>4.8</h1>
                            <p className='ratingTitle'>Rating</p>
                        </div>
                        <h1 className='testimonialSort'>Testimonials</h1>
                        <p className='testimonialDes'>What My Client Say</p>
                    </div>
                    <div className="caroselManu">
                        <div id="carouselExampleAutoplaying" class=" carousel slide" data-bs-ride="carousel">

                    

                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <div className="card-wrapper ">
                                        <div className="card " >
                                            <span className='StartIconTest'>
                                                <AiFillStar color='yellow' size={20} className='starIcon' />
                                                <AiFillStar color='yellow' size={20} className='starIcon' />
                                                <AiFillStar color='yellow' size={20} className='starIcon' />
                                                <AiFillStar color='yellow' size={20} className='starIcon' />

                                            </span>
                                            <p className='clientDes'>Lorem ipsum dolor sit amet consectetur adipisicing elit. At debitis eius, asperiores earum quo fuga doloremque totam nostrum voluptatum autem.</p>
                                            <div className="card-body">
                                                <div className="imageCardSec">
                                                    <div className="imageCardTest">
                                                        <div className="img">
                                                            <img src={image1} alt="..." />
                                                        </div>
                                                        <div className="infoImgTest">
                                                            <p className='clientName'> Nicolas Marko</p>
                                                            <span className='ClientDo'>Web developer</span>
                                                        </div>
                                                    </div>
                                                    <div className="iconRight">
                                                        <span className='iconRiQuo'>
                                                            <PiQuotesBold size={25} className='piQuote'/>

                                                        </span>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card " >
                                            <span className='StartIconTest'>
                                                <AiFillStar color='yellow' size={20} className='starIcon' />
                                                <AiFillStar color='yellow' size={20} className='starIcon' />
                                                <AiFillStar color='yellow' size={20} className='starIcon' />
                                                <AiFillStar color='yellow' size={20} className='starIcon' />

                                            </span>
                                            <p className='clientDes'>Lorem ipsum dolor sit amet consectetur adipisicing elit. At debitis eius, asperiores earum quo fuga doloremque totam nostrum voluptatum autem.</p>
                                            <div className="card-body">
                                                <div className="imageCardSec">
                                                    <div className="imageCardTest">
                                                        <div className="img">
                                                            <img src={img2} alt="..." />
                                                        </div>
                                                        <div className="infoImgTest">
                                                            <p className='clientName'> Mohin khan</p>
                                                            <span className='ClientDo'>Web developer</span>
                                                        </div>
                                                    </div>
                                                    <div className="iconRight">
                                                        <span className='iconRiQuo'>
                                                            <PiQuotesBold size={25} className='piQuote'/>

                                                        </span>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <div className="card-wrapper ">
                                       
                                    <div className="card " >
                                            <span className='StartIconTest'>
                                                <AiFillStar color='yellow' size={20} className='starIcon' />
                                                <AiFillStar color='yellow' size={20} className='starIcon' />
                                                <AiFillStar color='yellow' size={20} className='starIcon' />
                                                <AiFillStar color='yellow' size={20} className='starIcon' />

                                            </span>
                                            <p className='clientDes'>Lorem ipsum dolor sit amet consectetur adipisicing elit. At debitis eius, asperiores earum quo fuga doloremque totam nostrum voluptatum autem.</p>
                                            <div className="card-body">
                                                <div className="imageCardSec">
                                                    <div className="imageCardTest">
                                                        <div className="img">
                                                            <img src={image3} alt="..." />
                                                        </div>
                                                        <div className="infoImgTest">
                                                            <p className='clientName'> Ani Kris</p>
                                                            <span className='ClientDo'>Web developer</span>
                                                        </div>
                                                    </div>
                                                    <div className="iconRight">
                                                        <span className='iconRiQuo'>
                                                            <PiQuotesBold size={25} className='piQuote'/>

                                                        </span>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card " >
                                            <span className='StartIconTest'>
                                                <AiFillStar color='yellow' size={20} className='starIcon' />
                                                <AiFillStar color='yellow' size={20} className='starIcon' />
                                                <AiFillStar color='yellow' size={20} className='starIcon' />
                                                <AiFillStar color='yellow' size={20} className='starIcon' />

                                            </span>
                                            <p className='clientDes'>Lorem ipsum dolor sit amet consectetur adipisicing elit. At debitis eius, asperiores earum quo fuga doloremque totam nostrum voluptatum autem.</p>
                                            <div className="card-body">
                                                <div className="imageCardSec">
                                                    <div className="imageCardTest">
                                                        <div className="img">
                                                            <img src={image4} alt="..." />
                                                        </div>
                                                        <div className="infoImgTest">
                                                            <p className='clientName'> Junior Sijan</p>
                                                            <span className='ClientDo'>Web developer</span>
                                                        </div>
                                                    </div>
                                                    <div className="iconRight">
                                                        <span className='iconRiQuo'>
                                                            <PiQuotesBold size={25} className='piQuote'/>

                                                        </span>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <div className="card-wrapper">
                                       
                                    <div className="card " >
                                            <span className='StartIconTest'>
                                                <AiFillStar color='yellow' size={20} className='starIcon' />
                                                <AiFillStar color='yellow' size={20} className='starIcon' />
                                                <AiFillStar color='yellow' size={20} className='starIcon' />
                                                <AiFillStar color='yellow' size={20} className='starIcon' />

                                            </span>
                                            <p className='clientDes'>Lorem ipsum dolor sit amet consectetur adipisicing elit. At debitis eius, asperiores earum quo fuga doloremque totam nostrum voluptatum autem.</p>
                                            <div className="card-body">
                                                <div className="imageCardSec">
                                                    <div className="imageCardTest">
                                                        <div className="img">
                                                            <img src={image5} alt="..." />
                                                        </div>
                                                        <div className="infoImgTest">
                                                            <p className='clientName'> Rahul Bikas</p>
                                                            <span className='ClientDo'>Web developer</span>
                                                        </div>
                                                    </div>
                                                    <div className="iconRight">
                                                        <span className='iconRiQuo'>
                                                            <PiQuotesBold size={25} className='piQuote'/>

                                                        </span>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card " >
                                            <span className='StartIconTest'>
                                                <AiFillStar color='yellow' size={20} className='starIcon' />
                                                <AiFillStar color='yellow' size={20} className='starIcon' />
                                                <AiFillStar color='yellow' size={20} className='starIcon' />
                                                <AiFillStar color='yellow' size={20} className='starIcon' />

                                            </span>
                                            <p className='clientDes'>Lorem ipsum dolor sit amet consectetur adipisicing elit. At debitis eius, asperiores earum quo fuga doloremque totam nostrum voluptatum autem.</p>
                                            <div className="card-body">
                                                <div className="imageCardSec">
                                                    <div className="imageCardTest">
                                                        <div className="img">
                                                            <img src={image6} alt="..." />
                                                        </div>
                                                        <div className="infoImgTest">
                                                            <p className='clientName'> Anna Marko</p>
                                                            <span className='ClientDo'>Web developer</span>
                                                        </div>
                                                    </div>
                                                    <div className="iconRight">
                                                        <span className='iconRiQuo'>
                                                            <PiQuotesBold size={25} className='piQuote'/>

                                                        </span>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                               
                            </div>
                        </div>
                    </div>

                    <div className="reviewContent">
                        <div className="reviewRatings">
                            <h1 className='reviewNumber'>520+</h1>
                            <p className='reviewTitle'>Reviews</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;