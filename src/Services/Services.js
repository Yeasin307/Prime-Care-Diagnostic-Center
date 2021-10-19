import React from 'react';
import useAuth from '../Hooks/useAuth';
import Service from '../Service/Service';

const Services = () => {
    const { services } = useAuth();
    return (
        <div id="services">
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