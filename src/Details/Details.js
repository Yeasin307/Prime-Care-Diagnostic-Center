import React from 'react';
import { useParams } from 'react-router';
import useAuth from '../Hooks/useAuth';

const Details = () => {
    const { serviceId } = useParams();
    const { services } = useAuth();


    // eslint-disable-next-line
    const service = services?.find(service => service?.serviceId == serviceId);
    return (
        <div className='container pb-3'>
            <h2 className='my-5'>Our {service.serviceName} Services</h2>
            <div className='row g-3'>
                <img className='col-6 p-0 border rounded-3' src={service.image} alt="" />
                <div className=" col-6 px-5 pt-3 border rounded-3 text-start">
                    <h5>{service?.description[0]}</h5>
                    <h5>{service?.description[1]}</h5>
                    <h5>{service?.description[2]}</h5>
                    <h5>{service?.description[3]}</h5>
                    <h5>{service?.description[4]}</h5>
                    <h5>{service?.description[5]}</h5>
                    <h5>{service?.description[6]}</h5>
                    <h5>{service?.description[7]}</h5>
                    <h5>{service?.description[8]}</h5>
                    <h5>{service?.description[9]}</h5>
                </div>
            </div>

            {
                service?.doctorList &&
                <div className='row g-3'>
                    <h2 className='mt-5 pb-3'>Our Special Consultant List</h2>
                    {
                        service?.doctorList.map((doctor, index) =>
                            <div key={index} className='col-3'>
                                <div className='border border-2 border-info rounded-3'>
                                    <img className='img-fluid' src={doctor.img} alt="" />
                                    <h4 className='pt-3'>{doctor.name}</h4>
                                    <p>{doctor.degree}</p>
                                    <h6 className='my-0'>{doctor.designation}</h6>
                                    <p>{doctor.institute}</p>
                                </div>
                            </div>
                        )
                    }
                </div>
            }

        </div>
    );
};

export default Details;