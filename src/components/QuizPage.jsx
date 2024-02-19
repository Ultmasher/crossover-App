import { useState, useEffect } from "react";
import React from "react";
import { Link } from "react-router-dom";
import fetchedData from "../data/questions2.json";
import axios from "axios";
import ThemeToggleButton from "./ThemeToggleButton";
import AnswerBlock from "./AnswerBlock.jsx";

const QuizPage = ({ resultData, setResultData }) => {
  const [data, setData] = useState([...fetchedData.questions]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [selectedIndex, setSelectedIndex] = useState("");
  const [isSubmitButtonShown, setIsSubmitButtonShown] = useState(false);
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState(false);
  const [gameFinished, setGameFinished] = useState(false);
  const [isNextQuestionButtonShown, setIsNextQuestionButtonShown] =
    useState(false);
  const [userPromt, setUserPromt] = useState("");
  // const [resultData, setResultData] = useState({
  //   playedQuestions: 0,
  //   correctAnswer: 0,
  //   points: 0,
  // });

  //fetch with axios
  //console.log(data);

  const handleOptionChange = (event) => {
    setIsSubmitButtonShown(true);
    setSelectedIndex(
      data[currentQuestion].options.findIndex((el) => el === event.target.value)
    );

    setSelectedOption(event.target.value);
  };

  const submitAnswer = () => {
    // check if answer was right
    setIsSubmitButtonShown(false);
    setIsNextQuestionButtonShown(true);
    setIsAnswerSubmitted(true);
    const selectedAnswer = selectedIndex;
    const correctAnswer = data[currentQuestion].correctOption;
    if (selectedAnswer === correctAnswer) {
      // if answer was right say congratulation and add points to
      setUserPromt("Your Answer is correct!");
    } else {
      // if answer was wrong say which was right answer
      setUserPromt("So sorry, thats not right!");
    }
    setResultData((prevState) => ({
      ...prevState,
      playedQuestions: prevState.playedQuestions + 1,
      correctAnswer:
        selectedAnswer === correctAnswer
          ? prevState.correctAnswer + 1
          : prevState.correctAnswer,
      points:
        selectedAnswer === correctAnswer
          ? prevState.points + data[currentQuestion].points
          : prevState.points, // Erhöhen Sie die Punkte entsprechend
    }));
    if (data.length - 1 === currentQuestion) {
      setGameFinished(true);
    }
    console.log(resultData);
  };

  const handleNextQuestion = () => {
    if (currentQuestion < data.length) {
      setCurrentQuestion((prev) => prev + 1);
    }
    setSelectedIndex("");
    setSelectedOption("");
    setIsNextQuestionButtonShown(false);
    setIsSubmitButtonShown(true);
    setIsAnswerSubmitted(false);
  };

  React.useEffect(() => {
    // Apply the initial theme based on localStorage
    const savedTheme = localStorage.getItem("theme");
    document.documentElement.classList.toggle("dark", savedTheme === "dark");
  }, []);

  return (
    <div className="flex-column justify-center items-center h-screen m-0 p-10 bg-indigo-200 dark:bg-indigo-950  dark:text-white">
      <div className="flex justify-end">
        <ThemeToggleButton />
      </div>
      <h1 className="flex items-center justify-center my-1 text-lg text-zinc-800 dark:text-white">
        React Quiz
      </h1>
      <h2 className="flex items-center justify-center my-1 text-lg text-zinc-800 dark:text-white text-center">
        {" "}
        Question {currentQuestion + 1}
      </h2>
      <p className="flex items-center justify-center py-2 text-3xl text-zinc-950 dark:text-white">
        {data[currentQuestion].question}
      </p>

      <div className="flex-column justify-center items-center mt-4">
        {data[currentQuestion].options.map((item, index) => (
          <div key={index}>
            <input
              type="radio"
              value={item}
              checked={selectedOption === item}
              onChange={handleOptionChange}
              disabled={isAnswerSubmitted}
            />
            <label className="text-3xl"> {item}</label>
          </div>
        ))}
      </div>

      {/* Submit button */}
      {isSubmitButtonShown && (
        <div>
          <button onClick={submitAnswer}>Submit</button>
        </div>
      )}

      {/* Showing current answer results */}
      {isNextQuestionButtonShown && (
        <AnswerBlock
          userPromt={userPromt}
          selectedOption={selectedOption}
          data={data}
          gameFinished={gameFinished}
          handleNextQuestion={handleNextQuestion}
          currentQuestion={currentQuestion}
        />
      )}

      {/* Results button */}
      {gameFinished && (
        <div>
          <Link to="/result">
            <button>View Results</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default QuizPage;
