import Employee from "@models/employee";
import { connectToDB } from "@utils/database";

export const GET = async (request, { params }) => {
    try {
        await connectToDB()


        const prompt = await Employee.findById(params.id)
        if (!prompt) return new Response("Prompt Not Found", { status: 404 });

        return new Response(JSON.stringify(prompt), { status: 200 })
        
    } catch (error) {
        return new Response("Failed to fetch prompts created by user", { status: 500 })
    }
}