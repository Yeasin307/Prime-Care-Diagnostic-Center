import React, { useEffect } from 'react';

const AboutUs = () => {

    useEffect(() => {
        document.title = "About Us";
    }, []);

    return (
        <div>
            <div className="py-5">
                <h2 className="text-center text-primary fw-bold mb-3">About us</h2>
                <p className="text-center w-75 mx-auto fs-5">Prime care Hospital Ltd. is where smart and enthusiastic Bangladeshi people, who are lifelong learners, come to get the skills they need and to transform their lives as they want. We are a community of enthusiastic learners united in a shared objective of life transformation through self-learning.</p>
            </div>
            <div className="row">
                <div className="col-6">
                    <div className="bg-danger bg-opacity-25 rounded-3 p-4 m-4 h-100">
                        <h4 className="text-center">Our Mission</h4>
                        <p>Our mission is to even up education through the offering of high-quality learning opportunities that are accessible, flexible, and affordable. Virtually anyone anywhere in Bangladesh with an internet connection and a determination of self-learning can come to Prime care Hospital Ltd., master an array of skills, and start working to pursue his dreams.</p>
                    </div>
                </div>
                <div className="col-6">
                    <div className="bg-primary bg-opacity-50 rounded-3 p-4 m-4 h-100">
                        <h4 className="text-center">Our Vision</h4>
                        <p>Prime care Hospital Ltd. is where motivated learners will come to learn the skills they need, to pursue the jobs they wish, to build things they want and to lead the lives they deserve. Students will be offered with opportunity to do some close to real-world projects curated by experts. These will help them to have the experience and portfolio for future. The online courses will come from not only individuals but rather renowned and established organizations of many different sectors- to provide the best quality education and recognition to the people of Bangladesh. Our goal is to grow exponentially and to engage and educate 1 million people by 2022.</p>
                    </div>
                </div>
            </div>
            <div className="bg-info bg-opacity-50 w-75 mx-auto my-5 p-4 rounded-3">
                <h4 className="text-center">What's In The Future?</h4>
                <p>Our future learning models and personalized support system will enable an unimaginable degree of engagement with our students and instructors. And, we will be with them through every phase of their learning graph: from the time the social media team may reply a query on Facebook Page, to the fulfilling moment when the career-counselling team will get the email that a learner has found a job or started something new with the knowledge he gained here. Our priority is always the betterment of our students, and this flare will always inspire us to offer high-quality practical education to as many people as we can reach through internet.</p>
            </div>
        </div>
    );
};

export default AboutUs;