import React from 'react';
import '../Dashboard/Dashboard.css'
import AdminNavbar from '../Children/AdminNavbar/AdminNavbar';
import AdminSideBar from '../Children/AdminSideBar/AdminSideBar';
import { useState } from 'react';
import { useEffect } from 'react';

const Patients = () => {
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
                            <h1 className="my-2" style={{ fontSize: '30px' }}>Patients</h1>
                            

                            <div className="AppointmentDataTable">
                                <h2>All Patients List</h2>
                                <table className="table table-bordered">
                                    <thead>
                                        <tr>
                                            <th scope="col">Name</th>
                                            <th scope="col">Email</th>
                                            <th scope="col">Phone</th>
                                            <th scope="col">Appointment Date</th>
                                        </tr>
                                    </thead>
                                    <tfoot>
                                        <tr>
                                            <th scope="col">Name</th>
                                            <th scope="col">Email</th>
                                            <th scope="col">Phone</th>
                                            <th scope="col">Appointment Date</th>
                                        </tr>
                                    </tfoot>
                                    <tbody>
                                        {
                                            appointments.length > 0 ?
                                                appointments.map(appointment => <tr key={appointment._id}>
                                                    <td>{appointment.name}</td>
                                                    <td>{appointment.email}</td>
                                                    <td>{appointment.phone}</td>
                                                    <td>{appointment.date}</td>
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

export default Patients;