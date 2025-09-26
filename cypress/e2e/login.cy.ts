describe("Página de Login", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Deve logar com credenciais válidas", () => {
    cy.get("[data-cy=email]").type(Cypress.env("valid_email"));
    cy.get("[data-cy=password]").type(Cypress.env("valid_password"));
    cy.get("[data-cy=submit]").click();

    cy.url().should("include", "/dashboard");
    cy.get("[data-cy=dashboard-card]").should("exist");

  });

  it("Deve falhar com credenciais inválidas", () => {
    cy.get("[data-cy=email]").type(Cypress.env("invalid_email"));
    cy.get("[data-cy=password]").type(Cypress.env("invalid_password"));
    cy.get("[data-cy=submit]").click();

    cy.contains("Usuário e/ou senha incorreto(s)").should("exist");
  });
});
