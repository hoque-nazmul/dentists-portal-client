import React from 'react';

const AdminSideBar = () => {
    return (
        <div id="layoutSidenav_nav">
            <nav className="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
                <div className="sb-sidenav-menu">
                    <div className="nav">
                        <a className="nav-link" href="/doctorsDashboard"
                        ><div className="sb-nav-link-icon"><i className="fas fa-tachometer-alt"></i></div>
                                Doctor's Dashboard</a>
                        <a className="nav-link" href="/doctorsDashboard"
                        ><div className="sb-nav-link-icon"><i className="fas fa-tachometer-alt"></i></div>
                                Doctor's Appointment</a>
                        <a className="nav-link" href="/doctorsDashboard"
                        ><div className="sb-nav-link-icon"><i className="fas fa-tachometer-alt"></i></div>
                                Patients</a>
                        <a className="nav-link" href="/doctorsDashboard"
                        ><div className="sb-nav-link-icon"><i className="fas fa-tachometer-alt"></i></div>
                                Prescriptions</a>
                        <a className="nav-link" href="/doctorsDashboard"
                        ><div className="sb-nav-link-icon"><i className="fas fa-tachometer-alt"></i></div>
                                Settings</a>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default AdminSideBar;