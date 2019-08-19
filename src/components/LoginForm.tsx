import React from 'react';

const LoginForm = ()=>{

    return(
        <>
            <div className="form-group">
                <label>
                    Email Address or Phone
                </label>
                <input type="email" className="form-control" placeholder="name@address.com" />
            </div>

            <div className="form-group">
                <label>
                    Password
                </label>
                <input type="password" className="form-control" placeholder="password" />
            </div>

            <button className="btn btn-lg btn-block btn-primary mb-3">
                Login
            </button>
        </>
    )
};

export default LoginForm;
