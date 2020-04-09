import React from 'react';
import './Navbar.css'

const Navbar = () => {
    return (
        <div className="NavbarSection">
            <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top bg-transparent">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/doctorsDashboard">Doctor's Dashboard</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/doctorsAppointment">Doctor's Appointemnt</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/patients">Patients</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/getPrescription">Prescriptions</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/404">Review</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/404">About</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Navbar;