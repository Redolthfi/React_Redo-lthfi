const TitleLayouts = (props) => {
    const {children, title} = props;
    return(
        <div className="flex justify-center mx-auto items-center" style={{width: 936, height: 299}}>
            <div className="w-full text-center ">
                <img className="mx-auto" src="https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo.svg" alt="" style={{width: 71.529, height: 57,}}/>
                <h1 className="font-bold text-3xl">{title}</h1>
                <p style={{color: '#212529'}}>Below is an example form built entirely with Bootstrap’s form controls. Each required form group has a validation state that can be triggered by attempting to submit the form without completing it.</p>
            </div>
        </div>
    )
}

export default TitleLayouts;