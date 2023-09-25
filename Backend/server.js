//importing pakages of express from node or pakages
const express= require("express");
const dotenv = require('dotenv'); // inporting env file
const notes = require("./data/notes");
const connectDB= require("./config/db");
const userRoutes = require("./routes/userRoutes");
const noteRoutes = require("./routes/noteRoutes");
const { notFound, errorHandler } = require("./middlewares/errorMiddleware");


//creating object of the imported pakage 
const app=express();
dotenv.config();
connectDB();
app.use(express.json());
 
//app.get brings the data from the backend to the frontend and serves it
app.get('/', (req,res)=>{
    res.send("API is running...");
});

// app.get("/api/notes", (req,res)=>{
//     res.json(notes);
// })

app.use("/api/users", userRoutes)
app.use("/api/notes", noteRoutes)

app.use(notFound);
app.use(errorHandler);

const PORT =process.env.PORT || 5000;

//listen on a particular port which we r providing it
app.listen(PORT,console.log(`server started at port ${PORT}`));

