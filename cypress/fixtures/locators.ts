const locators = {
  vueTodo: {
    newTodoInput: '.new-todo',
    todoLabel: '.todo > .view > label',
  },
  reactTodo: {
    newTodoInput: '.new-todo',
    todoLabel: 'div[class="view"] > label',
    toggleAll: 'input[class="toggle"]',
    clearCompleted: 'button[class="clear-completed"]',
    todoList: 'ul[class="todo-list"]',
  }
}

export default locators;