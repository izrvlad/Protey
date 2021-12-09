import {all, call, put, takeEvery} from 'redux-saga/effects';
import {
    asyncLoadCompanysAction,
    asyncSaveCompanysAction,
    companyType,
    fillCompanys,
    loadingStart,
    loadingStop
} from "../companyReducer/companyReducer";
import {loadCompanysFromStorage, saveCompatysToStorage} from "../../api/api";
import {SagaIterator} from "redux-saga";


export default function* rootSaga() {
    yield all([
        watchLoadCompanys(),
        watchSaveCompanys()
    ])
}


function* watchLoadCompanys(): SagaIterator {
    yield takeEvery(asyncLoadCompanysAction, loadCompanys)
}

function* watchSaveCompanys(): SagaIterator {
    // @ts-ignore
    yield takeEvery(asyncSaveCompanysAction, saveCompanys)
}

function* loadCompanys(): Generator {
    yield put(loadingStart())
    // @ts-ignore
    const data: Array<companyType> = yield call(loadCompanysFromStorage)
    yield put(fillCompanys(data))
    yield put(loadingStop())

}


// @ts-ignore
function* saveCompanys(action): Generator {
    yield put(loadingStart())
    yield call(saveCompatysToStorage, action.payload)
    yield put(loadingStop())
}