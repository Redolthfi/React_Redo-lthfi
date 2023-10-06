const TitleLayout = (props) => {
    const {children, title} = props;
    return(
        <div className="flex justify-center mx-auto items-center" style={{width: 936, height: 299}}>
            <div className="w-full text-center ">
                <img className="mx-auto" src="https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo.svg" alt="" style={{width: 71.529, height: 57,}}/>
                <h1 className="font-bold text-3xl mt-6 mb-2">{title}</h1>
                <p style={{color: '#212529'}}>{children}.</p>
            </div>
        </div>
    )
}

export default TitleLayout;