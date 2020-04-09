import React from 'react';
import '../../Admin/Dashboard/Dashboard.css'
import './Appointments.css'
import AdminNavbar from '../Children/AdminNavbar/AdminNavbar';
import AdminSideBar from '../Children/AdminSideBar/AdminSideBar';
import Calendar from 'react-calendar';
import { useState } from 'react';

const Appointments = () => {
    const [date, setDate] = useState(new Date());
    const [appointments, setAppointments] = useState([]);
    const [activeAppointment, setActiveAppointment] = useState(null);

    // const today = new Date().toLocaleDateString();
    //     fetch('https://pacific-sierra-92196.herokuapp.com/appointmentsByToday', {
    //         method: 'POST',
    //         body: JSON.stringify({today}),
    //         headers: {
    //             "Content-type": "application/json; charset=UTF-8"
    //         }
    //     })
    //         .then(res => res.json())
    //         .then(todayAppointments => {
    //             setTodayAppointments(todayAppointments);
    //             console.log(todayAppointments);
    //         })

    // Stored Clicked Date to State
    const onChange = date => {
        const localDate = date.toLocaleDateString();
        fetch('https://pacific-sierra-92196.herokuapp.com/appointmentsByDate', {
            method: 'POST',
            body: JSON.stringify({ localDate }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
            .then(res => res.json())
            .then(appointment => {
                setAppointments(appointment);
                setActiveAppointment(true);
            })
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
                                    <div className="AppointmentByDate">
                                        <div className="TableHeader d-flex justify-content-between">
                                            <h4>Appointments</h4>
                                            <p>Date: {date.toLocaleDateString()}</p>
                                        </div>
                                        <table className="table table-borderless">
                                            <thead>
                                                <tr>
                                                    <th scope="col">Patient Name</th>
                                                    <th scope="col">Scedule</th>
                                                    <th scope="col">Action</th>
                                                </tr>
                                            </thead>
                                            {
                                                activeAppointment ?
                                                <tbody>
                                                {
                                                    appointments.length > 0 ?
                                                    appointments.map(data => <tr key={data._id}>
                                                        <td>{data.name}</td>
                                                        <td>{data.time}</td>
                                                        <td><button className="TableActionBtn">Not Visited</button></td>
                                                    </tr>)
                                                    : <tr><td colSpan='3' className="alertAppointment">You haven't any appointment on this date.</td></tr>
                                                }
                                                </tbody>
                                                :<tbody><tr><td colSpan='3' className="alertAppointment">You have to select a date to show Appointments by selected date.</td></tr></tbody>
                                            }
                                        </table>
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