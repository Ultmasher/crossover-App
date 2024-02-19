import React from "react";

const AnswerBlock = ({
  userPromt,
  selectedOption,
  data,
  gameFinished,
  handleNextQuestion,
  currentQuestion,
}) => {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col mt-6 p-5 rounded bg-indigo-300 text-2xl">
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
          <div className="flex justify-center">
            <button
              onClick={handleNextQuestion}
              className="bg-indigo-400 mt-4 pt-2 pb-3 px-4 rounded"
            >
              Next Question
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AnswerBlock;
