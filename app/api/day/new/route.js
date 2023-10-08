import Day from "@models/day";
import { connectToDB } from "@utils/database";

export const POST = async (request) => {
    const { userId, employee_name,cost,isCompleted,hours} = await request.json();
    var date = new Date();
    date.setHours(0, 0, 0, 0);
    var start_time= new Date();
    

    try {
        await connectToDB(userId);
        console.log("after connecttodb");

        //finding if day entry already done.
       const dayExists =await Day.find( {$and: [{date: { $lte: date }},{ userId: userId}]});
       

       //can be used to fetch dates from ranges
     //  const postss =await Day.find( { date: { $gte: date, $lte: date } });
       
       
        console.log(dayExists);
        //console.log(today);
        
      
        //if not creating the date
        if(!dayExists){
            console.log("inside day exists!")
            const newDay = new Day({userId, employee_name,date,cost,isCompleted,start_time,hours});
            await newDay.save();
            return new Response(JSON.stringify(newDay), { status: 201 })
        }
        const[day]=dayExists;
        console.log(day.isCompleted);

        //calculating amount of time worked
        console.log(start_time-day.start_time);
        const ms = start_time-day.start_time;
        let hour = (ms / (1000 * 60 * 60)).toFixed(1);
        console.log(hour);

        //calculating cost
        

        //update time and amount 
        //update isCompleted to true 
      

         return new Response( "nothing  happpened",{ status: 201 })
        
    } catch (error) {
        return new Response("Failed to create a new day", { status: 500 });
    }
}





// let year= time.getFullYear().toString();

// let month = time.getMonth();

// if(month<10){
//     let temp=0;
//     let monthupdated=temp.concat
// }

// let daystring = year.concat("-",time.getMonth().toString(),"-",time.getDay().toString())
// console.log(daystring);
// const end = new Date("2023-09-14T15:48:40.978Z");
// const begin =new Date("2023-09-14T14:55:12.062+00:00");
// const title = new RegExp(todayDate, "i");
//      const today = await Day.find({ $or: [ { title } ]});
//         const dayExits2= await Day.aggregate(['time', {'$gte': begin,'$lte': end}]);
//         //if day exists modify and calculate the cost 
//         // if(dayExists){
//         //     dayExists.
//         // }
//     //     start_time : { type : Date, default: Date.now },
//     // total_time : { type : Date},
//     // isCompleted: {type: Boolean,default: false},
//     var todayDate = new Date().toISOString().slice(0, 10);
//         console.log(todayDate); 
