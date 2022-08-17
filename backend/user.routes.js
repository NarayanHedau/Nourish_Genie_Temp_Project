const mongoose= require("mongoose")
const express = require("express");
require("./Database/db")
require("./model/user/user.model")
const User= mongoose.model("User");
const app = express();
app.use(express.json());
let cors = require("cors");
// enableCORS(app);
app.use(cors());
app.post("/register", async(req, res)=>{
    try {
        // log.debug("/regiter");
        const result = await new User(req.body).save()
        res.send(result);
    } catch (error) {
        console.log(error);
    }
})

app.post("/login", async(req, res)=>{
    try {
        const {password, email}= req.body;
        const result = await User.findOne({email:email});
        if (!result) {
            res.send("Unable to fetch credentials.... ")
        }else{
            return res.json({
                status: 200,
                message:"Login Successfull"
            })
        }
     
    } catch (error) {
        console.error(error)
    }
})

app.listen(3000,()=>{
 console.log("Connected")
})