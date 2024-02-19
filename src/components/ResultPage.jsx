import React from "react";

const ResultPage = ({ resultData }) => {
  console.log(resultData);
  return (

    <div className="flex  min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm lg:w-full">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white">
          Result Quiz for Max
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <div className="space-y-6">
          <div>
            <div className="mt-2">
              <table className="w-full md:table-fixed bg-gray-200 border-collapse border">
                <thead>
                  <tr>
                    <th className="border border-slate-300 p-2">Score</th>
                    <th className="border border-slate-300 p-2">
                      Right Answer
                    </th>
                    <th className="border border-slate-300 p-2">
                      Wrong Answer
                    </th>
                    <th className="border border-slate-300 p-2">
                      total Questions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-slate-300 p-3">45</td>
                    <td className="border border-slate-300 p-3">6</td>
                    <td className="border border-slate-300 p-3">4</td>
                    <td className="border border-slate-300 p-3">10</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-[#463181] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#8166ca] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Restart Quiz!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultPage;
