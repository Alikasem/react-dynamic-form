import { FormEvent, useEffect, useState } from "react";
import {useNavigate} from "react-router";
import { DynamicFormFieldsInterface } from "../../interfaces/DynamicFormInterface";
import {useDispatch, useSelector} from "react-redux";
import {createRule} from "../../store/ruleCreatedData";
import { selectDynamicForm } from "../../store/dynamicFormSlice";

export const CreateRule = () => {
    const dynamicFormSelector = useSelector(selectDynamicForm);
    const [dynamicForm, setDynamicForm] = useState<DynamicFormFieldsInterface[]>([]);
    const [inputValues, setInputValues] = useState<Record<string, string>>({});
    const dispatchForm = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        if (dynamicFormSelector?.length) {
            setDynamicForm(dynamicFormSelector);
        }
    }, [dynamicFormSelector]);

    const handleInputChange = (name: string, value: string) => {
        setInputValues((prevValues) => ({ ...prevValues, [name]: value }));
    };

    const submitRule = ($event: FormEvent<HTMLFormElement>) => {
        $event.preventDefault();
        console.log("Submitted Values:", inputValues);
        dispatchForm(createRule(inputValues));
        navigate('/ruleList');

    };

    return (
        <div hidden={!dynamicForm?.length} className="max-w-md mx-auto mt-8 p-6 bg-white shadow-md rounded-md">
            <form onSubmit={submitRule}>
                {dynamicForm.map((field) => (
                    <div key={field.index} className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">{field.label}</label>
                        <input
                            type={field.type}
                            name={field.name}
                            placeholder={field.placeholder}
                            min={field.min}
                            max={field.max}
                            minLength={field.minLength}
                            maxLength={field.maxLength}
                            value={inputValues[field.name] || ""}
                            onChange={(e) => handleInputChange(field.name, e.target.value)}
                            required={field.required}
                            className="mt-1 p-2 border rounded-md w-full focus:outline-none focus:border-blue-500"
                        />
                    </div>
                ))}
                <button
                    type="submit"
                    className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-300"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};
