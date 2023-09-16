import FormCreate from "../Fragments/FormCreate";
const AuthLayouts = (props) => {
    const {Children, title} = props;
    return (
        <div className="justify-center mx-auto p-4" style={{width: 656}}>
            <div className="w-full ">
                <h1 className="text-2xl font-bold mb-1" style={{color: '#212529'}}>{title}</h1>  
                {Children}
                <FormCreate />
            </div>
        </div>
        
    )
}

export default AuthLayouts;