describe("Dashboard", () => {
  beforeEach(() => {
    cy.login();
  });

  it("Deve exibir informações do usuário", () => {
    cy.get("[data-cy=user-avatar]").should("exist");
    cy.get("[data-cy=user-name]").should("have.attr", "disabled");
    cy.get("[data-cy=user-email]").should("exist");
  });

  it("Deve permitir logout", () => {
    cy.logout();
    cy.contains("Sign In").should("exist");
  });
});
