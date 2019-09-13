import React, { useState }from 'react';
let Loader = require('react-loaders').Loader;

const DeleteModal:React.FunctionComponent<any> =({
    disease,
    deleting,
    deleteDisease
})=>{
    const [show, toggleModal] = useState(false);

    return (
        <>
        <span className="fe fe-trash-2 mr-4" onClick={()=>toggleModal(true)}/>
        <div className="modal fade show" style={{display: `${show? 'block': 'none'}`}}>
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                    <div className="modal-card card" data-toggle="lists"
                         data-options="{&quot;valueNames&quot;: [&quot;name&quot;]}">
                        <div className="card-header">
                            <div className="row align-items-center">
                                <div className="col">

                                    <h4 className="card-header-title" id="exampleModalCenterTitle">
                                        Confirm Delete
                                    </h4>

                                </div>
                                <div className="col-auto">

                                    <button type="button" className="close" onClick={()=>toggleModal(false)}>
                                        <span aria-hidden="true">×</span>
                                    </button>

                                </div>
                            </div>
                        </div>

                        <div className="card-body">
                            {deleting?<>
                                    <div className="col-12" style={{ marginTop:'3%', marginBottom:'3%', marginLeft:'35%'}}>
                                        <Loader type="ball-spin-fade-loader" active/>
                                    </div>
                                </>
                                :
                                <>Do you really want to delete <span className="error">{disease.title} </span>?</>
                            }

                        </div>
                        <div className="card-footer">
                            <button className="btn btn-sm btn-danger" onClick={()=>deleteDisease(disease.id)}>Delete</button>
                            <button className="btn btn-sm btn-default" onClick={()=>toggleModal(false)}>Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
};

export default DeleteModal;
