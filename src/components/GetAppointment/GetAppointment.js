import React, { useEffect } from 'react';
import Calendar from 'react-calendar';
import img from '../../images/Mask Group 1.png'
import { useState } from 'react';
import 'react-calendar/dist/Calendar.css';
import './GetAppointment.css'
import Treatments from '../Treatments/Treatments';

const GetAppointment = () => {
    const [date, setDate] = useState(new Date());
    const [treatments, setTreatments] = useState([]);
    const [appointmentInfo, setAppointmentInfo] = useState(null);
    const [appointmentForm, setAppointmentForm] = useState(null);

    useEffect(() => {
        fetch('http://localhost:4000/getTreatments')
            .then(res => res.json())
            .then(data => {
                setTreatments(data);
            })
    }, []);

    const onChange = date => {
        setDate(date);
    }

    const handleBookedAppointment = (bookedAppointment) => {
        const bookedinfo = bookedAppointment;
        const bookedDate = date.toLocaleDateString();
        const bookedData = { bookedinfo, bookedDate }
        setAppointmentInfo(bookedData);
        setAppointmentForm(true);
    }

    return (
        <div className="GetAppointmentSection">
            {
               
                <div style={{ display: appointmentForm ? 'none' : 'block' }} className="GetAppointmentInfo">
                    <div className="GetAppointmentTop">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-md-6">
                                    <div className="GetAppointmentCalender">
                                        <h2 className="mb-3">Appointment Date</h2>
                                        <div className="Calender">
                                            <Calendar
                                                onChange={onChange}
                                                value={date}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="GetAppointmentImg">
                                        <img src={img} alt="" className="img-fluid" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="GetAppointmentBottom">
                        <div className="container">
                            <h2>Available Appointments on {date.toLocaleDateString()}</h2>
                            {
                                treatments.length > 0 ?
                                    <div className="row justify-content-around">
                                        {
                                            treatments.map(data => <Treatments key={data.key} handleBookedAppointment={handleBookedAppointment} treatment={data}></Treatments>)
                                        }
                                    </div>
                                    : <div id="preloder">
                                        <div className="loader"></div>
                                    </div>
                            }
                        </div>
                    </div>
                </div>
                }
                {
                    <div style={{ display: appointmentForm ? 'block' : 'none' }} className="AppointmentStoredForm">
                        <h2>Hello world</h2>
                    </div>
                }
           
        </div>
    );
};

export default GetAppointment;