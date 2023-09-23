import AllInput from "../Component/InputanLabel";
import SelectInput from "../Component/SelectInput";
import RadioInput from "../Component/InputRadio";
import InputArea from "../Component/InputArea";
import Button from "../Component/Button";
const Forms = () => {
    return (
        <form>
            <AllInput type="text" placeholder="First Name" name="firstName" label="First Name"/>
            <SelectInput/>
            <AllInput type="file" placeholder="" name="firstName" label="Image of product"/>
            <RadioInput/>
            <InputArea/>
            <AllInput type="number" placeholder="1$" name="firstName" label="Product price"/>
            <Button children="Submit"/>
        </form>
    )
}

export default Forms;