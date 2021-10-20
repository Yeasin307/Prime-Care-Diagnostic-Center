import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../Hooks/useAuth';

const Login = () => {
    const { allContext } = useAuth();
    const { user, signInUsingGoogle, isLogin, handleRegistration, handleNameChange, handleEmailChange, handlePasswordChange, toggleLogin, error, handleResetPassword, setUser } = allContext;
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';
    const handleGoogleSignIn = () => {
        signInUsingGoogle()
            .then(result => {
                setUser(result.user);
                history.push(redirect_uri);
            })
    }

    return (
        <div className="mx-5 mb-4">
            {user?.email ? <div>
                <h4 className="text-success fw-bold mt-5 pt-5">Already Logged !!!</h4>
                <h5 className="text-dark fw-bold" style={{ marginBottom: "200px" }}>If you want to Logout , Please click Logout button.</h5></div> :
                <div>
                    <div className=" my-3 d-flex justify-content-end align-items-center">
                        <h4 className="text-dark fw-bold">Sign with</h4>
                        <button onClick={handleGoogleSignIn} className="btn btn-dark rounded-pill ms-3 fw-bolder"><FontAwesomeIcon icon={faGoogle} size="2x" className="text-warning mx-3" /></button>
                    </div>

                    <form onSubmit={handleRegistration}>
                        {isLogin ? <h3 className="text-primary fw-bold mb-3">Please Login</h3> :
                            <h3 className="text-primary fw-bold mb-3">Please Registration</h3>}
                        {!isLogin && <div className="row mb-3">
                            <label htmlFor="inputName" className="col-sm-2 col-form-label">Name</label>
                            <div className="col-sm-10">
                                <input type="text" onBlur={handleNameChange} className="form-control" id="inputName" />
                            </div>
                        </div>}
                        <div className="row mb-3">
                            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                            <div className="col-sm-10">
                                <input onBlur={handleEmailChange} type="email" className="form-control" id="inputEmail3" required />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                            <div className="col-sm-10">
                                <input type="password" onBlur={handlePasswordChange} className="form-control" id="inputPassword3" required />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="col-sm-3 offset-sm-2">
                                <div className="form-check">
                                    <input onChange={toggleLogin} className="form-check-input fs-5 fw-bold" type="checkbox" id="gridCheck1" />
                                    <label className="form-check-label fs-5 fw-bold text-success" htmlFor="gridCheck1">Already Registered ?</label>
                                </div>
                            </div>
                        </div>
                        <div className="row mb-3 text-danger">{error}</div>
                        <button type="submit" className="btn btn-primary fw-bold">
                            {isLogin ? 'Login' : 'Register'}
                        </button>
                        <button type="button" onClick={handleResetPassword} className="btn btn-warning fw-bold ms-3">Reset Password</button>
                    </form>
                </div>
            }
        </div>
    );
};

export default Login;