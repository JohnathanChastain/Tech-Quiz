describe('End-to-End Testing', () => {
    it('should load the application', () => {
        cy.visit('/');
        cy.contains('Welcome to the Application');
    });

    it('should navigate to the about page', () => {
        cy.visit('/');
        cy.get('a[href="/about"]').click();
        cy.contains('About Us');
    });
});