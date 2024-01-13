import {createSlice} from '@reduxjs/toolkit';

const RuleSlice = createSlice({
    name: 'ruleData',
    initialState: [] as any,
    reducers: {
        createRule: (state, action) => {
            return [...state, action.payload]
        }
    }
});

export const {createRule} = RuleSlice.actions;
export const selectRule = (state: any) => state.rule;
export default RuleSlice.reducer;
