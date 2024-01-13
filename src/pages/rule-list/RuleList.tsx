import React from "react";
import { useSelector } from "react-redux";
import { selectRule } from "../../store/ruleCreatedData";

export const RuleList = () => {
    const rules = useSelector(selectRule);

    return (
        <div>
            {rules.map((rule: any, index: number) => (
                <div key={index}>
                    {Object.keys(rule).map((key) => (
                        <div key={key}>
                            <label>{key}: {rule[key]}</label>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
};
