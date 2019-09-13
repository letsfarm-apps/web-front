import React from 'react';

const LeftMenu=({}) =>{
    return(
        <nav className="navbar navbar-vertical fixed-left navbar-expand-md navbar-light" id="sidebar">
            <div className="container-fluid">

                 {/*Toggler */}
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#sidebarCollapse"
                        aria-controls="sidebarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>

                 {/*Brand */}
                <a className="navbar-brand" href="index.html">
                    <img src={require("../assets/img/logo.svg")} className="navbar-brand-img
              mx-auto" alt="..." />
                </a>

                 {/*User (xs) */}
                <div className="navbar-user d-md-none">

                     {/*Dropdown */}
                    <div className="dropdown">

                        {/*Toggle */}
                        <a href="#" id="sidebarIcon" className="dropdown-toggle" role="button" data-toggle="dropdown"
                           aria-haspopup="true" aria-expanded="false">
                            <div className="avatar avatar-sm avatar-online">
                                <img src={require("../assets/img/avatars/profiles/avatar-1.jpg")}
                                     className="avatar-img rounded-circle" alt="..." />
                            </div>
                        </a>

                       {/*Menu */}
                        <div className="dropdown-menu dropdown-menu-right" aria-labelledby="sidebarIcon">
                            <a href="profile-posts.html" className="dropdown-item">Profile</a>
                            <hr className="dropdown-divider" />
                                <a href="sign-in.html" className="dropdown-item">Logout</a>
                        </div>

                    </div>

                </div>

                 {/*Collapse */}

                <div className="collapse navbar-collapse" id="sidebarCollapse">

                    {/*Form */}
                    <form className="mt-4 mb-3 d-md-none">
                        <div className="input-group input-group-rounded input-group-merge">
                            <input type="search" className="form-control form-control-rounded form-control-prepended"
                                   placeholder="Search" aria-label="Search" />
                                <div className="input-group-prepend">
                                    <div className="input-group-text">
                                        <span className="fe fe-search" />
                                    </div>
                                </div>
                        </div>
                    </form>

                  {/*Navigation */}
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="#sidebarDashboards" data-toggle="collapse" role="button"
                               aria-expanded="false" aria-controls="sidebarDashboards">
                                <i className="fe fe-home"/> Diseases
                            </a>
                            <div className="collapse " id="sidebarDashboards">
                                <ul className="nav nav-sm flex-column">
                                    <li className="nav-item">
                                        <a href="index.html" className="nav-link ">
                                            Default
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="nav-item d-md-none">
                            <a className="nav-link" href="#sidebarModalActivity" data-toggle="modal">
                                <span className="fe fe-bell"/> Notifications
                            </a>
                        </li>
                    </ul>

                     {/*Divider */}
                    <hr className="navbar-divider my-3" />

                        {/*Heading */}
                        <h6 className="navbar-heading">
                            Documentation
                        </h6>

                         {/*Navigation */}
                        <ul className="navbar-nav mb-md-4">
                            <li className="nav-item">
                                <a className="nav-link " href="getting-started.html">
                                    <i className="fe fe-clipboard"/> Getting started
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#sidebarComponents" data-toggle="collapse" role="button"
                                   aria-expanded="false" aria-controls="sidebarComponents">
                                    <i className="fe fe-book-open"/> Components
                                </a>
                                <div className="collapse " id="sidebarComponents">
                                    <ul className="nav nav-sm flex-column">
                                        <li className="nav-item">
                                            <a href="components.html#alerts" className="nav-link">
                                                Alerts
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="components.html#autosizePlugin" className="nav-link">
                                                Autosize
                                            </a>
                                        </li>

                                    </ul>
                                </div>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link " href="">
                                    <i className="fe fe-git-branch"/> Version <span
                                    className="badge badge-primary ml-auto">v1.4.2</span>
                                </a>
                            </li>
                        </ul>

                         {/*Push content down */}
                        <div className="mt-auto" />

                         {/*Customize */}
                        <a href="#modalDemo" className="btn btn-block btn-primary mb-4" data-toggle="modal">
                            <i className="fe fe-sliders mr-2"/> Customize
                        </a>


                        {/*User (md) */}
                        <div className="navbar-user d-none d-md-flex" id="sidebarUser">
                            {/*Icon -->*/}
                            <a href="#sidebarModalActivity" className="navbar-user-link" data-toggle="modal">
                              <span className="icon">
                                <i className="fe fe-bell"/>
                              </span>
                            </a>

                             {/*Dropup */}
                            <div className="dropup">

                                 {/*Toggle */}
                                <a href="#" id="sidebarIconCopy" className="dropdown-toggle" role="button"
                                   data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <div className="avatar avatar-sm avatar-online">
                                        <img src="assets/img/avatars/profiles/avatar-1.jpg"
                                             className="avatar-img rounded-circle" alt="..." />
                                    </div>
                                </a>

                                {/*Menu */}
                                <div className="dropdown-menu" aria-labelledby="sidebarIconCopy">
                                    <a href="profile-posts.html" className="dropdown-item">Profile</a>
                                    <a href="settings.html" className="dropdown-item">Settings</a>
                                    <hr className="dropdown-divider" />
                                    <a href="sign-in.html" className="dropdown-item">Logout</a>
                                </div>

                            </div>

                            {/*Icon */}
                            <a href="#sidebarModalSearch" className="navbar-user-link" data-toggle="modal">
                  <span className="icon">
                    <i className="fe fe-search" />
                  </span>
                            </a>

                        </div>
                </div>

            </div>
        </nav>
    )
};

export default LeftMenu;
