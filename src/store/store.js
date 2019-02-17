
import { createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import actionsReducer from '../Services/Reducers/Reducer';


const middleware = [thunk];

//const storageState = localStorage.getItem('citas') ? JSON.parse(localStorage.getItem('citas')) : [];

// storageState para localstorage, de otra forma initialState.
// const store = createStore(actionsReducer, 
//     compose(applyMiddleware(...middleware), 
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// ) );

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;

const enhancer = composeEnhancers(
  applyMiddleware(...middleware),
  // other store enhancers if any
);
const store = createStore(actionsReducer, enhancer);

export default store;