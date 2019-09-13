import React from "react";

const Form = ()=> {
    return (
        <>
        {/*form starts*/}
    <form className="mb-4">

        <div className="row">
            <div className="col-12 col-md-6">

                <div className="form-group">

                    <label>
                        First name
                    </label>

                    <input type="text" className="form-control"/>

                </div>

            </div>
            <div className="col-12 col-md-6">

                <div className="form-group">

                    <label>
                        Last name
                    </label>

                    <input type="text" className="form-control"/>

                </div>

            </div>
            <div className="col-12">

                <div className="form-group">

                    <label className="mb-1">
                        Email address
                    </label>

                    <small className="form-text text-muted">
                        This contact will be shown to others publicly, so choose it carefully.
                    </small>

                    <input type="email" className="form-control"/>

                </div>

            </div>
            <div className="col-12 col-md-6">

                <div className="form-group">

                    <label>
                        Phone
                    </label>

                    <input type="text" className="form-control mb-3" placeholder="(___)___-____"
                           data-mask="(000) 000-0000" autoComplete="off" maxLength={14}/>

                </div>

            </div>
            <div className="col-12 col-md-6">

                <div className="form-group">

                    <label>
                        Birthday
                    </label>

                    <input type="text" className="form-control flatpickr-input"
                           data-toggle="flatpickr" readOnly/>

                </div>

            </div>
        </div>

        <hr className="mt-4 mb-5"/>

        <div className="row">
            <div className="col-12 col-md-6">

                <div className="form-group">

                    <label className="mb-1">
                        Public profile
                    </label>

                    <small className="form-text text-muted">
                        Making your profile public means that anyone on the Dashkit network will
                        be able to find you.
                    </small>

                    <div className="row">
                        <div className="col-auto">

                            <div className="custom-control custom-switch">
                                <input type="checkbox" className="custom-control-input"
                                       id="switchOne"/>
                                <label className="custom-control-label"
                                       htmlFor="switchOne"/>
                            </div>

                        </div>
                        <div className="col ml-n2">

                            <small className="text-muted">
                                You're currently invisible
                            </small>

                        </div>
                    </div>
                </div>

            </div>
            <div className="col-12 col-md-6">

                <div className="form-group">

                    <label className="mb-1">
                        Allow for additional Bookings
                    </label>

                    <small className="form-text text-muted">
                        If you are available for hire outside of the current situation, you can
                        encourage others to hire you.
                    </small>

                    <div className="row">
                        <div className="col-auto">

                            <div className="custom-control custom-switch">
                                <input type="checkbox" className="custom-control-input"
                                       id="switchTwo"/>
                                <label className="custom-control-label"
                                       htmlFor="switchTwo"/>
                            </div>

                        </div>
                        <div className="col ml-n2">

                            <small className="text-muted">
                                You're currently available
                            </small>

                        </div>
                    </div>
                </div>

            </div>
        </div>

        <hr className="mt-4 mb-5"/>

        <div className="row">
            <div className="col-12 col-md-6 order-md-2">

                <div className="card bg-light border ml-md-4">
                    <div className="card-body">

                        <p className="mb-2">
                            Password requirements
                        </p>

                        <p className="small text-muted mb-2">
                            To create a new password, you have to meet all of the following
                            requirements:
                        </p>

                        <ul className="small text-muted pl-4 mb-0">
                            <li>
                                Minimum 8 character
                            </li>
                            <li>
                                At least one special character
                            </li>
                            <li>
                                At least one number
                            </li>
                            <li>
                                Can’t be the same as a previous password
                            </li>
                        </ul>

                    </div>
                </div>

            </div>
            <div className="col-12 col-md-6">

                <div className="form-group">

                    <label>
                        Password
                    </label>

                    <input type="password" className="form-control"/>

                </div>

                <div className="form-group">

                    <label>
                        New password
                    </label>

                    <input type="password" className="form-control"/>

                </div>

                <div className="form-group">

                    <label>
                        Confirm new password
                    </label>

                    <input type="password" className="form-control"/>

                </div>

                <button type="submit" className="btn btn-primary lift">
                    Update password
                </button>

            </div>
        </div>

    </form>
    {/*form end*/
    }
    </>
)
};

