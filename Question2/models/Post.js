const mongoose = require("mongoose");

const dummySchema = mongoose.Schema({
  fname: { type: String, required: true },
  lname: { type: String, required: true },
  address: { type: String, required: true },
  city: { type: String, required: true },
  number: { type: Number, required: true },
  
});

const Dummy = mongoose.model("Dummy", cdummySchema);
module.exports = Dummy;
