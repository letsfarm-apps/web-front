import React from 'react';

const SignUpForm = ()=>{

    return(
        <>
            <div className="form-row">
                <div className="col-12 col-md-6 mb-3">
                    <label htmlFor="validationServer01">First name</label>
                    <input type="text" className="form-control" placeholder="First name" value="Mark"
                           required />
                </div>
                <div className="col-12 col-md-6 mb-3">
                    <label htmlFor="validationServer02">Last name</label>
                    <input type="text" className="form-control" id="validationServer02"
                           placeholder="Last name" value="Otto" required/>
                </div>
            </div>

            <div className="form-group">
                <label>
                    Email Address
                </label>
                <input type="email" className="form-control" placeholder="name@address.com" />
            </div>

            <div className="form-group">
                <label>
                    Phone Number
                </label>
                <div className="input-group input-group-merge">
                    <input type="text" className="form-control" placeholder="Enter your password" />
                </div>
            </div>
            <div className="form-row">
                <div className="col-12 col-md-6 mb-3">
                    <label htmlFor="validationServer01">Password</label>
                    <input type="password" className="form-control" placeholder="password" />
                </div>
                <div className="col-12 col-md-6 mb-3">
                    <label htmlFor="validationServer02">Confirm Password</label>
                    <input type="password" className="form-control" placeholder="confirm password"
                    />
                </div>
            </div>

            <button className="btn btn-lg btn-block btn-primary mb-3">
                Sign up
            </button>

        </>
    )
};

export default SignUpForm;
