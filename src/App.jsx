import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import StartingPage from "./components/StartingPage";
import QuizPage from "./components/QuizPage";
import ResultPage from "./components/ResultPage";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<StartingPage />} />
          <Route path="/quiz" element={<QuizPage />} />
          <Route path="/result" element={<ResultPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
