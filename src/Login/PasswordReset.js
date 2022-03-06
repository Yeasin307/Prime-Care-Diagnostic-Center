import React from 'react';
import { useHistory } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';

const PasswordReset = () => {

    const { allContext } = useAuth();
    const { handleEmailChange, handleResetPassword } = allContext;
    const history = useHistory();

    const handlePasswordReset = e => {
        e.preventDefault();
        handleResetPassword();
        alert("please check your email.");
        history.push('/login');
    }

    return (
        <div className='my-5'>
            <form onSubmit={handlePasswordReset}>
                <div className='d-flex justify-content-center align-items-center'>
                    <div className='d-flex justify-content-center align-items-center w-50'>
                        <label style={{ fontSize: '22px', marginRight: '10px' }}>Email :
                        </label>
                        <input style={{ border: '2px solid black', borderRadius: '5px' }} className='w-75 p-2' required placeholder='Please enter your email' onChange={handleEmailChange} type="email" />
                    </div>
                </div>
                <button type='submit' className="btn btn-warning fw-bold my-5">Reset Password</button>
            </form>
        </div>
    );
};

export default PasswordReset;