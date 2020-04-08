import React from 'react';
import './Header.css'
import headerImg from '../../images/Mask Group 1.png'

const Header = () => {
    return (
        <div className="HeaderSection d-flex align-items-center">
            <div className="container-fluid">
                <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top bg-transparent">
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav ml-auto mr-auto">
                            <li class="nav-item active">
                                <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Doctor's Appointemnt</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Doctor's Dashboard</a>
                            </li>
                        </ul>
                    </div>
                </nav>

                <div className="row align-items-center justify-content-between">
                    <div className="col-md-5">
                        <div className="HeaderLeft">
                            <h2>Your New Smile Starts Here</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis commodi nostrum quas, ex suscipit necessitatibus a dignissimos at asperiores labore. Lorem ipsum dolor sit amet.</p>
                            <button>Get Appointment</button>
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