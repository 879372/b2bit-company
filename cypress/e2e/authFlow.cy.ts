describe("Fluxo de autenticação completo", () => {
  it("Deve logar e deslogar com sucesso", () => {
    cy.login();

    cy.url().should("include", "/dashboard");
    cy.get("[data-cy=dashboard-card]").should("exist");

    cy.logout();
    cy.contains("Sign In").should("exist");
  });
});
