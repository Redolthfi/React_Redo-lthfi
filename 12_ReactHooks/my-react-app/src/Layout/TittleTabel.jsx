const TittleTabel = (props) => {
    const {tittle} = props
    return (
        <div className="w-full justify-center flex font-bold text-3xl" style={{height: 60}}>
            {tittle}
        </div>
    )
}

export default TittleTabel;