import {companyType} from "./companyReducer";

type removeCompanysType = (ids: Array<string>, companys: Array<companyType>) => Array<companyType>

export const removeCompanys: removeCompanysType = (ids, companys) => {
    for (let i = 0; i < ids.length; i++) {
        const company = companys.find((el) => el.id === ids[i])

        // @ts-ignore
        if (company.childs) {
            // @ts-ignore
            companys = removeCompanys(company.childs, companys)
        }

        companys = companys.filter((el) => el.id !== ids[i])
    }
    return companys
}