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
        type:Number
    },
});

const Employee = models.Employee || model('Employee', EmployeeSchema);

export default Employee;
