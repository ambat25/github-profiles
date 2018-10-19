import {fetchUser,getAllUsers} from '../lib/userServices';
import {showMessage} from './message'

const initialState = {
    allProfiles: []
}

export const USER_ADD = "USER_ADD"
export const LOAD_ADD = "LOAD_ADD"


export const loadUsers = (profiles) => ({
    type: LOAD_ADD,
    payload: profiles
})
export const userAdd = (profile) => ({
    type: USER_ADD,
    payload: {_id:profile._id,avatar_url:profile.avatar_url,name:profile.name,html_url:profile.html_url,login:profile.login}
})

export const getUsers = () => {
    return (dispatch)=>{
        dispatch(showMessage('loading users'))
        getAllUsers().then(users=>dispatch(loadUsers(users)))
    }
}
export const addUser = (userID) => {
    return (dispatch) => {
        dispatch(showMessage('adding user'))
        fetchUser(userID).then(user=> {
            if(!user._id) return dispatch(showMessage(''))
            return dispatch(userAdd(user))
        })
    }

}
export default (state = initialState, action) => {
    switch (action.type) {
        case USER_ADD:
            if(state.allProfiles.find(user=>Number(user._id) === Number(action.payload._id))) return {...state}
            return {...state,allProfiles:state.allProfiles.concat(action.payload)}
        case LOAD_ADD:
            return {...state,allProfiles:action.payload}
        default:
            return state
    }
}