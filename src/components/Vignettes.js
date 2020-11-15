import React, { useState } from 'react';
import { dataQuestions } from '../utils/data';

import { ReactComponent as ChevronDownIcon } from 'heroicons/solid/chevron-down.svg';
import { ReactComponent as ChevronUpIcon } from 'heroicons/solid/chevron-up.svg';

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
    <div className="p-8 flex flex-col items-center bg-gradient-to-br from-indigo-100 via-blue-100 space-y-3 md:space-y-5">
      <h3 className="leading-8 text-2xl text-gray-900 font-bold md:text-3xl">
        Good to know
      </h3>
      <section className="flex flex-col space-y-4 md:w-3/6">
        {questions.map((question) => {
          return (
            <article
              key={question.id}
              className="flex flex-col justify-start p-4 bg-white rounded-md shadow-md space-y-3"
            >
              <div className="flex">
                <div className="flex space-x-4">
                  <p className="leading-5 tracking-wide text-sm font-medium break-words w-56 text-gray-700 md:w-72 md:text-base">
                    {question.title}
                  </p>
                  <button
                    onClick={() => handleQuestionToggle(question.id)}
                    className="bg-blue-400 rounded-full h-5 w-5 focus:outline-none"
                  >
                    {question.isOpen ? (
                      <ChevronUpIcon className="h-5 w-5 text-white" />
                    ) : (
                      <ChevronDownIcon className="h-5 w-5 text-white" />
                    )}
                  </button>
                </div>
              </div>

              {question.isOpen && (
                <p className="leading-6 text-xs font-medium text-gray-600 tracking-wide w-56 md:w-72 md:text-sm">
                  {question.info}
                </p>
              )}
            </article>
          );
        })}
      </section>
    </div>
  );
};

export default Vignettes;
