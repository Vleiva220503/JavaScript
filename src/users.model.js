
const mongoose = require('mongoose');

const User = mongoose.model('User',{
    name: {type: String, required: true},
    lastname: String,
});

module.exports = users;