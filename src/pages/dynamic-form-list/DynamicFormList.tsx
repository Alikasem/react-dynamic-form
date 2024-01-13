import {Link} from "react-router-dom";
import {DynamicFormFields} from "../../components/dynamic-form-fields/DynamicFormFields";
import './DynamicFormList.css';
import {useSelector} from "react-redux";
import {selectDynamicForm} from "../../store/dynamicFormSlice";
import React from "react";

export const DynamicFormList = () => {
    const dynamicFields = useSelector(selectDynamicForm);

    return (
        <>
            {dynamicFields?.length ?
                <DynamicFormFields data={dynamicFields} />
                : <p>Dynamic Form Not Found...
                <Link className="text-green-500" to="/createDynamicForm">Create One</Link>
            </p>}
        </>
    )
}
