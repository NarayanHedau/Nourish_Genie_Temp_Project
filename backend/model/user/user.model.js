const mongoose = require("mongoose")


const User = new mongoose.Schema({

name:{
  type:String,
},
email:{
  type:String
},
phoneNumber:{
  type:Number
},
password:{
  type:String
},
CountryOfOrigin:{
  type:String
},
state:{
  type:String
},
city:{
  type:String
}
})
module.exports = mongoose.model("User", User);
