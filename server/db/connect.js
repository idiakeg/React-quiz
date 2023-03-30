// connect to DB
const mongoose = require("mongoose");

const connectToDB = async (uri) => {
	await mongoose.connect(uri);
};

module.exports = connectToDB;
