import { useState } from "react";
import { Link } from "react-router-dom";

const QuizPage = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div>
      <h1>Quiz</h1>
      <h2>Question</h2>
      <p>question text</p>
      <h2>Answers</h2>
      <div>
        <input
          type="radio"
          value="option1"
          checked={selectedOption === "option1"}
          onChange={handleOptionChange}
        />
        <label>Option 1</label>
      </div>
      <div>
        <input
          type="radio"
          value="option2"
          checked={selectedOption === "option2"}
          onChange={handleOptionChange}
        />
        <label>Option 2</label>
      </div>
      <div>
        <input
          type="radio"
          value="option3"
          checked={selectedOption === "option3"}
          onChange={handleOptionChange}
        />
        <label>Option 3</label>
      </div>
      <div>
        <input
          type="radio"
          value="option4"
          checked={selectedOption === "option4"}
          onChange={handleOptionChange}
        />
        <label>Option 4</label>
      </div>
      <Link to="/result">
        <button>Next</button>
      </Link>
    </div>
  );
};

export default QuizPage;
