const mongoose = require("mongoose");

/*//const URI = " mongodb://127.0.0.1:27017/mern_admin";
//mongoose.connect(URI);*/

const URI = process.env.MONGODB_URI;
//const URI = "mongodb+srv://kavitakapkotikk123:6Qy8kXi7sFk4otBz@cluster1.jlkcnsc.mongodb.net/mern_admin?retryWrites=true&w=majority";



 const connectDb = async () => {
  try{
        await mongoose.connect(URI);
     console.log("connection successful to Db");
    } catch(error ){
        console.error("database connection error"  , error);
       process.exit(0);
  }
 };


module.exports = connectDb;
