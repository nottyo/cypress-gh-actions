import locators from '../fixtures/locators';

describe('todo test', () => {

  beforeEach(() => {
    cy.visit(Cypress.config('baseUrl') as string);
  });

  it('can add new todo', () => {
    const todo = 'Test Cypress';
    cy.get(locators.newTodoInput).type(`${todo}{enter}`);
    cy.get(locators.todoLabel).first().should('have.text', todo);
  });
});