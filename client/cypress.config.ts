import { defineConfig } from 'cypress';

export default defineConfig({
  component: {
    devServer: {
      framework: 'react',
      bundler: 'webpack',
    },
    supportFile: 'client/cypress/support/component.ts',
    specPattern: 'client/cypress/component/**/*.cy.{js,jsx,ts,tsx}',
  },
  e2e: {
    baseUrl: 'http://localhost:3000',
    supportFile: 'client/cypress/support/e2e.ts',
    specPattern: 'client/cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
  },
});