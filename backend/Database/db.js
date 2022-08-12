const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/tempDatabase").then(()=>{
    console.log("Database Connect Successfully")
}).catch(()=>{
    console.log("Unable to Connect Database")
})