import { Schema, model, models } from 'mongoose';

const DaySchema = new Schema({
    userId: {
        type: String,
      },
    employee_name: {
        type: String,
        required: [true, 'Prompt is required.'],
    },
    date: { type : Date},
    cost: {type:Number},
    isCompleted: {type: Boolean,default: false},
    start_time : { type : Date},
    hours: {type:Number},
});
const Day = models.Day || model('Day', DaySchema);

export default Day;
