import {combineReducers} from '@reduxjs/toolkit'
import {companySlice} from "./companyReducer/companyReducer";


export const rootReducer = combineReducers({
    company: companySlice.reducer
})
export type RootState = ReturnType<typeof rootReducer>