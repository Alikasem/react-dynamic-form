import { configureStore } from '@reduxjs/toolkit';
import DynamicFormSlice from "./dynamicFormSlice";
import RuleSlice from "./ruleCreatedData"


export default configureStore({
    reducer: {
        dynamicForm: DynamicFormSlice,
        rule: RuleSlice
    }
});
