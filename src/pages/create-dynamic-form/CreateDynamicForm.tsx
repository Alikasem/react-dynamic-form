import { FormEvent, useReducer } from "react";
import { DynamicFormFieldsInterface, GroupTypes } from "../../interfaces/DynamicFormInterface";
import { InputGroupType } from "../../components/input-group-type/InputGroupType";
import './CreateDynamicForm.css';
import { useDispatch } from "react-redux";
import { createDynamicForm } from "../../store/dynamicFormSlice";
import { useNavigate } from "react-router";

const formReducer = (state: any, action: any) => {
    switch (action.type) {
        case 'ADD_DYNAMIC_FIELD':
            return [...state, action.payload];
        case 'HANDLE_DYNAMIC_VALUES':
            return state.map((field: DynamicFormFieldsInterface) =>
                (field.index === action.payload.index ? { ...field, ...action.payload.data } : field));
        case 'DELETE_DYNAMIC_FIELD':
            state = state.filter((input: any) => input.index !== action.payload.index)
            return state;
        default:
            return state;
    }
};

export const CreateDynamicForm = () => {
    const [inputs, dispatch] = useReducer(formReducer, []);
    const navigate = useNavigate();
    const dispatchForm = useDispatch();

    const addInputGroup = () => {
        const initialValue: DynamicFormFieldsInterface = {
            type: GroupTypes.text,
            name: '',
            max: undefined,
            min: undefined,
            minLength: undefined,
            maxLength: undefined,
            label: '',
            required: false,
            placeholder: '',
            index: `${Math.floor(Math.random() * 10000)}`
        };
        dispatch({ type: 'ADD_DYNAMIC_FIELD', payload: initialValue });
    }

    const handleSubmit = ($event: FormEvent<HTMLFormElement>) => {
        $event.preventDefault();
        dispatchForm(createDynamicForm(inputs));
        navigate('/dynamicFormList');
    }

    return (
        <div className="flex flex-col items-center p-8">
            <button
                className="bg-blue-500 text-white py-2 px-4 border rounded cursor-pointer"
                type="button"
                onClick={addInputGroup}
            >
                Add Dynamic Field
            </button>
            <form className="mt-4" onSubmit={handleSubmit}>
                {inputs.length ? inputs.map((input: DynamicFormFieldsInterface) => (
                    <div className="flex flex-row gap-4 items-center mb-4" key={input.index}>
                        <InputGroupType
                            handleForm={($event: any) =>
                                dispatch({ type: 'HANDLE_DYNAMIC_VALUES', payload: { index: input.index, data: $event } })}
                        />
                        <button
                            className="bg-red-500 text-white py-2 px-4 border rounded cursor-pointer"
                            onClick={() => dispatch({ type: 'DELETE_DYNAMIC_FIELD', payload: { index: input.index } })}
                        >
                            Delete
                        </button>
                    </div>
                )) : ''}
                <button
                    className="bg-blue-500 text-white py-2 px-4 border rounded cursor-pointer"
                    hidden={!inputs?.length}
                    type="submit"
                >
                    Submit Dynamic Form
                </button>
            </form>
        </div>
    )
}
