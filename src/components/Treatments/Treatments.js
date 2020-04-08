import React from 'react';
import './Treatments.css'

const Treatments = (props) => {
    const { name, time, space } = props.treatment;
    return (
        <div className="col-md-4">
            <div className="TreatmentContent">
                <h4>{name}</h4>
                <h6>{time}</h6>
                <p>{space} spaces are available</p>
                <button onClick={() => props.handleBookedAppointment(props.treatment) } className="mainBtn">Book Appointment</button>
            </div>
        </div>
    );
};

export default Treatments;