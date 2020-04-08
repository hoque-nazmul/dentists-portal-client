import React from 'react';
import './Navbar.css'

const Navbar = () => {
    return (
        <div className="NavbarSection">
            <div className="container">
            <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top bg-transparent">
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav ml-auto">
                            <li class="nav-item active">
                                <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Doctor's Appointemnt</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Doctor's Dashboard</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-white" href="#">Blog</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-white" href="#">Contact us</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-white" href="#">Review</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-white" href="#">About</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Navbar;