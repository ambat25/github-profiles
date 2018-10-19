import userReducer from './reducers/users';
import messageReducer from './reducers/message';
import {createStore,applyMiddleware, combineReducers} from 'redux'
import thunk from "redux-thunk";
import {composeWithDevTools} from 'redux-devtools-extension'

const reducer = combineReducers({users:userReducer,message:messageReducer})
export default createStore(reducer,composeWithDevTools(applyMiddleware(thunk)))