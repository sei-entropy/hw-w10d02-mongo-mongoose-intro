const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const vampireSchema = new Schema({
  name: String,
  title: String,
  hair_color: { type: String, default: "blonde" },
  eye_color: String,
  dob: Date,
  loves: [String],
  location: String,
  gender: String,
  victims: Number
});

const Vampire = mongoose.model("Vampire", vampireSchema);

//make this exportable to be accessed in `app.js`
module.exports = Vampire;
