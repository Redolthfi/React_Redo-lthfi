import { useState } from "react";
import AllInput from "../Component/InputanLabel";
import SelectInput from "../Component/SelectInput";
import RadioInput from "../Component/InputRadio";
import InputArea from "../Component/InputArea";
import Button from "../Component/Button";
import Tabel from "../Component/Tabel";

const Forms = () => {
    const [errors, setErrors] = useState("");
    const [productName, setProductName] = useState("");
    const handleProductName = (e) => {
        const value = e.target.value;
        setProductName(value);
    
        if (value.length === 0) {
          setErrors("Product Name tidak boleh kosong");
        } else if (value.length > 10) {
          setErrors("Product must not exceed 25 characters.");
        } else {
          setErrors("");
        }
      };
    return (
      <>
        <form onChange={handleProductName}>
            <AllInput type="text" placeholder="First Name" name="productName" label="First Name" value={productName} onChange={handleProductName} maxLength={25} />
            <span style={{ color: "red" }}>{errors}</span>
            <SelectInput/>
            <AllInput type="file" placeholder="" name="firstName" label="Image of product" />
            <RadioInput/>
            <InputArea/>
            <AllInput type="number" placeholder="1$" name="firstName" label="Product price" />
            <Button children="Submit"/>
        </form>
        <Tabel/>
      </>


    )
}

export default Forms;
