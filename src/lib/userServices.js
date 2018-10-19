
export const fetchUser = (userID)=>{
    return fetch(`https://api.github.com/users/${userID}`).then(res=>{if(res.json())return res.json(); else  throw new Error()})
}