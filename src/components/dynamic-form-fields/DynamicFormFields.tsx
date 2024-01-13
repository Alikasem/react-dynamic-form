import React from "react";
import {DynamicFormInterface} from "../../interfaces/DynamicFormInterface";
import './DynamicFormFields.css';
import {Link} from "react-router-dom";

export const DynamicFormFields = ({data}: DynamicFormInterface) => {
    return (
                <div className="flex flex-col justify-center align-middle">
                    <table className="table-auto min-w-full bg-white border border-gray-200">
                        <thead>
                        <tr>
                            <th className="py-2 px-4 border-b">Type</th>
                            <th className="py-2 px-4 border-b">Name</th>
                            <th className="py-2 px-4 border-b">Label</th>
                            <th className="py-2 px-4 border-b">Placeholder</th>
                            <th className="py-2 px-4 border-b">Default Value</th>
                            <th className="py-2 px-4 border-b">Min</th>
                            <th className="py-2 px-4 border-b">Max</th>
                            <th className="py-2 px-4 border-b">Min Length</th>
                            <th className="py-2 px-4 border-b">Max Length</th>
                            <th className="py-2 px-4 border-b">Required</th>
                        </tr>
                        </thead>
                        <tbody>
                        {data.map((item) => (
                            <tr className="hover:bg-gray-100 td-width" key={item.index}>
                                <td className="py-2 px-4 border-b">{item.type}</td>
                                <td className="py-2 px-4 border-b">{item.name}</td>
                                <td className="py-2 px-4 border-b">{item.label}</td>
                                <td className="py-2 px-4 border-b">{item?.placeholder}</td>
                                <td className="py-2 px-4 border-b">{item?.defaultValue}</td>
                                <td className="py-2 px-4 border-b">{item?.min}</td>
                                <td className="py-2 px-4 border-b">{item?.max}</td>
                                <td className="py-2 px-4 border-b">{item?.minLength}</td>
                                <td className="py-2 px-4 border-b">{item?.maxLength}</td>
                                <td className="py-2 px-4 border-b">{item.required ? 'Yes' : 'No'}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                    <Link className="text-green-500" to="/createRule">create Rule</Link>
                </div>
    )
}
