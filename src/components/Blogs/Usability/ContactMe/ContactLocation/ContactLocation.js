import React from 'react';
import './ContactLocation.css';
import { BsPhoneFlip } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { TfiLocationPin } from "react-icons/tfi";
// import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import { Marker } from "@react-google-maps/api";
// import { useMemo } from "react";
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;


const ContactLocation = () => {

    // const { isLoaded } = useLoadScript({
    //     googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY,
    // });
    // const center = useMemo(() => ({ lat: 18.52043, lng: 73.856743 }), []);

    const handleApiLoaded = (map, maps) => {
        // use map and maps objects
        console.log('map');
    };

    const defaultProps = {
        center: {
            lat: 10.99835602,
            lng: 77.01502627,
            address: '1600 Amphitheatre Parkway, Mountain View, california.'
        },
        zoom: 11
    };
    return (
        <div className='contactLocation'>
            <div className="contactLocationBody">
                <div className="phone">
                    <div className="phoneContents">
                        <div className="phoneIcon">
                            <BsPhoneFlip size={25} color='white' className='locationPhoneIcon' />
                        </div>
                    </div>
                    <div className="phoneInfo">
                        <p className='phoneTitle'>Phone</p>
                        <span className='phoneNumber'>+13135 663 5532</span>
                    </div>
                </div>
                <div className="emailContact">
                    <div className="phoneContents">
                        <div className="phoneIcon">
                            <AiOutlineMail size={25} color='white' className='locationPhoneIcon' />
                        </div>
                    </div>
                    <div className="phoneInfo">
                        <p className='phoneTitle'>Email</p>
                        <span className='phoneNumber'>afroztamanna66@gmail.com</span>
                    </div>

                </div>
                <div className="locationMap">
                    <div className="phoneContents">
                        <div className="phoneIcon">
                            <TfiLocationPin size={25} color='white' className='locationPhoneIcon' />
                        </div>
                    </div>
                    <div className="phoneInfo">
                        <p className='phoneTitle'>Location</p>
                        <span className='phoneNumber'>Mohammadpur, Dhaka, Bangladesh</span>
                    </div>

                </div>

            </div>

            {/* <div className="mapUsingHead">
                <div style={{ height: '100vh', width: '100%' }}>
                    <GoogleMapReact
                        bootstrapURLKeys={{ key: "" }}
                        defaultCenter={defaultProps.center}
                        defaultZoom={defaultProps.zoom}
                        yesIWantToUseGoogleMapApiInternals
                        onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
                    >
                        
                        <AnyReactComponent
                            lat={59.955413}
                            lng={30.337844}
                            text={defaultProps.center.address}
                        />
                    </GoogleMapReact>
                </div>
            </div> */}

        </div>
    );
};

export default ContactLocation;