const user = require('./users.model');

const user = {
    List: async (req, res) =>{
        const users = await User.find();
        res.status(200);
        res.send(users);
    }
}

module.exports = user;