import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
            <h2 className="text-danger" style={{ marginTop: "150px", marginBottom: "100px" }}>Not Found ! [404]</h2>
            <Link to="/"><button className='btn btn-warning mb-5 text-bold'>Go Back</button></Link>
        </div>
    );
};

export default NotFound;