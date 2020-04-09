import React from 'react';
import './Dashboard.css'
import AdminNavbar from '../Children/AdminNavbar/AdminNavbar';
import AdminSideBar from '../Children/AdminSideBar/AdminSideBar';
import { useState } from 'react';
import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen } from '@fortawesome/free-solid-svg-icons'

const Dashboard = () => {
    const [appointments, setAppointments] = useState([]);

    useEffect(() => {
        fetch('http://localhost:4000/getAppointments')
            .then(res => res.json())
            .then(data => {
                setAppointments(data);
            })
    }, [])

    return (
        <div className="AdminPanel">
            {/* Admin Navbar */}
            <AdminNavbar></AdminNavbar>
            {/* Admin Navbar */}
            <div id="layoutSidenav">
                {/* Admin SideBar */}
                <AdminSideBar></AdminSideBar>
                {/* Admin SideBar */}
                <div id="layoutSidenav_content">
                    <main>
                        <div className="container-fluid">
                            <h1 className="my-2">Dashboard</h1>
                            <div className="row">
                                <div className="col-xl-3 col-md-6">
                                    <div className="card bg-primary text-white mb-4">
                                        <div className="card-body">Primary Card</div>
                                        <div className="card-footer d-flex align-items-center justify-content-between">
                                            <a className="small text-white stretched-link" href="/hello">View Details</a>
                                            <div className="small text-white"><i className="fas fa-angle-right"></i></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-md-6">
                                    <div className="card bg-warning text-white mb-4">
                                        <div className="card-body">Warning Card</div>
                                        <div className="card-footer d-flex align-items-center justify-content-between">
                                            <a className="small text-white stretched-link" href="/hello">View Details</a>
                                            <div className="small text-white"><i className="fas fa-angle-right"></i></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-md-6">
                                    <div className="card bg-success text-white mb-4">
                                        <div className="card-body">Success Card</div>
                                        <div className="card-footer d-flex align-items-center justify-content-between">
                                            <a className="small text-white stretched-link" href="/hello">View Details</a>
                                            <div className="small text-white"><i className="fas fa-angle-right"></i></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-md-6">
                                    <div className="card bg-danger text-white mb-4">
                                        <div className="card-body">Danger Card</div>
                                        <div className="card-footer d-flex align-items-center justify-content-between">
                                            <a className="small text-white stretched-link" href="/hello">View Details</a>
                                            <div className="small text-white"><i className="fas fa-angle-right"></i></div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="AppointmentDataTable">
                                <h2>Appointments Data Table</h2>
                                <table className="table table-bordered">
                                    <thead>
                                        <tr>
                                            <th scope="col">Date</th>
                                            <th scope="col">Time</th>
                                            <th scope="col">Name</th>
                                            <th scope="col">Contact</th>
                                            <th scope="col">Prescription</th>
                                            <th scope="col">Action</th>
                                        </tr>
                                    </thead>
                                    <tfoot>
                                        <tr>
                                            <th scope="col">Date</th>
                                            <th scope="col">Time</th>
                                            <th scope="col">Name</th>
                                            <th scope="col">Contact</th>
                                            <th scope="col">Prescription</th>
                                            <th scope="col">Action</th>
                                        </tr>
                                    </tfoot>
                                    <tbody>
                                        {
                                            appointments.length > 0 ?
                                                appointments.map(appointment => <tr key={appointment._id}>
                                                    <td>{appointment.date}</td>
                                                    <td>{appointment.time}</td>
                                                    <td>{appointment.name}</td>
                                                    <td>{appointment.phone}</td>
                                                    <td><button className="mainBtn">Not Added</button></td>
                                                    <td><button className="TableActionBtn">Pending</button><button className="btnIcon"><FontAwesomeIcon icon={faPen} /></button></td>
                                                </tr>)
                                                : <tr id="preloder"><td className="loader"></td></tr>
                                        }
                                    </tbody>
                                </table>
                            </div>

                        </div>
                    </main>
                    <footer className="py-4 bg-light mt-auto">
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

export default Dashboard;