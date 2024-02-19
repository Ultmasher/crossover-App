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
      <div className="flex flex-col mt-6 py-5 px-8 rounded bg-indigo-300 text-2xl dark:bg-indigo-900">
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
              className="bg-indigo-400 mt-4 pt-2 pb-3 px-4 rounded dark:bg-indigo-600"
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
