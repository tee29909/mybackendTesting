const User = require("../models/User");
const loginController = {
  Login: (req, res, next) => {
    //   User.find(function (err, users) {
    //     if (err) return console.error(err);
    //     console.log(users);
    // })

    //   res.json(usersController.getUsers());
    const payload = req.body
    User.findOne({username:payload.username ,password:payload.password}).then(function (piggyBank) {
      res.json(piggyBank)
    }).catch(function (err) {
      res.status(500).send(err)
    })

    // eslint-disable-next-line no-undef
    console.log(next);
  },
};
// eslint-disable-next-line no-undef
module.exports = loginController;
