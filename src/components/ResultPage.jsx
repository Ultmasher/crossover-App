import React from "react";

const ResultPage = ({ resultData }) => {
  console.log(resultData);
  return (
    <div>
      <h1>Quiz Results</h1>
      <table>
        <thead>
          <tr>
            <th>User</th>
            <th>Correct answers</th>
            <th>Points</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Karl</td>
            <td>{resultData.correctAnswer}</td>
            <td>{resultData.points}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ResultPage;
