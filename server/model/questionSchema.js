const { Schema, model, model } = require("mongoose");

const questionSchema = new Schema({
	questionText: String,
	answerOption: [
		{
			answerText: String,
			isCorrect: Boolean,
		},
	],
});

const questionModel = new model("quiz", questionSchema);

module.exports = questionModel;
