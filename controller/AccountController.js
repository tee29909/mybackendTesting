const Money = require("../models/Money");
const PiggyBank = require("../models/PiggyBank");
const accountController = {
  Deposit: (req, res, next) => {
    //   User.find(function (err, users) {
    //     if (err) return console.error(err);
    //     console.log(users);
    // })

    //   res.json(usersController.getUsers());
    const payload = req.body;

    Money.findOne({ userID: payload.userID })
      .then(function (money) {
        const newMoney = money;
        newMoney.money = payload.money + newMoney.money;

        PiggyBank.create({
          userID: money.userID,
          money: payload.money,
          type: "Deposit",
          date: Date.now(),
          total: newMoney.money,
        })
          .then(function () {})
          .catch(function (err) {
            res.status(500).send(err);
          });

        Money.updateOne({ _id: money._id }, newMoney)
          .then(function (moneyNew) {
            res.json(moneyNew);
          })
          .catch(function (err) {
            res.status(500).send(err);
          });
      })
      .catch(function (err) {
        res.status(500).send(err);
      });

    // eslint-disable-next-line no-undef
    console.log(next);
  },
  Withdraw: (req, res, next) => {
    //   User.find(function (err, users) {
    //     if (err) return console.error(err);
    //     console.log(users);
    // })

    //   res.json(usersController.getUsers());
    const payload = req.body;

    Money.findOne({ userID: payload.userID })
      .then(function (money) {
        var newMoney = money;
        if (payload.money < newMoney.money) {
          newMoney.money = newMoney.money - payload.money;
        } else {
          payload.money = money.money;
          newMoney.money = 0;
        }

        PiggyBank.create({
          userID: money.userID,
          money: payload.money,
          type: "Withdraw",
          date: Date.now(),
          total: newMoney.money,
        })
          .then(function () {})
          .catch(function (err) {
            res.status(500).send(err);
          });

        Money.updateOne({ _id: money._id }, newMoney)
          .then(function (moneyNew) {
            res.json(moneyNew);
          })
          .catch(function (err) {
            res.status(500).send(err);
          });
      })
      .catch(function (err) {
        res.status(500).send(err);
      });

    // eslint-disable-next-line no-undef
    console.log(next);
  },
};
// eslint-disable-next-line no-undef
module.exports = accountController;
