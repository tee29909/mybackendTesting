var mongoose = require("mongoose");
const Schema = mongoose.Schema;
const PiggyBank = new Schema({
  userID: { type: String, required: true},
  money: { type: Number,  minimum: 0 },
  type: { type: String, required: true},
  date: { type: String, required: true},
  total: { type: Number,  minimum: 0 },
 
 
});

// eslint-disable-next-line no-undef
module.exports = mongoose.model("piggyBanks", PiggyBank);
