var mongoose = require("mongoose");
const Schema = mongoose.Schema;
const MoneySchema = new Schema({
  userID: { type: String, required: true},
  money: { type: Number,  minimum: 0 }
 
});

// eslint-disable-next-line no-undef
module.exports = mongoose.model("moneys", MoneySchema);
