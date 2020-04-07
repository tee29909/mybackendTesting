var mongoose = require("mongoose");
const Schema = mongoose.Schema;
const UserSchema = new Schema({
  firstname: { type: String, required: true, minlength: 3 },
  lastname: { type: String, required: true, minlength: 3 },
  username: { type: String, required: true, minlength: 6, unique: true },
  password: { type: String, required: true, minlength: 6 }
});

// eslint-disable-next-line no-undef
module.exports = mongoose.model("users", UserSchema);
