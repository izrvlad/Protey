import React, {FC} from "react";
import './Input.scss'
import {ErrorMessage, Field} from "formik";

type parentType = {
    id: string
    name: string
}
type PropsType = {
    type: "text" | "select" | "textarea"
    placeholder: string
    name: string
    options?: Array<parentType>

}


export const Input: FC<PropsType> = (props) => {
    const renderError = (message: string) => <label htmlFor={props.name}>{message}</label>;
    if (props.type === 'select') {
        return (
            <div className="input__wrapper">
                <Field
                    className="Input"
                    name={props.name}
                    as="select"
                    id={props.name}
                >
                    <option defaultValue={"null"}>{props.placeholder}</option>
                    {props.options?.map((option,i) => <option key={i} value={option.id}>{option.name}</option>)}
                </Field>
                <ErrorMessage name={props.name} render={renderError}/>
            </div>
        )
    }
    if (props.type === 'textarea') {
        return (
            <div className="input__wrapper">
                <Field
                    className="Input"
                    placeholder={props.placeholder}
                    name={props.name}
                    as="textarea"
                    id={props.name}
                />
                <ErrorMessage name={props.name} render={renderError}/>
            </div>
        )
    }

    return (
        <div className="input__wrapper">
            <Field
                type={props.type}
                className={"Input"}
                placeholder={props.placeholder}
                name={props.name}
                id={props.name}
            />
            <ErrorMessage name={props.name} render={renderError}/>
        </div>

    )
}