export enum GroupTypes {
    text = "text",
    number = "number",
    range = "range",
    radio = "radio",
    email = "email",
    password = "password",
    file = "file",
    checkbox = "checkbox"
}

export interface DynamicFormFieldsInterface {
    index: string;
    name: string;
    type: GroupTypes;
    label: string;
    placeholder?: string;
    defaultValue?: any;
    required: boolean;
    min?: number;
    max?: number;
    minLength?: number;
    maxLength?: number;
}
export interface DynamicFormInterface {
    data: DynamicFormFieldsInterface[];
}
