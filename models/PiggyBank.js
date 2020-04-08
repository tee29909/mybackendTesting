var mongoose = require("mongoose");
const Schema = mongoose.Schema;
const PiggyBank = new Schema({
  userID: { type: String, required: true },
  money: { type: Number, min: 0, required: true },
  type: { type: String, required: true, enum: ["Withdraw", "Deposit"] },
  date: { type: Date, required: true, min: Date.now() },
  total: { type: Number, min: 0, required: true },
});

// eslint-disable-next-line no-undef
module.exports = mongoose.model("piggyBanks", PiggyBank);
