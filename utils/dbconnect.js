const mongoose = require('mongoose');

const DB_URL = `mongodb+srv://publicAuth:vJGbnZgXC1ISfuGZ@cluster0.3pzjzc9.mongodb.net/?retryWrites=true&w=majority`

const dbConnect = () => {
    mongoose.connect(DB_URL).then((connect) => {
            console.log("connection succesful");
        })
        .catch((err) => {
            console.log(err.message);
        })
}

module.exports = dbConnect;