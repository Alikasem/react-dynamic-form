import React, { ChangeEvent, useState, useCallback } from "react";

export const FieldInput = ({ type, name, required, onChange }: any) => {
    const [inputValue, setInputValue] = useState<any>();

    const memoizedOnChange = useCallback(
        (value: string | boolean | number) => {
            setInputValue(value);
            onChange(value);
        },
        [onChange]
    );

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const checked = event.target.checked ? event.target.checked : event.target.value
        memoizedOnChange(checked);
    };

    return (
        <>
            <label className="block text-sm font-medium text-gray-600">{name}</label>
            <input
                className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                type={type}
                name={name}
                value={inputValue}
                onChange={handleInputChange}
                required={required}
            />
        </>
    );
};
