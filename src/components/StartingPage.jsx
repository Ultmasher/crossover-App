import React from "react";
import { Link } from "react-router-dom";

const StartingPage = ({ resultData, setResultData }) => {
  const handleChange = (e) => {
    setResultData((prev) => ({
      ...prev,
      userName: e.target.value,
    }));
  };
  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white">
          React Quiz
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <div className="space-y-6">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium leading-6 text-white"
            >
              Name:
            </label>
            <div className="mt-2">
              <input
                onChange={handleChange}
                id="name"
                name="name"
                type="text"
                value={resultData.userName}
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-2"
              />
            </div>
          </div>

          <div>
            <Link to="/quiz">
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-[#463181] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#8166ca] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Start!
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartingPage;
