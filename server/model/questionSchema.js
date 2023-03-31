const { Schema, model } = require("mongoose");

const questionSchema = new Schema({
	questionText: String,
	answerOption: [
		{
			answerText: String,
			isCorrect: Boolean,
		},
	],
});

const questionModel = model("quiz", questionSchema);

module.exports = questionModel;
