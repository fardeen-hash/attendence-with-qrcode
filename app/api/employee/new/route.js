import Employee from "@models/employee";
import { connectToDB } from "@utils/database";

export const POST = async (request) => {
    const { userId, employee_name,employee_photo,mobile_num,aadhar,id_card,
        designation,res_no,full_addr,police,contactractor_addr,
        addr_house_owner,bank_account,other_details} = await request.json();
    var time = new Date()

    try {
        await connectToDB(userId);
        const newEmployee = new Employee({ creator: userId, employee_name,employee_photo,time, mobile_num,aadhar,id_card,designation,res_no,full_addr,police,contactractor_addr,addr_house_owner,bank_account,other_details});

        await newEmployee.save();
        return new Response(JSON.stringify(newEmployee), { status: 201 })
    } catch (error) {
        return new Response("Failed to create a new employee", { status: 500 });
    }
}