import React from 'react';
import '../../Admin/Dashboard/Dashboard.css'
import './Appointments.css'
import AdminNavbar from '../Children/AdminNavbar/AdminNavbar';
import AdminSideBar from '../Children/AdminSideBar/AdminSideBar';
import Calendar from 'react-calendar';
import { useState } from 'react';

const Appointments = () => {
    const [date, setDate] = useState(new Date());


    // Stored Clicked Date to State
    const onChange = date => {
        setDate(date);
    }
    return (
        <div className="Appointment">
            {/* Admin Navbar */}
            <AdminNavbar></AdminNavbar>
            {/* Admin Navbar */}
            <div id="layoutSidenav">
                {/* Admin SideBar */}
                <AdminSideBar></AdminSideBar>
                {/* Admin SideBar */}
                <div id="layoutSidenav_content">
                    <main className="pb-5 px-2">
                        <div className="container-fluid">
                            <h1 className="mt-2 mb-4 ml-2">Appointments</h1>
                            <div className="row">
                                <div className="col-xl-6 col-md-6 col-sm-12">
                                    <div className="Calender">
                                        <Calendar
                                            onChange={onChange}
                                            value={date}
                                        />
                                    </div>
                                </div>
                                <div className="col-xl-6 col-md-6 col-sm-12">
                                    <div className="card bg-warning text-white mb-4">
                                        <div className="card-body">Warning Card</div>
                                        <div className="card-footer d-flex align-items-center justify-content-between">
                                            <a className="small text-white stretched-link" href="/hello">View Details</a>
                                            <div className="small text-white"><i className="fas fa-angle-right"></i></div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </main>
                    <footer className="py-4 mt-auto">
                        <div className="container-fluid">
                            <div className="d-flex align-items-center justify-content-between small">
                                <div className="text-muted">&copy; All copyright Reserved | Nazmul Hoque</div>
                            </div>
                        </div>
                    </footer>
                </div>
            </div>
        </div>
    );
};

export default Appointments;