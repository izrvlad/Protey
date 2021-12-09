import './Tree.scss'
import {Forma} from "../../components/Form/Forma";
import {Result} from "../../components/Result/Result";
import React, {FC, useEffect} from "react";
import {useAppDispatch} from "../../redux/store";
import {asyncLoadCompanysAction, asyncSaveCompanysAction, companyType} from "../../redux/companyReducer/companyReducer";
import {useSelector} from "react-redux";
import {RootState} from "../../redux/rootReducer";


export const Tree: FC = () => {
    const companys = useSelector<RootState, Array<companyType>>(state => state.company.companys)
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(asyncLoadCompanysAction())
    }, [dispatch])
    useEffect(() => {
        dispatch(asyncSaveCompanysAction(companys))
    }, [dispatch, companys])
    return (
        <div className="Tree">
            <Forma/>
            <Result/>
        </div>
    )
}