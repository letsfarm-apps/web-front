import React from 'react';
let Loader = require('react-loaders').Loader;

interface IErrors {
    loginPassword?: string;
    loginEmail?: string;
}

interface LoginProps {
    email: string,
    password: string,
    handleChange: any,
    handleSubmit: any,
    loading: boolean,
    errors:IErrors,
}

const LoginForm:React.FunctionComponent<LoginProps> = (
    {
        email,
        password,
        errors,
        loading,
        handleChange,
        handleSubmit
    })=>{

    return(
        <>
            <div className="form-group">
                <label>
                    Email or Phone
                </label>
                <input type="email" value={email} name='loginEmail' onChange={handleChange} className="form-control" placeholder="name@address.com" />
                <p className='error'>{errors.loginEmail}</p>
            </div>

            <div className="form-group">
                <label>
                    Password
                </label>
                <input type="password" value={password} name='loginPassword' onChange={handleChange} className="form-control" placeholder="password" />
                <p className='error'>{errors.loginPassword}</p>
            </div>

            <button className="btn btn-lg btn-block btn-primary mb-3 account_btn" onClick={handleSubmit} disabled={loading}>
                <span>Login {loading && <Loader type="ball-pulse" active />}</span>
            </button>
        </>
    )
};

export default LoginForm;
