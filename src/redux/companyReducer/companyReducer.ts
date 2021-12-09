import {createAction, createSlice, PayloadAction} from '@reduxjs/toolkit'
import {removeCompanys} from "./utils";


export type companyType = {
    id: string
    name: string
    info?: string
    childs: Array<string>
    parentId: null | string
}
export type companyStateType = typeof initialState
type addCompanyPayloadType = {
    info: string
    parent: string
    name: string
}


const initialState = {
    loading: false,
    error: false,
    companys: [] as Array<companyType>
}


export const asyncLoadCompanysAction = createAction('asyncLoadCompanysAction')
export const asyncSaveCompanysAction = createAction('asyncSaveCompanysAction', (companys: Array<companyType>) => {
    return {
        payload: companys
    }
})


export const companySlice = createSlice({
    name: "company",
    initialState: initialState,
    reducers: {
        fillCompanys: (state: companyStateType, action: PayloadAction<Array<companyType>>) => {
            state.companys = action.payload
        },
        loadingStart: (state: companyStateType) => {
            state.loading = true
        },
        loadingStop: (state: companyStateType) => {
            state.loading = false
        },
        addCompany: (state: companyStateType, action: PayloadAction<addCompanyPayloadType>) => {
            let id = new Date().getTime().toString()
            if (action.payload.parent) {
                state.companys.forEach((company) => {
                    if (company.id === action.payload.parent) {
                        company.childs.push(id)

                    }
                })
            }

            const newCompany: companyType = {
                id: id,
                name: action.payload.name,
                info: action.payload.info,
                childs: [],
                parentId: action.payload.parent
            }
            state.companys.push(newCompany)
        },
        removeCompany: (state: companyStateType, action: PayloadAction<string>) => {

            state.companys = removeCompanys([action.payload], state.companys)
            // удаление id из массива childs родительской компании
            state.companys.forEach((el) => {
                if (el.childs.includes(action.payload)) {
                    console.log(el.childs, action.payload)
                    el.childs = el.childs.filter((id) => id !== action.payload)


                }
            })

        }
    }
})

export const {addCompany, removeCompany, fillCompanys, loadingStart, loadingStop} = companySlice.actions