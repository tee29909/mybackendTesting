const Money = require('../models/Money');
const moneyController = {

  addMoney: (req, res) => {
    const payload = req.body
    Money.create({ userID: payload.userID, money: payload.money }).then(function (money) {
      res.json(money)
    }).catch(function (err) {
      res.status(500).send(err)
    })
    // const Money = new money(payload);
    // try {
    //   money.save()
    //   res.json(money)
    // }
    // catch (err){
    //   res.status(500).send(err)
    // }
    

  },
  updateMoney: (req, res) => {
    const payload = req.body
    Money.updateOne({ _id: payload._id }, payload).then(function (money) {
      res.json(money)
    }).catch(function (err) {
      res.status(500).send(err)
    })
  },
  deleteMoney: (req, res) => {
    const { id } = req.params
    Money.deleteOne({ _id: id }).then(function (money) {
      res.json(money)
    }).catch(function (err) {
      res.status(500).send(err)
    })
    

  },
  getMoneys: (req, res, next) => {

    //   money.find(function (err, moneys) {
    //     if (err) return console.error(err);
    //     console.log(moneys);
    // })


    //   res.json(moneysController.getmoneys());
    Money.find({}).then(function (moneys) {
      res.json(moneys)
    }).catch(function (err) {
      res.status(500).send(err)
    })


    // eslint-disable-next-line no-undef
    console.log(next)
  },

  getMoney: (req, res, next) => {
    const { id } = req.params
    Money.findById(id).then(function (money) {
      res.json(money)
    }).catch(function (err) {
      res.status(500).send(err)
    })
    // eslint-disable-next-line no-undef
    console.log(next)
  }
}

// eslint-disable-next-line no-undef
module.exports = moneyController
