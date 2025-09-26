Cypress.Commands.add("login", () => {
  cy.visit("/");
  cy.get("[data-cy=email]").type(Cypress.env("valid_email"));
  cy.get("[data-cy=password]").type(Cypress.env("valid_password"));
  cy.get("[data-cy=submit]").click();
  cy.url().should("include", "/dashboard");
});

Cypress.Commands.add("logout", () => {
  cy.get("[data-cy=logout]").click();
  cy.url().should("include", "/");
});
