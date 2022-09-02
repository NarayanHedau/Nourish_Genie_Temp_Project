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
let Country = require('country-state-city').Country;
let State = require('country-state-city').State;
let City = require('country-state-city').City



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

app.get("/countries",  (req, res) => {
    try {
      const countryData =  Country.getAllCountries();
      res.send({code:200, data:countryData})
    } catch (error) {
      console.log(error)
      res.send({code: 301, message:"Something went Wrong"})
    }
  });
  
  
  let countryData;
  app.get("/states/:country",  (req, res) => {
    try {
      const stateData = State.getStatesOfCountry(req.params.country)
      res.send({code:200, data:stateData})
    } catch (error) {
      console.log(error)
      res.send({code: 301, message:"Something went Wrong"})
    }
  });
  
  
  
  app.get("/cities/:country/:state",  (req, res) => {
    try {
      const cityData = City.getCitiesOfState(req.params.country, req.params.state)
      res.send({code:200, data:cityData})
    } catch (error) {
      console.log(error)
      res.send({code: 301, message:"Something went Wrong"})
    }
  });
  
  
  


app.listen(3000,()=>{
 console.log("Connected")
})