const { connect } = require("mongoose");

const MONGO_DB_URL = "mongodb+srv://users:user1@cluster0.pkn90th.mongodb.net";

const DB_NAME = "LPU";

const myFunction = async () => {
    try {
        await connect(`${MONGO_DB_URL}/${DB_NAME}`);
        console.log("Connection is successful");
    } catch (err) {
        console.log(err);
    }
};

myFunction();

module.exports = {};
