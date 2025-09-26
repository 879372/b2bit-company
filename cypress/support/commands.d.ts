
declare namespace Cypress {
  interface Chainable<Subject = any> {
    login(): Chainable<void>;
    logout(): Chainable<void>;
  }
}
