import { combineReducers } from 'redux'
import { SettingsReducer } from "./languagesReducers"
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase'
import ModalReducer from "./Reducer"
import workReducers from "./WorkReducers";


export const reducer = combineReducers({
  modal: ModalReducer,
  settings: SettingsReducer,
  works: workReducers,
  firestore: firestoreReducer,
  firebase: firebaseReducer
})