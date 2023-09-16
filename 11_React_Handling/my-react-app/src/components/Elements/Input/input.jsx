const Input = (props) => {
    const { type, placeholder, name, title } = props;

    let pop = true
    function handleChange(e) {
        if(e.target.value.length > 25){
            e.target.value = ''
            alert('Last Name must not exceed 25 characters.')
        }
    }

    return (
        <input type={type} name={name} placeholder={placeholder} title={title} className="text-sm border rounded w-full py-2 px-3 text-slate-700 placeholder: opacity-50 max-w-xs" onChange={handleChange}></input>
    )
}



export default Input;