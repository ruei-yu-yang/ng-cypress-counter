context("App", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it('should have the title "Writing your first Cypress test"', () => {
    cy.title().should("eq", "Writing your first Cypress test");
  });

  xit('should show the counter component when  the "Toggle Counter Visibility" button is clicked',()=>{
    cy.get('.counter__heading').should('have.length',0);
    cy.get(".counter").should("have.length", 0);
    cy.contains('Toggle Counter Visibility').click();
    cy.get('.counter__heading').should('be.visible');
    cy.get('.counter').should('be.visible');
  });

  it('should show the action buttons on hovering the counter card',()=>{
    cy.contains('Toggle Counter Visibility').click();
    cy.get('.counter').trigger('mouseover');
    cy.get('.counter__actions__action').should('have.length',3);
    cy.contains('Increment').should('be.visible');
    cy.contains('Decrement').should('be.visible');
    cy.contains("Reset").should("be.visible");
  })
});
