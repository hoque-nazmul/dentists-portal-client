import React from 'react';
import '../Dashboard/Dashboard.css'
import AdminNavbar from '../Children/AdminNavbar/AdminNavbar';
import AdminSideBar from '../Children/AdminSideBar/AdminSideBar';
import { useState } from 'react';
import { useEffect } from 'react';

const GetPrescriptions = () => {
    const [prescriptions, setPrescriptions] = useState([]);

    useEffect(() => {
        fetch('http://localhost:4000/getPrescription')
            .then(res => res.json())
            .then(data => {
                setPrescriptions(data);
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
                            <h1 className="my-2" style={{ fontSize: '30px' }}>Prescription</h1>
                            

                            <div className="AppointmentDataTable">
                                <h2>All Prescriptions List</h2>
                                <table className="table table-bordered">
                                    <thead>
                                        <tr>
                                            <th scope="col">Patient's Name</th>
                                            <th scope="col">Medicine (No.1)</th>
                                            <th scope="col">Medicine (No.2)</th>
                                            <th scope="col">Advice</th>
                                        </tr>
                                    </thead>
                                    <tfoot>
                                        <tr>
                                            <th scope="col">Patient's Name</th>
                                            <th scope="col">Medicine (No.1)</th>
                                            <th scope="col">Medicine (No.2)</th>
                                            <th scope="col">Advice</th>
                                        </tr>
                                    </tfoot>
                                    <tbody>
                                        {
                                            prescriptions.length > 0 ?
                                            prescriptions.map(prescription => <tr key={prescription._id}>
                                                    <td>{prescription.name}</td>
                                                    <td>{prescription.medicineOne}</td>
                                                    <td>{prescription.medicineTwo}</td>
                                                    <td>{prescription.advice}</td>
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

export default GetPrescriptions;