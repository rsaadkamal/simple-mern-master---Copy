const mongoose = require('mongoose');

mongoose.connect('mongodb://172.24.59.99/simple-mern');

module.exports = mongoose;
