const User = require('./models/User');



const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/MyDB', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
// eslint-disable-next-line no-undef
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    // eslint-disable-next-line no-undef
    console.log('connect')
});

User.find(function (err, users) {
    // eslint-disable-next-line no-undef
    if (err) return console.error(err);
    // eslint-disable-next-line no-undef
    console.log(users);
})