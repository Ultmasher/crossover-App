import React from "react";

const ResultPage = () => {
  return (
    <div>
      <h1>Quiz Results</h1>
      <table>
        <thead>
          <tr>
            <th>Question</th>
            <th>Your Answer</th>
            <th>Correct Answer</th>
          </tr>
        </thead>
        <tbody>
          {/* {results.map((result, index) => (
            <tr key={index}>
              <td>{result.question}</td>
              <td>{result.yourAnswer}</td>
              <td>{result.correctAnswer}</td>
            </tr>
          ))} */}
        </tbody>
      </table>
    </div>
  );
};

export default ResultPage;
