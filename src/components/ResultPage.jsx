import React from "react";
import { Link } from "react-router-dom";

const ResultPage = ({ resultData, setResultData }) => {
  console.log(resultData);

  const handleClick = () => {
    setResultData({
      userName: "",
      playedQuestions: 0,
      correctAnswer: 0,
      points: 0,
    });
  };

  return (
    <div className="flex  min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm lg:w-full">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white">
          Result Quiz for {resultData.userName}
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <div className="space-y-6">
          <div>
            <div className="mt-2">
              <table className="w-full md:table-fixed bg-gray-200 border-collapse border">
                <thead>
                  <tr>
                    <th className="border border-slate-300 p-2">User</th>
                    <th className="border border-slate-300 p-2">Score</th>
                    <th className="border border-slate-300 p-2">
                      Right Answer
                    </th>
                    <th className="border border-slate-300 p-2">
                      total Questions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-slate-300 p-3">
                      {resultData.userName}
                    </td>
                    <td className="border border-slate-300 p-3">
                      {resultData.points}
                    </td>
                    <td className="border border-slate-300 p-3">
                      {resultData.correctAnswer}
                    </td>
                    <td className="border border-slate-300 p-3">
                      {resultData.playedQuestions}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <Link to="/">
              <button
                type="submit"
                onClick={handleClick}
                className="flex w-full justify-center rounded-md bg-[#463181] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#8166ca] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Restart Quiz!
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultPage;
