import mongoose from "mongoose";



 export const connectDB = async () =>{
   await mongoose.connect('mongodb+srv://parachakhan10:King2000@cluster0.7tusi.mongodb.net/food-del').then(()=>console.log("DB Connected"));
}






 