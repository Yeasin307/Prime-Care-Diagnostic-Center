import React from 'react';

const Service = (props) => {
    const { image, serviceName } = props.service;
    return (
        <div className="col-lg-4 col-md-6 col-sm-12 g-3">
            <div className="border border-info border-3 rounded-3">
                <img className="img-fluid" src={image} alt="" />
                <h4>{serviceName}</h4>
                <button className='btn btn-info fw-bold mb-3'>Details</button>
            </div>
        </div>
    );
};

export default Service;