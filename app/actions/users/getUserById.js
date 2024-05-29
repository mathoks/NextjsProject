export default async function getUserById(id) {
    try {
        const response = await fetch(`http://localhost:3000/api/pages/${id}/`)
        if (!response.ok) {
            throw new Error(`API request failed with status ${Response.status}`)
        }
        const user = await response.json()
        return user.data || {}
    } catch (error) {
        console.error("Error fetching user:", error)
    }
}