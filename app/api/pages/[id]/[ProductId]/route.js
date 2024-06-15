import { users } from "@/app/MockData/Data";

export  async function GET(req, {params}){
    const { id, ProductId } = params
    console.log(id, ProductId)
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
      if (!response.ok) {
        throw new Error(`API request failed with status ${response.status}`);
      }
      const todo = await response.json();
      const UserData =await  users.filter(({userId, product})=> userId === id && product.filter(({productId})=> productId === ProductId))
     
      return  Response.json({ data: UserData.product })
    }
    catch (error) {
        console.error('Error fetching todo:', error)
        Response.error({ error: 'Internal server error' })
    }

}