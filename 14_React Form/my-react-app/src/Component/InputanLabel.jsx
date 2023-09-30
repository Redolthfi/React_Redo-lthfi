import React from 'react';
import Input from "./Input";
import Label from "./Label";

const AllInput = (props) => {
    const { type, placeholder, name, label, maxLength,  onChange, accept } = props;

    return (
        <div className="mb-4">
            <Label htmlFor={name}>{label}</Label>
            <Input
                name={name}
                type={type}
                placeholder={placeholder}
                maxLength={maxLength}
                onChange={onChange}
                accept={accept}
            />
        </div>
    )
}

export default AllInput;