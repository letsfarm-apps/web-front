import React, {Component} from 'react';
import bgImage from '../assets/img/covers/farming-bg1.jpeg';
import LoginForm from "../components/LoginForm";
import SignUpForm from "../components/signupForm";

class Auth extends Component<any,any> {

    state ={
        current:'login',
    };

    setCurrent=(page:string)=>{
       this.setState({current:page});
    };

    render(){
        const {current}= this.state;
        return (
            <div className="container-fluid" style={{padding:0}}>
                <div className="row align-items-center justify-content-center">
                    <div className="col-12 col-md-5 col-lg-6 col-xl-4 px-lg-6 my-5">
                        <h1 className="display-4 text-center mb-3">
                            {
                                current==='login'?
                                    'Login':
                                    'Sign up'
                            }
                        </h1>
                        <p className="text-muted text-center mb-5">
                            You are always welcome to join us
                        </p>
                        <form>
                        {
                            current==='login'? <LoginForm /> : <SignUpForm />
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

export default  Auth;
