import React from "react";

const AnswerBlock = ({
  userPromt,
  selectedOption,
  data,
  gameFinished,
  handleNextQuestion,
  currentQuestion
}) => {
  return (
    <div>
      <div>
        <p>{userPromt}</p>
      </div>
      <div>
        <p>Your Answer: {selectedOption}</p>
      </div>
      <div>
        <p>
          Correct Answer:{" "}
          {data[currentQuestion].options[data[currentQuestion].correctOption]}
        </p>
      </div>
      {!gameFinished && (
        <div>
          <button onClick={handleNextQuestion}>Next Question</button>
        </div>
      )}
    </div>
  );
};

export default AnswerBlock;
