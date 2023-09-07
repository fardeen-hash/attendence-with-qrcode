import Day from "@models/day";
import { connectToDB } from "@utils/database";

export const POST = async (request) => {
    const { userId, employee_name,mobile_num,aadhar } = await request.json();
    var time = new Date()

    try {
        await connectToDB(userId);

        //finding if day entry already done.

        const dayExists = await Day.findOne({ email: profile.email });

        const newDay = new Day({ creator: userId, employee_name,time, mobile_num,aadhar});

        await newDay.save();
        return new Response(JSON.stringify(newDay), { status: 201 })
    } catch (error) {
        return new Response("Failed to create a new employee", { status: 500 });
    }
}