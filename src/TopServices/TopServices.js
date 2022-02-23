import React from 'react';
import useAuth from '../Hooks/useAuth';
import Service from '../Service/Service';

const TopServices = () => {

    const { services } = useAuth();

    return (
        <div className="my-5">
            <h3>Top Services</h3>
            <div className="container">
                <div className="row">
                    {
                        services.slice(0, 3).map(service => <Service
                            key={service.serviceId}
                            service={service}
                        ></Service>)
                    }
                </div>
            </div>
        </div>
    );
};

export default TopServices;