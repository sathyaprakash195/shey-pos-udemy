const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: { type: String, required: true },
  userId: { type: String, required: true },
  password: { type: String, required: true },
  verified : {type:Boolean , require:true}
  
}, {timestamps : true});

const userModel = mongoose.model("users", userSchema);

module.exports = userModel;