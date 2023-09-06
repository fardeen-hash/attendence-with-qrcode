import Employee from "@models/employee";
import { connectToDB } from "@utils/database";

export const POST = async (request) => {
    const { userId, employee_name,mobile_num,aadhar } = await request.json();
    var time = new Date("2020-10-15T00:00:00.000Z")

    try {
        await connectToDB(userId);
        const newEmployee = new Employee({ creator: userId, employee_name,time, mobile_num,aadhar});

        await newEmployee.save();
        return new Response(JSON.stringify(newEmployee), { status: 201 })
    } catch (error) {
        return new Response("Failed to create a new employee", { status: 500 });
    }
}