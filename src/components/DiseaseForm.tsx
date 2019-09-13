import  React from 'react';
import '../styles/stepper.scss';
// @ts-ignore
import CKEditor from 'ckeditor4-react';
let Loader = require('react-loaders').Loader;

interface FieldsTypes {
    nextStep?: any
    category?:number
    title?:string,
    description?:string,
    signs?:string
    symptoms?:string
    treatment?:string
    handleChange: any
    onEditorChange?: any
    handleSubmit? :any
    loading?: boolean
}

const TitleDescriptionFields:React.FunctionComponent<FieldsTypes> = (
    {nextStep,
        title,
        description,
        handleChange,
        onEditorChange
    }
    )=>{
    return(
        <>
            <div className="col-12">
                <div className="form-group">
                    <label className="mb-1">
                        Disease Title
                    </label>
                    <small className="form-text text-muted">
                        It is meant to be a simple title for the disease at hand eg. Foot & mouth
                    </small>
                    <input type="text" name="title" value={title} onChange={handleChange} className="form-control" />
                </div>
            </div>
            <div className="col-12">
                <div className="form-group">
                    <label>
                        Description
                    </label>
                    <small className="form-text text-muted">
                        Here you could briefly describe the disease, where it originates, how its spread etc
                    </small>
                    <CKEditor size={20} type="classic" data={description} onChange={(e:any)=>onEditorChange(e, 'description')} />
                </div>
                <button type="button" className="btn btn-primary lift" onClick={nextStep}>
                    Next
                </button>
            </div>
            </>
    )
};

const SignsField:React.FunctionComponent<FieldsTypes> =({nextStep, signs, onEditorChange})=>{
    return(
        <div className="col-12">
            <div className="form-group">
                <label>
                    Signs
                </label>
                <small className="form-text text-muted">
                    This identifies a given disease, keep it simple and use commonly used name.
                </small>
                <CKEditor size={20} activeClass="editor" name={'signs'} content={signs} onChange={(e:any)=>onEditorChange(e, 'signs')} />
            </div>
            <button type="button" className="btn btn-primary lift" onClick={nextStep}>
                Next
            </button>
        </div>
    )
};

const SymptomsField:React.FunctionComponent<FieldsTypes> =({nextStep, symptoms, onEditorChange})=>{
    return (
        <div className="col-12">
            <div className="form-group">
                <label>
                    Symptoms
                </label>
                <small className="form-text text-muted">
                    What symptoms do animals or birds have when they are suffering from this disease?
                </small>
                <CKEditor size={20} name={"symptoms"} activeClass="editor" content={symptoms} onChange={(e:any)=>onEditorChange(e, 'symptoms')} />
            </div>
            <button type="button" className="btn btn-primary lift" onClick={nextStep}>
                    Next
            </button>
        </div>
    )
};

const TreatmentField:React.FunctionComponent<FieldsTypes> = ({treatment, handleSubmit, onEditorChange, loading})=>{
    return (
        <>
            {loading ?
                <div className="col-12" style={{display:'flex', marginTop:'10%', marginLeft:'35%'}}>
                    <Loader type="ball-spin-fade-loader" active/>
                </div>
                :
                <>
                <div className="col-12">
                    <div className="form-group">
                        <label>
                            Treatment
                        </label>
                        <small className="form-text text-muted">
                            Describe the treatment for this particular disease
                        </small>
                        <CKEditor size={20} activeClass="editor" name={'treatment'} content={treatment}
                                  onChange={(e: any) => onEditorChange(e, 'treatment')}/>
                    </div>
                </div>
                < div className="col-12 col-md-6">
                <button type="submit" className="btn btn-primary lift" onClick={handleSubmit}>
                Save Disease
                </button>
                </div>
                </>
            }
        </>
    )
};

interface FormTypes {
    changeStep?: any
    step: number
    nextStep: any
    handleChange: any
    handleSubmit: any
    onEditorChange: any
    loading: boolean
    //state
    category:number
    title:string
    description:string
    signs:string
    symptoms:string
    treatment: string
}



const DiseaseForm:React.FunctionComponent<FormTypes> =(
    {
        changeStep,
        step,
        nextStep,
        category,
        title,
        description,
        signs,
        symptoms,
        treatment,
        handleChange,
        onEditorChange,
        handleSubmit,
        loading
    }
    )=>{

    const renderFields=()=>{
        switch (step) {
            case 1:
                return <TitleDescriptionFields
                    nextStep={nextStep}
                    description={description}
                    title={title}
                    onEditorChange={onEditorChange}
                    handleChange={handleChange} />;
            case 2:
                return <SignsField
                            nextStep={nextStep}
                            signs={signs}
                            onEditorChange={onEditorChange}
                            handleChange={handleChange}/>;
            case 3:
                return <SymptomsField
                            nextStep={nextStep}
                            symptoms={symptoms}
                            onEditorChange={onEditorChange}
                            handleChange={handleChange}
                />;
            case 4:
                return <TreatmentField
                    treatment={treatment}
                    loading={loading}
                    onEditorChange={onEditorChange}
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
                />;
        }
    };

    return (
        <>
        <div className="stepper">
            <ul className="nav stepper-nav-tabs">
                <li role="presentation" className={step===1?`active`:'disabled'}>
                    <a className="persistant-disabled" onClick={()=>changeStep(1)} title="Step 1">
                        <span className="round-tab">1</span>
                    </a>
                </li>
                <li role="presentation" className={step===2?`active`:'disabled'}>
                    <a className="persistant-disabled" onClick={()=>changeStep(2)} title="Step 2">
                        <span className="round-tab">2</span>
                    </a>
                </li>
                <li role="presentation" className={step===3?`active`:'disabled'}>
                    <a className="persistant-disabled" onClick={()=>changeStep(3)} title="Step 3">
                        <span className="round-tab">3</span>
                    </a>
                </li>
                <li role="presentation" className={step===4?`active`:'disabled'}>
                    <a className="persistant-disabled" onClick={()=>changeStep(4)} title="Complete">
                        <span className="round-tab">4</span>
                    </a>
                </li>

            </ul>
        </div>
            {/*form starts*/}
            <form className="mb-4 disease-form" >
                <div className="row">
                    {
                        renderFields()
                    }
                </div>
            </form>
            {/*form end*/}
       </>

);
};


export default DiseaseForm;
