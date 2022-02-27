import React from 'react';
import { useParams } from 'react-router';
import useAuth from '../Hooks/useAuth';

const Details = () => {
    const { serviceId } = useParams();
    const { services } = useAuth();

    // eslint-disable-next-line
    const service = services?.find(service => service?.serviceId == serviceId);

    return (
        <div>
            <img className="img-fluid mt-3" src={service?.image} alt="" />
            <h2>Our Service</h2>
            <p className="mb-5">{service?.details?.description}</p>
        </div>
    );
};

export default Details;