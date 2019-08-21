import React from 'react';
let Loader = require('react-loaders').Loader;

interface IErrors {
    fName?: string;
    lName?: string;
    email?: string;
    phone?: string;
    password?: string;
    confirmPassword?: string;
}

interface SignUpProps {
    email: string,
    password: string,
    fName: string,
    lName:string,
    phone: string,
    confirmPassword: string,
    handleChange: any,
    handleSubmit: any,
    loading: boolean,
    errors: IErrors,
}

const SignUpForm:React.FunctionComponent<SignUpProps> = (
    {
      email,
      password,
      fName,
      lName,
      phone,
      confirmPassword,
      handleChange,
      handleSubmit,
      errors,
      loading
    })=>{

    return(
        <>
            <div className="form-row">
                <div className="col-12 col-md-6 mb-3">
                    <label htmlFor="validationServer01">First name</label>
                    <input type="text" name={'fName'} value={fName} onChange={handleChange} className="form-control" placeholder="First name"
                            />
                    <p className='error'>{errors.fName}</p>
                </div>
                <div className="col-12 col-md-6 mb-3">
                    <label htmlFor="validationServer02">Last name</label>
                    <input type="text" name={'lName'}  className="form-control" id="validationServer02"
                           placeholder="Last name" onChange={handleChange} value={lName} />
                    <p className='error'>{errors.lName}</p>
                </div>
            </div>

            <div className="form-group">
                <label>
                    Email
                </label>
                <input type="email" name={'email'}  value={email} onChange={handleChange} className="form-control" placeholder="name@address.com" />
                <p className='error'>{errors.email}</p>
            </div>

            <div className="form-group">
                <label>
                    Phone Number
                </label>
                <div className="input-group input-group-merge">
                    <input type="text" name={'phone'}  value={phone} onChange={handleChange} className="form-control" placeholder="Enter your password" />
                </div>
                <p className='error'>{errors.phone}</p>
            </div>
            <div className="form-row">
                <div className="col-12 col-md-6 mb-3">
                    <label htmlFor="validationServer01">Password</label>
                    <input type="password" name={'password'}  value={password} onChange={handleChange} className="form-control" placeholder="password" />
                    <p className='error'>{errors.password}</p>
                </div>
                <div className="col-12 col-md-6 mb-3">
                    <label htmlFor="validationServer02">Confirm Password</label>
                    <input type="password" name={'confirmPassword'}  value={confirmPassword} onChange={handleChange} className="form-control" placeholder="confirm password"
                    />
                    <p className='error'>{errors.confirmPassword}</p>
                </div>
            </div>

            <button className="btn btn-lg btn-block btn-primary mb-3 account_btn"
            onClick={handleSubmit}
            disabled={loading}
            >
                Sign up {loading && <Loader type="ball-pulse" active />}
            </button>

        </>
    )
};

export default SignUpForm;
