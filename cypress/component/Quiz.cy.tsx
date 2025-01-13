import React from 'react';
import Quiz from '../../client/src/components/Quiz';

const questions = [
  {
    question: 'What is the capital of France?',
    options: ['New York', 'London', 'Paris', 'Dublin'],
    answer: 'Paris',
  },
  {
    question: 'What is the capital of Ireland?',
    options: ['New York', 'London', 'Paris', 'Dublin'],
    answer: 'Dublin',
  },
  {
    question: 'What is the capital of England?',
    options: ['New York', 'London', 'Paris', 'Dublin'],
    answer: 'London',
  },
  {
    question: 'What is the capital of USA?',
    options: ['New York', 'London', 'Paris', 'Dublin'],
    answer: 'New York',
  },
];

describe('Quiz', () => {

  it('renders the quiz component', () => {
    cy.mount(<Quiz/>);
  });
});

it('should display the first question', () => {
  cy.mount(<Quiz/>);
  cy.get('button').should('have.text', 'Start Quiz');
});

it('should display the options', () => {
  cy.mount(<Quiz/>);
  cy.get('button').click();
  cy.get('button').should('have.length', 4);
});

it('should display the next question after selecting an option', () => {
  cy.mount(<Quiz/>);
  cy.get('button').click();
  cy.get('button').first().click();
  cy.get('button').should('have.length', 4);
});

it('should display the quiz completed message', () => {
  cy.mount(<Quiz/>);
  cy.get('button').click();
  for (let i = 0; i < 10; i++) {
    cy.get('button').first().click();
  }
  cy.get('h2').should('have.text', 'Quiz Completed');
  cy.get('button').should('have.text', 'Take New Quiz');
});

it('should start a new quiz', () => {
  cy.mount(<Quiz/>);
  cy.get('button').click();
  for (let i = 0; i < 10; i++) {
    cy.get('button').first().click();
  }
  cy.get('button').contains('Take New Quiz').click();
  cy.get('button').should('have.length', 4);
});



export default Quiz;
