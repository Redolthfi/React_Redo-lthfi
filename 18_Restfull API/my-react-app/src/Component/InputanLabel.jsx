import React from 'react';
import Input from "./Input";
import Label from "./Label";

const AllInput = (props) => {
    const { type, placeholder, name, label, maxLength,  onChange } = props;

    return (
        <div className="mb-4">
            <Label htmlFor={name}>{label}</Label>
            <Input
                name={name}
                type={type}
                placeholder={placeholder}
                maxLength={maxLength}
                onChange={onChange}
            />
        </div>
    )
}

export default AllInput;