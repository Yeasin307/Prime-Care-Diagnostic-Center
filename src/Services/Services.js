import React, { useEffect } from 'react';
import useAuth from '../Hooks/useAuth';
import Service from '../Service/Service';

const Services = () => {

    const { services } = useAuth();

    useEffect(() => {
        document.title = "All Services";
    }, []);

    return (
        <div id="service" className="my-5">
            <h3>Services</h3>
            <div className="container">
                <div className="row">
                    {
                        services.map(service => <Service
                            key={service.serviceId}
                            service={service}
                        ></Service>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Services;