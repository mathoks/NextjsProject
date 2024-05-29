import { headers } from "next/headers";

/**
 * GET /api/users
 * @route GET /api/users.
 * @returns {Promise<void>}
 */

export async function GET() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`);
    }
    const todo = await response.json();
    return Response.json({ data: todo });
  } catch (error) {
    console.error("Error fetching todo:", error);
    Response.error({ error: "Internal server error" });
  }
}
