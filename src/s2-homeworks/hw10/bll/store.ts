import {LoadingActionType, loadingReducer} from './loadingReducer'
import {combineReducers, legacy_createStore} from 'redux'
import {ChangeThemeIdType, themeReducer} from '../../hw12/bll/themeReducer'
import { ThunkAction, ThunkDispatch} from 'redux-thunk';

const reducers = combineReducers({
    loading: loadingReducer, // hw10
    theme: themeReducer, // hw12
})

 const store = legacy_createStore(reducers )

export default store

export type AppStoreType = ReturnType<typeof reducers>
export type AppActionsType=LoadingActionType | ChangeThemeIdType
export type AppDispatchType=ThunkDispatch<AppStoreType,unknown,AppActionsType>
export type AppThunk<ReturnType=void>=ThunkAction<ReturnType, AppStoreType, unknown, AppActionsType>

// @ts-ignore
window.store = store // for dev // для того чтобы автотесты видели состояние данных
