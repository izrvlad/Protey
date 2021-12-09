import React, {FC} from "react";
import './Result.scss'
import {useSelector} from "react-redux";
import {RootState} from "../../redux/rootReducer";
import {companyStateType, companyType, removeCompany} from "../../redux/companyReducer/companyReducer";
import {Company} from "../Company/Company";
import {useAppDispatch} from "../../redux/store";
import {Loader} from "../Loader/Loader";

export const Result: FC = () => {
    const companyState = useSelector<RootState, companyStateType>(state => state.company)
    const dispatch = useAppDispatch()
    const rootCompanys = companyState.companys.filter((company) => company.parentId === 'null')

    function deleteCompanyHandler(e: any) {
        const id = e.target.dataset.delete
        if (id) {
            dispatch(removeCompany(id))
        }
    }
    if(companyState.loading){
        return (
            <div className="Result" >
                <Loader/>
            </div>
        )
    }

    return (
        <div className="Result" onClick={deleteCompanyHandler}>
            {companyState.companys.length === 0 ? <p>Вы еще не добавили компании</p> : rootCompanys.map((company) => {
                return (<Company
                        name={company.name}
                        info={company.info}
                        key={company.id}
                        parents={0}
                        companys={companyState.companys}
                        parentId={company.parentId}
                        id={company.id}
                    />
                )
            })}
        </div>
    )
}