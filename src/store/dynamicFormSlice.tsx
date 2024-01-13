import {createSlice} from '@reduxjs/toolkit';
import {DynamicFormFieldsInterface} from "../interfaces/DynamicFormInterface";

const DynamicFormSlice = createSlice({
    name: 'dynamicForm',
    initialState: [] as DynamicFormFieldsInterface[],
    reducers: {
        createDynamicForm: (state, action) => {
            return [...action.payload]
        }
    }
});

export const {createDynamicForm} = DynamicFormSlice.actions;
export const selectDynamicForm = (state: any) => state.dynamicForm;
export default DynamicFormSlice.reducer;
