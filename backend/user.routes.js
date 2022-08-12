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
        const result = await User.find();
        result.forEach((e)=>{
            const emailId = json.parse(e.email);
            const pass  = json.parse(e.password);

            if(email==emailId && password==pass){
                res.send("Login Successfull")
            }else{
                res.send("Incorrect Username and Password")
            }
        })
    } catch (error) {
        
    }
})
app.listen(3000,()=>{
 console.log("Connected")
})