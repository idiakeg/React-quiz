const express = require("express");
const app = express();
require("dotenv").config();

const uri = process.env.CONNECTION_STRING;
const port = process.env.PORT;

const connectToDB = require("./db/connect");

const getQuestions = require("./controller/controllers");

app.get("/", getQuestions);

const start = async () => {
	try {
		await connectToDB(uri);
		console.log("connected to DB");
		app.listen(port, () => console.log(`server is running on port: ${port}`));
	} catch (error) {
		console.log("couldnot connect", error);
	}
};

start();
