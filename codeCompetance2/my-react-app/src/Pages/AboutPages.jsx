const AboutPages = (props) => {
    const {tittle, description} = props
    return (
        <div className="h-screen" style={{backgroundColor: "#E8FFCE"}}>
            <div className="flex flex-col items-center justify-center w-full max-w-md mx-auto h-auto mt">
            <h1 className="font-bold text-4xl shadow-lg my-8">{tittle}</h1>
            <img src="https://images.unsplash.com/photo-1592547097938-7942b22df3db?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8b25lJTIwcGllY2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" alt="" />
            <p className="mt-6">{description}</p>
            </div>
        </div>
    )
}

export default AboutPages;