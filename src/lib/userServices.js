import PouchDB from 'pouchdb'

const db = new PouchDB('github-profiles')
export const fetchUser = async(userID) => {
    try {
        const req = await fetch(`https://api.github.com/users/${userID}`)
        const user = await req.json()
        if(!user.login){
            throw new Error()
        }
        const profile = {_id:''+user.id,avatar_url:user.avatar_url,name:user.name,html_url:user.html_url,login:user.login}
        await db.put(profile)
        return profile
    } catch (err) {
        return {}
    }
}

export const getAllUsers = async()=>{
    try {
        const req = await db.allDocs({include_docs:true})
        const users =req.rows.map(row=>row.doc);
        return users
    } catch (err) {
        return {}
    }
}