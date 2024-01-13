import React, {ChangeEvent, useCallback, useReducer} from "react";
import {GroupTypes} from "../../interfaces/DynamicFormInterface";
import {getInputConfig} from "../../config/input-group-config";
import {FieldInput} from "../field-input/FieldInput";

const reducer = (state: any, action: any) => {
    switch (action.type) {
        case 'SET_SELECTED_OPTION':
            return { ...state, selectedOption: action.payload };
        case 'SET_GROUP_INPUT':
            return { ...state, groupInput: action.payload };
        case 'SET_FORM_GROUP_VALUE':
            return { ...state, formGroupValue: { ...state.formGroupValue, [action.payload.field]: action.payload.value } };
        default:
            return state;
    }
};

export const InputGroupType = ({ handleForm }: any) => {
    const [state, dispatch] = useReducer(reducer, {
        selectedOption: '',
        groupInput: [],
        formGroupValue: {},
    });

    const { selectedOption, groupInput, formGroupValue } = state;

    const memoizedOnChange = useCallback((value: any, field: string) => {
        dispatch({ type: 'SET_FORM_GROUP_VALUE', payload: { field, value: value } });
        handleForm({ ...formGroupValue, [field]: value, type: selectedOption });
    },[formGroupValue, selectedOption, handleForm]);

    let typeOption = ["text", "number", "range", "radio", "email", "password", "file", "checkbox"];

    const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
        const selectedValue = event.target.value;
        const group = getInputConfig(selectedValue as GroupTypes);
        dispatch({ type: 'SET_SELECTED_OPTION', payload: selectedValue });
        dispatch({ type: 'SET_GROUP_INPUT', payload: group })
    };

    const handleInputChange = ($event: string, field: string) => {
        memoizedOnChange($event, field);
    };

    return (
        <>
            <div className="flex flex-row">
                <label htmlFor="dropdown">Select a type:</label>
                <select  id="dropdown" value={selectedOption} onChange={handleSelectChange}>
                    <option value="">Choose an option</option>
                    {typeOption.map((option, index) => {
                        return (
                            <option key={index} value={option}>{option}</option>
                        )
                    })}
                </select>
            </div>
            {groupInput?.length && groupInput.map((input: any, index: number) => {
                return (
                    <div className="flex flex-col gap-1" key={index}>
                        <FieldInput
                            type={input.inputType}
                            name={input.field}
                            required={input.required}
                            onChange={($event: string) => handleInputChange($event, input.field)}
                        />
                    </div>
                )
            })}
        </>
    );
};

