import Forms from "../Fragment/Forms";
const FormLayout = (props) => {
    const {children, title} = props
    return (
        <>                                                                                                      <div className="justify-center mx-auto p-4 " style={{width: 656}}> 
            <div className="w-full">
            <h1 className="text-2xl font-bold mb-1" style={{color: '#212529'}}>{title}</h1>  
                {children}
                <Forms></Forms>
            </div>
        </div>                                            
        </>
    )
}

export default FormLayout;