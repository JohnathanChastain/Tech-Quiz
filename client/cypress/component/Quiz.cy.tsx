import React from 'react';

interface QuizProps {
  question: string;
  options: string[];
}

const Quiz: React.FC<QuizProps> = ({ question, options }) => {
  return (
    <div data-testid="quiz-container">
      <h2 data-testid="quiz-question">{question}</h2>
      <ul>
        {options.map((option, index) => (
          <li key={index} data-testid="quiz-option">
            {option}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Quiz;
