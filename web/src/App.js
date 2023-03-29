import React, { useState } from "react";
import "./App.css";
import questions from "./data";

const App = () => {
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [done, setDone] = useState(false);
	const [score, setScore] = useState(0);

	const handleBtnClick = (isCorrect) => {
		let newScore = score + 1;
		if (isCorrect) {
			setScore(newScore);
		}
		let newQuestion = currentQuestion + 1;
		if (newQuestion < questions.length) {
			setCurrentQuestion(newQuestion);
		} else {
			setDone(true);
		}
	};

	const handleRestart = () => {
		setDone(false);
		setCurrentQuestion(0);
		setScore(0);
	};
	return (
		<div className="appContainer">
			{done ? (
				<div className="finished">
					<div className="userScore">
						You scored <strong>{score}</strong> out of{" "}
						<strong>{questions.length}</strong>
					</div>
					<button className="btnRestart" onClick={handleRestart}>
						Reset Quiz
					</button>
				</div>
			) : (
				<div className="quiz">
					<div className="questionSection">
						<div className="questionCount">
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className="questionText">
							{questions[currentQuestion].questionText}
						</div>
					</div>
					<div className="answerSection">
						{questions[currentQuestion].answerOption.map((answer, index) => {
							return (
								<button
									onClick={() => handleBtnClick(answer.isCorrect)}
									key={index}
									className="btn"
								>
									{answer.answerText}
								</button>
							);
						})}
					</div>
				</div>
			)}
		</div>
	);
};

export default App;
