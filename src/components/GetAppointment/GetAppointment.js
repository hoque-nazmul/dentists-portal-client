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

    const { register, handleSubmit, errors } = useForm()
    const onSubmit = data => { console.log(data) }

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
                                <div className="col-md-6 offset-md-3">
                                    <form onSubmit={handleSubmit(onSubmit)}>
                                        <input name="example" defaultValue="test" ref={register} />
                                        <select name="time" id="data" ref={register({ required: true })}>
                                            {treatments.map(treatment => <option key={treatment.key} value={treatment.time}>{treatment.time}</option>)}
                                        </select>
                                        {errors.exampleRequired && <span>This field is required</span>}
                                        <input name="exampleRequired" ref={register({ required: true })} />
                                        {/* errors will return when field validation fails  */}
                                        {errors.exampleRequired && <span>This field is required</span>}

                                        <input type="submit" />
                                    </form>
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