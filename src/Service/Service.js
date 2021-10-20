import React from 'react';
import { Link } from 'react-router-dom';

const Service = (props) => {
    const { image, serviceName, serviceId } = props.service;
    return (
        <div className="col-lg-4 col-md-6 col-sm-12 g-3">
            <div className="border border-info border-3 rounded-3">
                <img className="img-fluid" src={image} alt="" />
                <h4 className="my-3">{serviceName}</h4>
                <Link to={`/details/${serviceId}`}><button className='btn btn-info fw-bold mb-3'>Details</button></Link>
            </div>
        </div>
    );
};

export default Service;