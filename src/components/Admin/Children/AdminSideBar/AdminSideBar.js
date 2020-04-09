import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faChartLine, faCalendarCheck, faUserFriends, faFileAlt, faCog } from '@fortawesome/free-solid-svg-icons'

const AdminSideBar = () => {
    return (
        <div id="layoutSidenav_nav">
            <nav className="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
                <div className="sb-sidenav-menu">
                    <div className="nav  mt-4">
                        <a className="nav-link" href="/doctorsDashboard"
                        ><div className="sb-nav-link-icon"><FontAwesomeIcon icon={faChartLine} /></div>
                                Doctor's Dashboard</a>
                        <a className="nav-link" href="/doctorsAppointment"
                        ><div className="sb-nav-link-icon"><FontAwesomeIcon icon={faCalendarCheck} /></div>
                                Doctor's Appointment</a>
                        <a className="nav-link" href="/patients"
                        ><div className="sb-nav-link-icon"><FontAwesomeIcon icon={faUserFriends} /></div>
                                Patients</a>
                        <a className="nav-link" href="/hello" target="_blank"
                        ><div className="sb-nav-link-icon"><FontAwesomeIcon icon={faFileAlt} /></div>
                                Prescriptions</a>
                        <a className="nav-link" href="/hello" target="_blank"
                        ><div className="sb-nav-link-icon"><FontAwesomeIcon icon={faCog} /></div>
                                Settings</a>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default AdminSideBar;