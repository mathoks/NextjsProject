"use server"
/**
 * Get all users from the database
 * @returns {Array<User>} - array of user Objects
 */
export async function getUsers(){
    try {
    const res = await fetch("http://localhost:3000/api/users " || "https://nextjs-project-if9d-git-master-mathoks-projects.vercel.app/api/users")
    
    const users = await res.json()
    return users.data
    }
    catch(e){
        console.log(e)
    }
}