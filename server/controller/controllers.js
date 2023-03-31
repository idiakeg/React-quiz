const questionModel = require("../model/questionSchema");

const getQuestions = async (req, res) => {
	try {
		const payload = await questionModel.find({});
		return res.status(200).json(payload);
	} catch (error) {
		console.log("something went wrong", error);
	}
};

module.exports = getQuestions;
