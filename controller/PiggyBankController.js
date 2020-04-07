const PiggyBank = require('../models/PiggyBank');
const piggyBankController = {

  addPiggyBank: (req, res) => {
    const payload = req.body
    PiggyBank.create({ userID: payload.userID, money: payload.money, type: payload.type, date: payload.date, total: payload.total }).then(function (piggyBank) {
      res.json(piggyBank)
    }).catch(function (err) {
      res.status(500).send(err)
    })
    // const piggyBank = new piggyBank(payload);
    // try {
    //   piggyBank.save()
    //   res.json(piggyBank)
    // }
    // catch (err){
    //   res.status(500).send(err)
    // }
    

  },
  updatePiggyBank: (req, res) => {
    const payload = req.body
    PiggyBank.updateOne({ _id: payload._id }, payload).then(function (piggyBank) {
      res.json(piggyBank)
    }).catch(function (err) {
      res.status(500).send(err)
    })
  },
  deletePiggyBank: (req, res) => {
    const { id } = req.params
    PiggyBank.deleteOne({ _id: id }).then(function (piggyBank) {
      res.json(piggyBank)
    }).catch(function (err) {
      res.status(500).send(err)
    })
    

  },
  getPiggyBanks: (req, res, next) => {

    //   piggyBank.find(function (err, piggyBanks) {
    //     if (err) return console.error(err);
    //     console.log(piggyBanks);
    // })


    //   res.json(piggyBanksController.getpiggyBanks());
    PiggyBank.find({}).then(function (piggyBanks) {
      res.json(piggyBanks)
    }).catch(function (err) {
      res.status(500).send(err)
    })


    // eslint-disable-next-line no-undef
    console.log(next)
  },

  getPiggyBank: (req, res, next) => {
    const { id } = req.params
    PiggyBank.findById(id).then(function (piggyBank) {
      res.json(piggyBank)
    }).catch(function (err) {
      res.status(500).send(err)
    })
    // eslint-disable-next-line no-undef
    console.log(next)
  }
}

// eslint-disable-next-line no-undef
module.exports = piggyBankController
