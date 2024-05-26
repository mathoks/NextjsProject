/**
 * GET /api/users
 * @route GET /api/users.
 * @returns {Promise<void>}
 
 */
export  async function GET(){
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/todos/1')
        const users = await res.json()
        console.log(users)
        return Response.json({data : users})
    } catch (error) {
       console.log(error)
    }
  
}

