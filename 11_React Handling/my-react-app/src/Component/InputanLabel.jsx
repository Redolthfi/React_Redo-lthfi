import React from 'react';
import Input from "./Input";
import Label from "./Label";

const AllInput = (props) => {
    const { type, placeholder, name, label, maxLength } = props;

    return (
        <div className="mb-4">
            <Label htmlFor={name}>{label}</Label>
            <Input
                name={name}
                type={type}
                placeholder={placeholder}
                maxLength={maxLength}
            />
        </div>
    )
}

export default AllInput;