const Input = (props) => {
    const { type, placeholder, name, label, classname} = props;
    return (
        <input type={type} name={name} placeholder={placeholder} label={label} className={`text-sm border border-gray-300 rounded w-full py-2 px-3 text-slate-700 placeholder: opacity-50 max-w-xs ${classname}`}></input> 
    )
}



export default Input;