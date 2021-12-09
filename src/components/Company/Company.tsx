import React, {FC} from "react";
import './Company.scss'
import {companyType} from "../../redux/companyReducer/companyReducer";

type PropsType = {
    name: string
    info?: string
    parents: number
    companys: Array<companyType>
    parentId: string | null
    id: string
}

export const Company: FC<PropsType> = (props) => {
    const marginLeft = props.parents === 0 ? 0 : 125 + 'px'
    const rootCompanys = props.companys.filter((company) => company.parentId === props.id)
    const cls = rootCompanys.length === 0 ? '' : 'wrapper'
    return (
        <div className={cls} style={{marginLeft}}>
            <div className="Company">
            <span className="Company__header">
                <p>{props.name}</p>
                <span data-delete={props.id}></span>
            </span>
                <div className="Company__content">{props.info}</div>
            </div>
            {rootCompanys.length > 0 && rootCompanys.map((company) => {
                return (<Company
                        name={company.name}
                        info={company.info}
                        key={company.id}
                        parents={props.parents + 1}
                        companys={props.companys}
                        parentId={company.parentId}
                        id={company.id}
                    />
                )
            })}
        </div>
    )
}