import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import StartingPage from "./components/StartingPage";
import QuizPage from "./components/QuizPage";
import ResultPage from "./components/ResultPage";
import "./App.css";

function App() {
  const [resultData, setResultData] = useState({
    userName: "",
    playedQuestions: 0,
    correctAnswer: 0,
    points: 0,
  });
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <StartingPage
                resultData={resultData}
                setResultData={setResultData}
              />
            }
          />
          <Route
            path="/quiz"
            element={
              <QuizPage resultData={resultData} setResultData={setResultData} />
            }
          />
          <Route
            path="/result"
            element={
              <ResultPage
                resultData={resultData}
                setResultData={setResultData}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
