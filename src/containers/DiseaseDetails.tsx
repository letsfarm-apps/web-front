import React, {Component} from 'react';
import LeftMenu from "../components/LeftMenu";
import {connect} from "react-redux";
import {fetchDiseaseDetails} from "../redux/actions/diseases";
let Loader = require('react-loaders').Loader;

class DiseaseDetails extends Component<any,any> {
    constructor(props:any){
        super(props);
    }

    async componentDidMount(){
       const  {
           fetchDiseaseDetails,
            match:{
               params:{
                   id
               }
            }
       } = this.props;

       await fetchDiseaseDetails(id);
    }

    render(){
        const {loading, fetchError, disease} = this.props;
        return (
            <>
                <LeftMenu/>
                <div className="main-content">
                    {loading ?
                        <div className="col-12" style={{display:'flex', marginTop:'10%', marginLeft:'35%'}}>
                            <Loader type="ball-spin-fade-loader" active/>
                        </div>
                        :
                        <div className="row ">
                            <div className="col-12 col-lg-11 col-xl-9">
                                {/*header starts*/}
                                <div className="header mt-md-5">

                                </div>
                                {/*header ends*/}
                                <div className="card">
                                    <div className="card-body">
                                        <div className="mb-3">
                                            <div className="row align-items-center">

                                                <div className="col ml-n2">


                                                </div>
                                                <div className="col-auto">
                                                    ...
                                                </div>
                                            </div>
                                        </div>
                                        <h4 className="card-title mb-1">
                                            {disease.title}
                                        </h4>

                                        <p className="card-text small text-muted">
                                            <time dateTime="2018-05-24">{new Date(disease.createdAt).toDateString()}</time>
                                        </p>
                                        <p className="card-text small text-muted">
                                            Description
                                        </p>
                                        <p className="mb-3" dangerouslySetInnerHTML={{__html:disease.description}} />
                                        <p className="card-text small text-muted">
                                            Signs
                                        </p>
                                        <p className="mb-3" dangerouslySetInnerHTML={{__html:disease.signs}} />
                                        <p className="card-text small text-muted">
                                            Symptoms
                                        </p>
                                        <p className="mb-3" dangerouslySetInnerHTML={{__html:disease.symptoms}} />
                                        <p className="card-text small text-muted">
                                            Treatment
                                        </p>
                                        <p className="mb-3" dangerouslySetInnerHTML={{__html:disease.treatment}} />

                                    </div>
                                </div>
                            </div>
                        </div>
                    }
                </div>
            </>

        )
    }
}

const mapStateToProps = (state:any) =>({
    loading: state.diseases.diseaseFetching,
    fetchError: state.diseases.diseaseFetchError,
    disease: state.diseases.disease,
});

export default  connect(mapStateToProps, {fetchDiseaseDetails})(DiseaseDetails);
