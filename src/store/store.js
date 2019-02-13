
import { createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import actionsReducer from '../services/reducers/reducer';

const initialState = [];

const middleware = [thunk];

//const storageState = localStorage.getItem('citas') ? JSON.parse(localStorage.getItem('citas')) : [];

// storageState para localstorage, de otra forma initialState.
const store = createStore(actionsReducer, 
    compose(applyMiddleware(...middleware), 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
) );

export default store;