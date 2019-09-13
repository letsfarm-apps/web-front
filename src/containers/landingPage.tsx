import React, {Component} from 'react';
// import loginImg from '../images/login.png';
import homeImg from '../images/home.png';
import qaIcon from '../images/qa.png';
import projectIcon from '../images/project.png';
import databaseIcon from '../images/database.png';
import financeIcon from '../images/finance.png';
import Routes from '../utils/routes';
class LandingPage extends Component<any,any>{

    render() {
        return (
            <div className="container-fluid" style={{padding:0}}>

            <div className='row app-header'>
                <nav className="navbar navbar-expand-lg nav">
                        <a className="navbar-brand logo" href="/">
                            <span>LetsFarm<span className='io'>.io</span></span>
                        </a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"/>
                        </button>

                    <div className="collapse navbar-collapse ml-auto" id="navbarSupportedContent">
                        <ul className="navbar-nav col-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href={Routes.diseases}>Platform</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">About us</a>
                        </li>
                            <li className="nav-item"><a className='btn curved-btn login' href={Routes.account}>Login</a></li>
                            <li className="nav-item"><a className='btn curved-btn sign_up' href={Routes.account}>Get Started</a></li>
                        </ul>

                    </div>
                    </nav>

                    <div className="row intro-section" >
                        <div className="intro col-md-6 col-sm-12">
                            <p className="title">Empowering Farmers</p>
                            <p className="subtitle">A farming platform for the farmers by the farmers. Join our pool of farmers as they discuss and share their findings for better farm yield</p>
                            <span className="call-to-action">
                                <a className='btn login'>Login</a>
                                <a className='btn sign_up'>Get Started</a>
                            </span>
                        </div>
                        <div className="intro-images col-md-6 no-padding">
                            <img src={homeImg} className='col-md-6 col-sm-12 no-padding' />
                            <img src={homeImg} className='col-md-6 col-sm-12 no-padding' />
                        </div>
                    </div>

            </div>
            <div className="row our-services">
                {/*<h3>Our Services</h3>*/}
                <div className="service-items row">
                    <div className="service-item col-sm-6 col-md-4">
                        <img src={qaIcon} className='service-img'/>
                        <h3 className="title">Q&A</h3>
                        <p className="service-description">Responsive code that makes your landing page look good on all devices (desktops, tablets, and phones).</p>
                    </div>
                    <div className="service-item col-sm-6 col-md-4">
                        <img src={databaseIcon} className='service-img'/>
                        <h3 className="title">Diseases Collection</h3>
                        <p className="service-description">Responsive code that makes your landing page look good on all devices (desktops, tablets, and phones).</p>
                    </div>
                    <div className="service-item col-sm-6 col-md-4">
                        <img src={projectIcon} className='service-img'/>
                        <h3 className="title">Project Profiling</h3>
                        <p className="service-description">Responsive code that makes your landing page look good on all devices (desktops, tablets, and phones).</p>
                    </div>
                    <div className="service-item col-sm-6 col-md-4">
                        <img src={financeIcon} className='service-img'/>
                        <h3 className="title">Finance monitoring</h3>
                        <p className="service-description">Responsive code that makes your landing page look good on all devices (desktops, tablets, and phones).</p>
                    </div>
                </div>
            </div>
                <footer className="row">
                    <div className="footer-top row">
                    <div className="info col-sm-6 col-md-4">
                        <p>Phone: +256-7-0644-0588</p>
                        <p>Email: letsfarm@gmail.com</p>

                        <div className="locations">
                            Bukoto
                            Kampala Uganda
                        </div>
                    </div>
                    <div className="quick-links col-sm-6 col-md-4">
                        <ul>
                            <li><a>How it works</a></li>
                            <li><a>Platform</a></li>
                            <li><a>FAQs</a></li>
                            <li><a>Blog</a></li>
                        </ul>
                    </div>
                    <div className="terms-conditions col-sm-6 col-md-4">
                        <ul>
                            <li><a>Privacy Policy</a></li>
                            <li><a>Payment & Refund policy</a></li>
                        </ul>
                    </div>
                    </div>
                    <div className="copyright-div">
                        Copyright &copy; 2019 LetsFarm Ltd.
                        <span>
                            <ul className="socials">
                                <li><a><i className="fab fa-facebook "/></a></li>
                                <li><a><i className="fab fa-linkedin "/></a></li>
                                <li><a><i className="fab fa-twitter "/></a></li>
                            </ul>
                        </span>
                    </div>
                </footer>
            </div>
        );
    }
}

export default LandingPage;
