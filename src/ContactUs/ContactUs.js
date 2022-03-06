import React, { useEffect } from 'react';

const ContactUs = () => {

    useEffect(() => {
        document.title = "Contact Us";
    }, []);

    const handleSubmit = e => {
        e.preventDefault();
        alert("Your feedback successfully submitted.");
        e.target.reset();
    }

    return (
        <div>
            <form onSubmit={handleSubmit} className="w-50 mx-auto my-5">
                <h2 className="text-primary fw-bold text-center">Contact Us</h2>
                <p className="text-center fs-5">Could not find what you needed?</p>
                <h6 className="text-start">Your Name <span className="text-danger fs-4">*</span></h6>
                <input type="text" required className="w-100" />
                <h6 className="text-start">Email <span className="text-danger fs-4">*</span></h6>
                <input type="email" required className="w-100" />
                <h6 className="text-start">Mobile <span className="text-danger fs-4">*</span></h6>
                <input type="text" required className="w-100" />
                <h6 className="text-start">Your Message <span className="text-danger fs-4">*</span></h6>
                <textarea className="w-100" required rows="5"></textarea>
                <div className="d-flex align-items-center">
                    <input type="checkbox" />
                    <p className="ms-3 mt-3">Send me update</p>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
};

export default ContactUs;