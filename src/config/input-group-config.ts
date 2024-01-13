import {DynamicFormFieldsInterface, GroupTypes} from "../interfaces/DynamicFormInterface";

export type inputGroupType = {
    field : Omit<DynamicFormFieldsInterface, keyof DynamicFormFieldsInterface | 'type'>,
    inputType?: GroupTypes,
    value: any,
    required: boolean
};

export type inputGroupsType =  {
    [K in DynamicFormFieldsInterface['type']] : inputGroupType[];
};

const getTextConfig :inputGroupType[] = [
        {
            field: 'name',
            inputType: GroupTypes.text,
            value: '',
            required: true
        },
        {
            field: 'label',
            inputType: GroupTypes.text,
            value: '',
            required: true
        },
        {
            field: 'placeholder',
            inputType: GroupTypes.text,
            value: '',
            required: true
        },
        {
            field: 'minLength',
            inputType: GroupTypes.number,
            value: undefined,
            required: false
        },
        {
            field: 'maxLength',
            inputType: GroupTypes.number,
            value: undefined,
            required: false
        },
        {
            field: 'defaultValue',
            inputType: GroupTypes.text,
            value: '',
            required: false
        },
        {
            field: 'required',
            inputType: GroupTypes.checkbox,
            value: false,
            required: false
       },
    ]

const getSwitchConfig :inputGroupType[] = [
        {
            field: 'name',
            inputType: GroupTypes.text,
            value: '',
            required: true
        },
        {
            field: 'label',
            inputType: GroupTypes.text,
            value: '',
            required: true
        },
        {
            field: 'defaultValue',
            inputType: GroupTypes.checkbox,
            value: '',
            required: true
        },
]
const getNumberConfig: inputGroupType[] = [
    {
        field: 'name',
        inputType: GroupTypes.text,
        value: '',
        required: true
    },
    {
        field: 'label',
        inputType: GroupTypes.text,
        value: '',
        required: true
    },
    {
        field: 'placeholder',
        inputType: GroupTypes.text,
        value: '',
        required: true
    },
    {
        field: 'min',
        inputType: GroupTypes.number,
        value: undefined,
        required: true
    },
    {
        field: 'max',
        inputType: GroupTypes.number,
        value: undefined,
        required: true
    },
    {
        field: 'defaultValue',
        inputType: GroupTypes.text,
        value: '',
        required: false
    },
    {
        field: 'required',
        inputType: GroupTypes.checkbox,
        value: false,
        required: false
    },
]
const getEmailConfig: inputGroupType[] = [
    {
        field: 'name',
        inputType: GroupTypes.text,
        value: '',
        required: true
    },
    {
        field: 'label',
        inputType: GroupTypes.text,
        value: '',
        required: true
    },
    {
        field: 'placeholder',
        inputType: GroupTypes.text,
        value: '',
        required: true
    },
    {
        field: 'defaultValue',
        inputType: GroupTypes.email,
        value: '',
        required: false
    },
    {
        field: 'required',
        inputType: GroupTypes.checkbox,
        value: false,
        required: false
    },
]
const getFileConfig: inputGroupType[] = [
    {
        field: 'name',
        inputType: GroupTypes.text,
        value: '',
        required: true
    },
    {
        field: 'label',
        inputType: GroupTypes.text,
        value: '',
        required: true
    },
    {
        field: 'placeholder',
        inputType: GroupTypes.text,
        value: '',
        required: true
    },
    {
        field: 'defaultValue',
        inputType: GroupTypes.file,
        value: '',
        required: false
    },
    {
        field: 'required',
        inputType: GroupTypes.checkbox,
        value: false,
        required: false
    },
]
export const inputGroupConfig: inputGroupsType = {
    text: getTextConfig,
    radio: getSwitchConfig,
    password: getTextConfig,
    file: getFileConfig,
    number: getNumberConfig,
    range: getNumberConfig,
    email: getEmailConfig,
    checkbox: getSwitchConfig
}
export function getInputConfig(type: GroupTypes) {
    return inputGroupConfig[type];
}
