import React, {Component} from 'react';
import LeftMenu from "../components/LeftMenu";
import DiseaseForm from "../components/DiseaseForm";

import {connect} from "react-redux";
import {fetchDiseases, postDisease} from "../redux/actions/diseases";
import {toast} from "react-toastify";
import DiseasesList from "../components/DiseasesList";

class Diseases extends Component<any,any> {
    state={
        section:1,
        content:'',
        step: 1,
        category:1,
        title:'',
        description: '',
        signs: '',
        symptoms:'',
        treatment:''
    };

    changeStep = (step:number) =>{
        this.setState({step});
    };

    changeSection=(section: number)=>{
        this.setState({section});
    };

    onEditorChange=(evt:any, name:string)=> {
        this.setState( {
            [name]: evt.editor.getData()
        } );
    };

    async componentDidMount(){
        const {fetchDiseases} = this.props;
        await fetchDiseases();
    }

    handleChange =(e:React.ChangeEvent<HTMLInputElement>)=>{
        const {name, value} = e.target;
        this.setState({[name]:value});
    };

    handleSubmit =async (e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        const {
            category,
            description,
            signs,
            symptoms,
            title,
            treatment } = this.state;

        const data={
            category,
            description,
            signs,
            symptoms,
            title,
            treatment
        };
        const {postDisease} = this.props;
        await postDisease(data);
        const {postError, hasPosted} = this.props;
        if(postError){
            toast.error(postError.message? postError.message:'something wrong happened', {
                position: toast.POSITION.TOP_CENTER
            });
        }else if(hasPosted){
            toast.success('Disease posted successfully', {
                position: toast.POSITION.TOP_CENTER
            });
        }
    };

    nextStep = ()=>{
        let step= this.state.step+1 % 5;
        this.setState({step});
    };

    render(){
        const {
            section,
            step,
            category,
            title,
            description,
            signs,
            symptoms,
            treatment
        }= this.state;
        const {isPosting, isFetching, diseases} = this.props;
        return (
            <>
            <LeftMenu/>
            <div className="main-content">
                <div className="row ">
                    <div className="col-12 col-lg-11 col-xl-9">

                        {/*header starts*/}
                        <div className="header mt-md-5">
                            <div className="header-body">
                                <div className="row align-items-center">
                                    <div className="col">
                                        <h6 className="header-pretitle">
                                            Animals
                                        </h6>
                                        <h1 className="header-title">
                                            Diseases
                                        </h1>

                                    </div>
                                </div>

                                <div className="row align-items-center">
                                    <div className="col">

                                        <ul className="nav nav-tabs nav-overflow header-tabs">
                                            <li className="nav-item">
                                                <a onClick={()=>this.changeSection(1)}  className={`nav-link ${section===1 && 'active'}`}>
                                                    All Diseases
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a onClick={()=>this.changeSection(2)} className={`nav-link ${section===2 && 'active'}`} >
                                                    Post Disease
                                                </a>
                                            </li>

                                        </ul>

                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*header ends*/}
                        {section===1?
                            <DiseasesList
                                loading={isFetching}
                                diseases={diseases}
                            />
                                :
                            <DiseaseForm
                                changeStep={this.changeStep}
                                step={step}
                                nextStep={this.nextStep}
                                category={category}
                                title={title}
                                description={description}
                                signs={signs}
                                symptoms={symptoms}
                                treatment={treatment}
                                handleChange={this.handleChange}
                                onEditorChange={this.onEditorChange}
                                handleSubmit={this.handleSubmit}
                                loading={isPosting}
                            />
                        }

                    </div>
                </div>
            </div>
            </>
        )
    }
}

const mapStateToProps = (state:any) =>({
    isPosting: state.diseases.isPosting,
    hasPosted: state.diseases.hasPosted,
    postError: state.diseases.postError,
    isFetching: state.diseases.isFetching,
    fetchError: state.diseases.fetchError,
    diseases: state.diseases.diseases
});

export default connect(mapStateToProps, {postDisease, fetchDiseases})(Diseases);
