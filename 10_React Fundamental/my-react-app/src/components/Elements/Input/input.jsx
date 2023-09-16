const Input = (props) => {
    const { type, placeholder, name, title } = props;
    return (
        <input type={type} name={name} placeholder={placeholder} title={title} className="text-sm border rounded w-full py-2 px-3 text-slate-700 placeholder: opacity-50 max-w-xs"></input> 
    )
}



export default Input;