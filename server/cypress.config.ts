import { defineConfig } from 'cypress';

export default defineConfig({
  component: {
    devServer: {
      framework: 'react',
      bundler: 'webpack',
    },
    specPattern: 'client/cypress/component/**/*.cy.{js,jsx,ts,tsx}',
    supportFile: 'client/cypress/support/component.ts',
  },
  e2e: {
    baseUrl: 'http://localhost:3000',
    specPattern: 'client/cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
    supportFile: 'client/cypress/support/e2e.ts',
  },
});