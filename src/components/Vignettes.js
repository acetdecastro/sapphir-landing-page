import React, { useState } from 'react';
import { dataQuestions } from '../utils/data';

import { ReactComponent as ChevronDownIcon } from 'heroicons/solid/chevron-down.svg';

const Vignettes = () => {
  const [questions, setQuestions] = useState(dataQuestions);

  const handleQuestionToggle = (id) => {
    let allQuestions = [...questions];

    const questionsExcludingTheSelectedOne = allQuestions.filter(
      (question) => question.id !== id
    );

    questionsExcludingTheSelectedOne.forEach((q) => (q.isOpen = false));

    let selectedQuestion = allQuestions.find((q) => q.id === id);

    selectedQuestion.isOpen = selectedQuestion.isOpen ? false : true;

    // Sort questions by their id
    allQuestions = [
      selectedQuestion,
      ...questionsExcludingTheSelectedOne,
    ].sort((a, b) => (a.id > b.id ? 1 : -1));

    setQuestions(allQuestions);
  };

  return (
    <div className="p-8 flex flex-col items-center bg-gradient-to-br from-indigo-100 via-blue-100 space-y-2">
      <h3 className="leading-8 text-2xl text-gray-900 font-bold">
        Good to know
      </h3>
      <div className="flex flex-col space-y-2">
        {questions.map((question) => {
          return (
            <div
              key={question.id}
              className="flex flex-col justify-start p-4 bg-white rounded-md shadow-md space-y-3"
            >
              <div className="flex">
                <div className="flex space-x-4">
                  <p className="leading-5 tracking-wide text-sm font-semibold break-words w-56 text-gray-700">
                    {question.title}
                  </p>
                  <button
                    onClick={() => handleQuestionToggle(question.id)}
                    className="bg-blue-400 rounded-full h-5 w-5 focus:outline-none"
                  >
                    <ChevronDownIcon className="h-5 w-5 text-white" />
                  </button>
                </div>
              </div>

              {question.isOpen && (
                <p className="leading-5 text-xs font-semibold text-gray-600 tracking-wide w-56">
                  {question.info}
                </p>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Vignettes;
