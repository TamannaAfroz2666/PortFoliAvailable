import React from 'react';
import './Testimonials.css';
import image from '../../assets/Images/Portfolio/fig1.jpg'
import image2 from '../../assets/Images/Portfolio/figma2.jpg'
// import Carousel from 'react-bootstrap/Carousel';
import { FaBeer } from 'react-icons/fa';

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


                        {/* <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
                            <div class="carousel-indicators">
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            </div>
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <img src={image} class="d-block w-100" alt="..." />
                                    <div class="carousel-caption d-none d-md-block">
                                        <h5>First slide label</h5>
                                        <p>Some representative placeholder content for the first slide.</p>
                                    </div>
                                </div>
                                <div class="carousel-item">
                                    <img src={image2} class="d-block w-100" alt="" />
                                    <div class="carousel-caption d-none d-md-block">
                                        <h5>Second slide label</h5>
                                        <p>Some representative placeholder content for the second slide.</p>
                                    </div>
                                </div>
                                <div class="carousel-item">
                                    <img src={image} class="d-block w-100" alt="..." />
                                    <div class="carousel-caption d-none d-md-block">
                                        <h5>Third slide label</h5>
                                        <p>Some representative placeholder content for the third slide.</p>
                                    </div>
                                </div>
                            </div>
                            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div> */}
                        <div id="carouselExampleAutoplaying" class=" carousel slide" data-bs-ride="carousel">

                            {/* <div class="carousel-indicators">
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active btncaro" aria-current="true" aria-label="Slide 1">
                                </button>
                                <button type="button" className='btncaro' data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                               
                            </div> */}

                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <div className="card-wrapper ">
                                        <div className="card " >


                                            {/* <span className='iconTom'><AiFillStar  size={6}/></span> */}

                                            {/* <img src={image} className="card-img-top" alt="..." /> */}
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At debitis eius, asperiores earum quo fuga doloremque totam nostrum voluptatum autem.</p>
                                            <div className="card-body">
                                                {/* <h5 className="card-title">Card title</h5> */}
                                                <div className="imageCardSec">
                                                    <div className="imageCardTest">
                                                        <div className="img">
                                                            {/* <img src={image} className="card-img-top" alt="..." /> */}

                                                        </div>
                                                        <div className="infoImgTest">
                                                            <p> Nicolas Marko</p>
                                                            <p>Web developer</p>
                                                           
                                                            <br></br>
                                                            <p> Nicolas Marko</p>
                                                            <p>Web developer</p>
                                                            
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card" >
                                            <img src={image} className="card-img-top" alt="..." />
                                            <div className="card-body">
                                                <h5 className="card-title">Card title</h5>

                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <div className="card-wrapper ">
                                        {/* <div class="card  " >
                                            <img src={image2} class="card-img-top" alt="..." />
                                            <div class="card-body">
                                                <h5 class="card-title">Card title</h5>

                                            </div>
                                        </div> */}
                                        <div className="card" >
                                            <img src={image} className="card-img-top" alt="..." />
                                            <div className="card-body">
                                                <h5 className="card-title">Card title</h5>

                                            </div>
                                        </div>
                                        <div className="card" >
                                            <img src={image2} className="card-img-top" alt="..." />
                                            <div className="card-body">
                                                <h5 className="card-title">Card title</h5>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <div className="card-wrapper">
                                        {/* <div class="card " >
                                            <img src={image2} class="card-img-top" alt="..." />
                                            <div class="card-body">
                                                <h5 class="card-title">Card title</h5>

                                            </div>
                                        </div> */}
                                        <div className="card" >
                                            <img src={image} className="card-img-top" alt="..." />
                                            <div className="card-body">
                                                <h5 className="card-title">Card title</h5>

                                            </div>
                                        </div>
                                        <div className="card" >
                                            <img src={image2} className="card-img-top" alt="..." />
                                            <div className="card-body">
                                                <h5 className="card-title">Card title</h5>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                                    <span class="carousel-control-prev-icon iconName" aria-hidden="false"></span>
                                    <span class="visually-hidden">Previous</span>
                                </button> */}
                                {/* <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Next</span>
                                </button> */}
                            </div>

                            {/* <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button> */}


                        </div>
                    </div>

                    
                    <h1 className='h11'>hhh <FaBeer color='white' size={13}/> </h1>

                </div>
            </div>
        </div>
    );
};

export default Testimonials;