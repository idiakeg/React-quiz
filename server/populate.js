require("dotenv").config();

const uri = process.env.CONNECTION_STRING;

const connectToDB = require("./db/connect");
const questionModel = require("./model/questionSchema");
const data = require("./data");

const start = async () => {
	await connectToDB(uri);
	console.log("connected successfully!!");
	await questionModel.create(data);
	console.log("successfully added questions to the DB");
};

start();
