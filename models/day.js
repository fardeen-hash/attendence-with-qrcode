import { Schema, model, models } from 'mongoose';

const DaySchema = new Schema({
    creator: {
        type: Schema.Types.ObjectId,
        Ref: 'Employee',
    },
    employee_name: {
        type: String,
        required: [true, 'Prompt is required.'],
    },
    time : { type : Date, default: Date.now },
    mobile_num: {
        type:Number
    },
    aadhar: {
        type:Number
    },
});