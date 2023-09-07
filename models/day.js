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
    date: { type : Date},
    start_time : { type : Date, default: Date.now },
    total_time : { type : Date},
    isCompleted: {type: Boolean,default: false},
    cost: {type:Number},
});
const Day = models.Day || model('Day', DaySchema);

export default Day;
