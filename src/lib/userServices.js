
export const fetchUser = (userID)=>{
    return fetch(`https://api.github.com/users/${userID}`).then(res=>res.json())
}