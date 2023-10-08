import { Schema, model, models } from 'mongoose';
import { addRequestMeta } from 'next/dist/server/request-meta';

const EmployeeSchema = new Schema({
    creator: {
        type: Schema.Types.ObjectId,
        Ref: 'User',
    },
    employee_name: {
        type: String,
        required: [true, 'Prompt is required.'],
    },
    time : { type : Date},
    mobile_num: {
        type:Number
    },
    aadhar: {
        type:String
    },
    id_card: {
        type: String,
    },
    designation: {
        type: String,
    },
    res_no: {
        type: String,
    },
    full_addr: {
        type: String,
    },
    police: {
        type: String,
    },
    police: {
        type: String,
    },
    contactractor_addr: {
        type: String,
    },
    addr_house_owner: {
        type: String,
    },
    bank_account: {
        type: String,
    },
    other_details: {
        type: String,
    },
});

const Employee = models.Employee || model('Employee', EmployeeSchema);

export default Employee;
