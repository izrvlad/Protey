import {configureStore} from '@reduxjs/toolkit'
import {useDispatch} from 'react-redux'
import {rootReducer} from './rootReducer'
import createSagaMiddleware from 'redux-saga'
import rootSaga from "./sagas/rootSaga";


const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
    reducer: rootReducer,
    devTools: process.env.NODE_ENV !== 'production',
    middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), sagaMiddleware],
})

sagaMiddleware.run(rootSaga)

export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()
