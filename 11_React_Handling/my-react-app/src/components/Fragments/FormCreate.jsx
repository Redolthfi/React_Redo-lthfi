import InputForm from "../Elements/Input";
import SelectInput from "../Elements/Input/select";
import FileInput from "../Elements/Input/InputFile";
import RadioInput from "../Elements/Input/InputRadio";
import InputArea from "../Elements/Input/InputArea";
import Button from "../Elements/Button/Button";
const FormCreate = () => {
    return(
        <form action="">
            <InputForm type="text" placeholder="First Name" name="firstName" title="First Name"></InputForm>
            <SelectInput></SelectInput>
            <FileInput></FileInput>
            <RadioInput></RadioInput>
            <InputArea></InputArea>
            <InputForm  type="number" placeholder="$1" name="firstName" title="Product Price" style={{maxWidth: "320px"}}></InputForm>
            <Button></Button>
        </form>     
        )
}

export default FormCreate;