"use server"
/**
 * Get all users from the database
 * @returns {Array<User>} - array of user Objects
 */
// export async function getUsers(){
//     try {
//     const res = await fetch("https://nextjs-project-if9d-git-master-mathoks-projects.vercel.app/api/users")
//     const users = await res.json()
//     return users.data
//     }
//     catch(e){
//         console.log(e)
//     }
// }

export async function getUsers() {
    try {
      const response = await fetch("https://nextjs-project-if9d-git-master-mathoks-projects.vercel.app/api/users");
      if (!response.ok) {
        throw new Error(`API request failed with status ${response.status}`);
      }
      const users = await response.json();
      return users.data || {}; // Return an empty array if data is missing
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  }
  