import { mount } from 'cypress/react';
import App from '../../src/App';

describe('App Component', () => {
  it('renders correctly', () => {
    mount(<App />);
    cy.get('h1').should('contain', 'Welcome to the App');
  });
});