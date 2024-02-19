import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import StartingPage from "./components/StartingPage";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<StartingPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
