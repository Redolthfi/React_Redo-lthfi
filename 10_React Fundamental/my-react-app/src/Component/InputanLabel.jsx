import Input from "./input";
import Label from "./Label";
const AllInput = (props) => {
    const { type, placeholder, name, label, } = props

    return (
        <div className="mb-4">
            <Label htmlFor={name}>{label}</Label>
            <Input name={name} type={type} placeholder={placeholder}/>
        </div>
    )
}

export default AllInput;