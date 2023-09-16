import Input from "./input";
import Label from "./Label";

const InputForm = (props) => {
    const {type, placeholder, name, title} = props;
    return (
        <div className="mb-4">
            <Label htmlFor={name}>{title}</Label>
            <Input name={name} type={type} placeholder={placeholder}/>
        </div>
    )
}

export default InputForm;