 import {USER_ADD} from './users'



const SHOW_MESSAGE = 'SHOW_MESSAGE'
const messageInitialState = ''
export const showMessage= (message)=>({type:SHOW_MESSAGE,payload:message})
export default (state = messageInitialState, action) => {
    switch (action.type) {
        case SHOW_MESSAGE:
            return action.payload
        case USER_ADD:
            return ''
        default:
            return state
    }
}

