import React from 'react';
import './Header.css'
import headerImg from '../../images/Mask Group 1.png'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="HeaderSection d-flex align-items-center">
            <div className="container-fluid">
                <div className="row align-items-center justify-content-between">
                    <div className="col-md-5">
                        <div className="HeaderLeft">
                            <h2>Your New Smile Starts Here</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis commodi nostrum quas, ex suscipit necessitatibus a dignissimos at asperiores labore. Lorem ipsum dolor sit amet.</p>
                            <Link to="/getAppointment"><button className="mainBtn">Get Appointment</button></Link>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="HeaderRight">
                            <img src={headerImg} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;