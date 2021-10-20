import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Details = () => {
    const { serviceId } = useParams();
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('/data.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])

    const service = services?.find(serve => serve?.serviceId == serviceId)

    return (
        <div>
            <img className="img-fluid mt-3" src={service?.image} alt="" />
            <h2>Our Service</h2>
            <p className="mb-5">{service?.details?.description}</p>
        </div>
    );
};

export default Details;