var mongoose = require("mongoose");
const Schema = mongoose.Schema;
const MoneySchema = new Schema({
  userID: { type: String, required: true, unique: true },
  money: { type: Number, min: 0, required: true },
});

// eslint-disable-next-line no-undef
module.exports = mongoose.model("moneys", MoneySchema);
