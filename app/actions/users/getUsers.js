"use server"
export async function getUsers(){
    try {
    const res = await fetch("http://localhost:3000/api/users")
    
    const users = await res.json()
    return users.data
    }
    catch(e){
        console.log(e)
    }
}