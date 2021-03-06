import locators from '../fixtures/locators';

describe('todo vue test', () => {

  beforeEach(() => {
    cy.visit(Cypress.config('baseUrl') as string);
  });

  it('can add new todo', () => {
    const todo = 'Test Vue Todo with Cypress';
    cy.get(locators.vueTodo.newTodoInput).type(`${todo}{enter}`);
    cy.get(locators.vueTodo.todoLabel).first().should('have.text', todo);
  });

  it('checks todo placeholders', () => {
    const expectPlaceHolders = 'What needs to be done?'
    cy.get(locators.vueTodo.newTodoInput).should('have.attr', 'placeholder', expectPlaceHolders);
  });
});