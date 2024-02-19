import React from "react";
import { Link } from "react-router-dom";

const StartingPage = () => {
  return (
    <div>
      <h1>React Quiz</h1>
      <Link to="/quiz">
        <button>Start</button>
      </Link>
    </div>
  );
};

export default StartingPage;
