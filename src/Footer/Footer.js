import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faYoutube } from '@fortawesome/free-brands-svg-icons';


const Footer = () => {
    return (
        <div className="bg-secondary bg-gradient bg-opacity-50 pb-1">
            <div className="row">
                <div className="col-12 col-lg-6 mt-3">
                    <h4 className="text-start ps-5 ms-5">Our Location</h4>
                    <h6 className="text-start ps-5 ms-5">House: A/24 , Hospital Road , Maijdi Court</h6>
                    <h6 className="text-start ps-5 ms-5">Noakhali , Bangladesh</h6>
                    <h6 className="text-start ps-5 ms-5">Contact Number: 01700000000</h6>
                    <h6 className="text-start ps-5 ms-5">Email: primecarehospital.bd@gmail.com</h6>

                </div>
                <div className="col-12 col-lg-6 mt-3">
                    <h3>Join with us</h3>
                    <a href="http://facebook.com" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faFacebook} size="2x" className="text-primary mx-3" />
                    </a>
                    <a href="http://youtube.com" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faYoutube} size="2x" className="text-danger mx-3" />
                    </a>
                </div>
            </div>
            <p className="text-center mt-3">Copyright © 2021 Prime care Hospital Ltd.</p>
        </div>
    );
};

export default Footer;