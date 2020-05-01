import locators from '../fixtures/locators';
const reactTodo = 'http://todomvc.com/examples/react/'

describe('todo react test', () => {

  beforeEach(() => {
    cy.visit(reactTodo);
  });

  it('can add new todo', () => {
    const todo = 'Test React Todo with Cypress';
    cy.get(locators.reactTodo.newTodoInput).type(`${todo}{enter}`);
    cy.get(locators.reactTodo.todoLabel).first().should('have.text', todo);
  });

  it('should be able to delete todo', () => {
    const todo = 'will be deleted'
    cy.get(locators.reactTodo.newTodoInput).type(`${todo}{enter}`);
    cy.get(locators.reactTodo.toggleAll).click();
    cy.get(locators.reactTodo.clearCompleted).click();
    cy.get(locators.reactTodo.todoList).should('not.be.visible')
  })
});