import React, {Component} from 'react';
import bgImage from '../assets/img/covers/farming-bg1.jpeg';
import LoginForm from "../components/LoginForm";
import SignUpForm from "../components/SignUpForm";
import { toast } from 'react-toastify';
import {signUpAction, loginAction} from '../redux/actions/auth';
import {connect} from "react-redux";

class Auth extends Component<any,any> {

    state ={
        current:'login',
        loginEmail:'',
        loginPassword:'',
        email:'',
        password:'',
        fName:'',
        lName:'',
        phone:'',
        confirmPassword:'',
        errors:{}
    };

    setCurrent=(page:string)=>{
       this.setState({current:page});
    };

    handleChange=(event: React.ChangeEvent<HTMLInputElement>)=>{
        const {name, value}= event.target;
        this.setState({[name]:value});
    };

    validateSignUp=()=>{
        let valid=true;

        interface IErrors {
            fName?: string;
            lName?: string;
            email?: string;
            phone?: string;
            password?: string;
            confirmPassword?: string;
        }

        let errors:IErrors={};

        const {email, password, confirmPassword, fName, lName, phone} = this.state;
        if(fName===null || fName===""){
            errors.fName ='first name is required';
            valid=false;
        }

        if(lName===null || lName===""){
            errors.lName ='last name is required';
            valid=false;
        }
        if(email===null || email===""){
            errors.email ='email is required';
            valid=false;
        }

        if(phone===null || phone===""){
            errors.phone ='phone is required';
            valid=false;
        }

        if(password===null){
            errors.password ='password is required';
            valid=false;
        }

        if(password!==confirmPassword){
            errors.confirmPassword ='passwords not matching';
            valid=false;
        }

        if(!valid){
            this.setState({errors})
        }
        return valid;
    };

    validateLogin=()=>{
        let valid=true;

        interface IErrors {
            loginEmail?: string;
            loginPassword?: string;
        }

        let errors:IErrors={};
        const {loginEmail, loginPassword} = this.state;
        if(loginEmail===null || loginEmail===""){
            errors.loginEmail ='email is required';
            valid=false;
        }

        if(loginPassword===null || loginPassword===""){
            errors.loginPassword ='password is required';
            valid=false;
        }

        if(!valid){
            this.setState({errors})
        }

        return valid;
    };

    handleSignUp=async (e: React.FormEvent<HTMLFormElement>): Promise<void>=>{
        e.preventDefault();

        if(this.validateSignUp()){
            const {signUpAction} = this.props;
            const {email, password, fName, lName, phone} = this.state;
            let data={
                name: fName+lName,
                password,
                email,
                phone,
                role: 'farmer'
            };
            await signUpAction(data);
            const {signUpSuccess} = this.props;
            if(signUpSuccess){
                toast.success("Account created successfully!", {
                    position: toast.POSITION.TOP_CENTER
                });
                const {
                    email,
                    display_name,
                    token}= this.props.user;
                localStorage.setItem('email',email);
                localStorage.setItem('name',display_name);
                localStorage.setItem('token',token);
                this.props.history.push('/');
            }
        }
    };

    handleLogin = async (e: React.FormEvent<HTMLFormElement>): Promise<void>=>{
        e.preventDefault();
        if(this.validateLogin()){
            const {loginAction} = this.props;
            const {loginEmail, loginPassword} = this.state;
            let data={
                email: loginEmail,
                password: loginPassword
            };

            await loginAction(data);
            const {loginSuccess, loginError} = this.props;
            if(loginSuccess){
                toast.success("Login successful !", {
                    position: toast.POSITION.TOP_CENTER
                });
                const {
                    email,
                    display_name,
                    token}= this.props.user;
                localStorage.setItem('email',email);
                localStorage.setItem('name',display_name);
                localStorage.setItem('token',token);
                this.props.history.push('/');
            }else if(loginError){
                toast.error("Login failed!", {
                    position: toast.POSITION.TOP_CENTER
                });
            }
        }
    };

    render(){
        const {current,
            loginEmail,
            loginPassword,
            email,
            password,
            fName,
            lName,
            phone,
            confirmPassword,
            errors
        }= this.state;
        return (
            <div className="container-fluid" style={{padding:0}}>
                <div className="row align-items-center justify-content-center">
                    <div className="col-12 col-md-5 col-lg-6 col-xl-4 px-lg-6 my-5">
                        <h1 className="display-4 text-center mb-3">
                            {
                                current==='login'? 'Login': 'Sign up'
                            }
                        </h1>
                        <p className="text-muted text-center mb-5">
                            You are always welcome to join us
                        </p>
                        <form>
                        {
                            current==='login'?
                                <LoginForm
                                    email={loginEmail}
                                    password={loginPassword}
                                    handleChange={this.handleChange}
                                    handleSubmit={this.handleLogin}
                                    loading={this.props.loginLoading}
                                    errors={errors}
                                /> :
                                <SignUpForm
                                    email={email}
                                    password={password}
                                    fName={fName}
                                    lName={lName}
                                    phone={phone}
                                    confirmPassword={confirmPassword}
                                    handleChange={this.handleChange}
                                    handleSubmit={this.handleSignUp}
                                    errors={errors}
                                    loading={this.props.signUpLoading}
                                />
                        }
                        <div className="text-center">
                            <small className="text-muted text-center">
                                {
                                    current==='login'?
                                        <>
                                            Don't have an account? <a className='link' onClick={()=>this.setCurrent('sign_up')}>Sign Up</a>.
                                        </>
                                        :
                                        <>
                                            Already have an account? <a className='link' onClick={()=>this.setCurrent('login')}>Login</a>.
                                        </>
                                }
                                </small>
                            </div>
                        </form>
                    </div>
                    <div className="col-12 col-md-7 col-lg-6 col-xl-8 no-padding">

                        <div className="bg-cover vh-100"
                             style={{backgroundImage: `url(${bgImage})`}} />
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state:any)=>({
    loginLoading: state.auth.loginLoading,
    loginError: state.auth.loginError,
    loginSuccess: state.auth.loginSuccess,
    signUpSuccess: state.auth.signUpSuccess,
    signUpError: state.auth.signUpError,
    signUpLoading: state.auth.signUpLoading,
    user: state.auth.user,
});

export default  connect(mapStateToProps, {signUpAction, loginAction})(Auth);
