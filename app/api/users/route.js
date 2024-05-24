
import { NextResponse } from "next/server"


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

