 import {USER_ADD,LOAD_ADD} from './users'



const SHOW_MESSAGE = 'SHOW_MESSAGE'
const messageInitialState = {msg:'',class:''}
export const showMessage= (message)=>({type:SHOW_MESSAGE,payload:message})
export default (state = messageInitialState, action) => {
    switch (action.type) {
        case SHOW_MESSAGE:
            return {class: action.payload.class||'', msg:action.payload.msg}
        case USER_ADD:
        case LOAD_ADD:
            return messageInitialState
        default:
            return messageInitialState
    }
}

