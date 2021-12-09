import {companyType} from "../redux/companyReducer/companyReducer";

const storageName: string = "userData"

export async function saveCompatysToStorage(companys: Array<companyType>) {
    return localStorage.setItem(storageName, JSON.stringify(companys))
}

export async function loadCompanysFromStorage() {
    return JSON.parse(localStorage.getItem(storageName) || "[]")
}