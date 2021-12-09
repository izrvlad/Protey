import React, {FC} from "react";
import './Form.scss'
import {Input} from '../Input/Input'
import {Button} from "../Button/Button";
import {Form, Formik} from 'formik'
import {validation} from "./validation";
import {useAppDispatch} from "../../redux/store";
import {addCompany, companyType} from "../../redux/companyReducer/companyReducer";
import {useSelector} from "react-redux";
import {RootState} from "../../redux/rootReducer";

export const Forma: FC = () => {
    const dispatch = useAppDispatch()
    const companys = useSelector<RootState, Array<companyType>>(state => state.company.companys)
    const parents = companys.map((company) => {
        return {
            id: company.id,
            name: company.name
        }
    })
    return (
        <Formik
            initialValues={{name: "", info: "", parent: "null"}}
            validationSchema={validation}
            onSubmit={(values, actions) => {
                dispatch(addCompany(values))
                actions.resetForm()
            }}
        >
            <Form className="Form">
                <div className="Form__change">
                    <Input
                        type="text"
                        placeholder="Название компании"
                        name="name"
                    />
                    <Input
                        type="select"
                        placeholder="Родительская компания"
                        name="parent"
                        options={parents}
                    />
                </div>
                <div className="Form__description">
                    <Input
                        type="textarea"
                        placeholder="Описание компании"
                        name="info"
                    />
                </div>
                <div className="Form__button">
                    <Button value="Добавить"/>
                </div>
            </Form>
        </Formik>
    )
}