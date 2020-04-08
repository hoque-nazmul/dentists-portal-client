import React, { useEffect } from 'react';
import Calendar from 'react-calendar';
import img from '../../images/Mask Group 1.png'
import { useState } from 'react';
import 'react-calendar/dist/Calendar.css';
import './GetAppointment.css'

const GetAppointment = () => {
    const [date, setDate] = useState(new Date());
    const [treatments, setTreatments] = useState(null);

    useEffect(()=> {
        fetch('http://localhost:4000/getTreatments')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setTreatments(data);
            })
    }, []);

    console.log(treatments);

    const onChange = date => {
        setDate(date);
    }

    return (
        <div className="GetAppointmentSection">
            <div className="GetAppointmentContent">
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
        </div>
    );
};

export default GetAppointment;