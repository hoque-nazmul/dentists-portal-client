import React, { useEffect } from 'react';
import Calendar from 'react-calendar';
import img from '../../images/Mask Group 1.png'
import { useState } from 'react';
import 'react-calendar/dist/Calendar.css';
import './GetAppointment.css'
import Treatments from '../Treatments/Treatments';
import { useForm } from 'react-hook-form'

const GetAppointment = () => {
    const [date, setDate] = useState(new Date());
    const [treatments, setTreatments] = useState([]);
    const [appointmentInfo, setAppointmentInfo] = useState(null);
    const [appointmentForm, setAppointmentForm] = useState(null);
    const [appointmentMsg, setAppointmentMsg] = useState(null);

    // GET Treatments lists from Server
    useEffect(() => {
        fetch('http://localhost:4000/getTreatments')
            .then(res => res.json())
            .then(data => {
                setTreatments(data);
            })
    }, []);

    // Stored Clicked Date to State
    const onChange = date => {
        setDate(date);
    }

    // Stored Appointment Data to State
    const handleBookedAppointment = (bookedAppointment) => {
        const bookedName = bookedAppointment.name;
        const bookedTime = bookedAppointment.time;
        const bookedDate = date.toLocaleDateString();
        const bookedData = { bookedName, bookedTime, bookedDate }
        setAppointmentInfo(bookedData);
        setAppointmentForm(true);
    }

    // Handle Appointment Submission
    const { register, handleSubmit, errors } = useForm()
    const onSubmit = data => {
        fetch('http://localhost:4000/addAppointment', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
            .then(response => response.json())
            .then(appointment => {
                setAppointmentMsg(appointment);
            })
    }

    // After Getting Appointment Redirect to Homepage
    if(appointmentMsg) {
        setTimeout( () => {
            window.location.pathname = '/';
        }, 5000)
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
                    <div className="AppointmentFormWrapper">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-8 offset-md-2">
                                    {
                                        appointmentInfo &&
                                        <div className="FormContent">
                                            {
                                                appointmentMsg ?
                                                    <div className="AppointmentMsg">
                                                        <h2>Thanks {appointmentMsg.name} for Appointment</h2>
                                                        <p>Your Appointment ID: {appointmentMsg._id}</p>
                                                    </div>
                                                    :
                                                    <div>
                                                        <h2>{appointmentInfo.bookedName}</h2>
                                                        <form onSubmit={handleSubmit(onSubmit)}>
                                                            <select name="time" id="data" ref={register({ required: true })}>
                                                                {treatments.map(treatment => <option key={treatment.key} value={treatment.time}>{treatment.time}</option>)}
                                                            </select>
                                                            {errors.time && <span className="inputError">Time is required</span>}

                                                            <input name="name" ref={register({ required: true })} placeholder="Your Name" />
                                                            {errors.name && <span className="inputError">Name is required</span>}

                                                            <input name="email" ref={register({ required: true })} placeholder="Your Email" />
                                                            {errors.email && <span className="inputError">Email is required</span>}

                                                            <input name="phone" ref={register({ required: true })} placeholder="Your Phone" />
                                                            {errors.phone && <span className="inputError">Phone is required</span>}

                                                            <input name="date" ref={register({ required: true })} value={appointmentInfo.bookedDate} readOnly />

                                                            <input type="submit" className="mainBtn" value="Send" />
                                                        </form>
                                                    </div>
                                            }
                                        </div>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }

        </div>
    );
};

export default GetAppointment;