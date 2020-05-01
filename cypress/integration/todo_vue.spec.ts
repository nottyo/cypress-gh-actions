import locators from '../fixtures/locators';

describe('todo vue test', () => {

  beforeEach(() => {
    cy.visit(Cypress.config('baseUrl') as string);
  });

  it('can add new todo', () => {
    const todo = 'Test Vue Todo with Cypress';
    cy.get(locators.newTodoInput).type(`${todo}{enter}`);
    cy.get(locators.todoLabel).first().should('have.text', todo);
  });

  it('checks todo placeholders', () => {
    const expectPlaceHolders = 'My Todos'
    cy.get(locators.newTodoInput).should('have.attr', 'placeholder', expectPlaceHolders);
  });
});