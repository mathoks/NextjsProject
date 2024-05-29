export  async function GET(req, {params}){
    const { id } = params
    console.log(id)
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
      if (!response.ok) {
        throw new Error(`API request failed with status ${response.status}`);
      }
      const todo = await response.json();
      return  Response.json({ data: todo })
    }
    catch (error) {
        console.error('Error fetching todo:', error)
        Response.error({ error: 'Internal server error' })
    }

}