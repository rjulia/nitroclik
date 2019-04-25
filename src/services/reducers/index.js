import { combineReducers } from 'redux'
import { SettingsReducer } from "./languagesReducers"
import ModalReducer from "./Reducer"


export const reducer = combineReducers({
  modal: ModalReducer,
  settings: SettingsReducer
})