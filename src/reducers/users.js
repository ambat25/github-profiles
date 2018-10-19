import {fetchUser} from '../lib/userServices';
import {showMessage} from './message'

const initialState = {
    allProfiles: [
        {id: 20834741, avatar_url: "https://avatars0.githubusercontent.com/u/20834741?v=4", name: "Abdulrahman M Bashir", html_url: "https://github.com/ambat25", login: "ambat25"}
    ]
}

export const USER_ADD = "USER_ADD"


export const userAdd = (profile) => ({
    type: USER_ADD,
    payload: {id:profile.id,avatar_url:profile.avatar_url,name:profile.name,html_url:profile.html_url,login:profile.login}
})

export const addUser = (userID) => {

    return (dispatch) => {
        dispatch(showMessage('adding user'))
        fetchUser(userID).then(user=>dispatch(userAdd(user)))
    }
}

export default (state = initialState, action) => {
    switch (action.type) {
        case USER_ADD:
            console.log(action.payload)
            if(state.allProfiles.find(user=>user.id === action.payload.id)) return {...state}
            return {...state,allProfiles:state.allProfiles.concat(action.payload)}
        default:
            return state
    }
}