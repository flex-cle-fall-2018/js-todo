(function() {

  const todos = [];
  todos.push('Mow the lawn');
  todos.push('Buy milk');

  const todoUl = document.querySelector('#todoList');
  const todoForm = document.querySelector('#addTodoForm');
  const todoInput = document.querySelector('input[name=newTodo]');
  const addTaskButton = document.querySelector('#addTodoForm input[type=submit]');

  todoForm.addEventListener('submit', function(event) {
    event.preventDefault();
  });
  addTaskButton.addEventListener('click', addTask);

  function render() {
    // Clear existing to-do list
    todoUl.innerHTML = '';

    // Render to-do list items
    for (let i = 0; i < todos.length; i++) {
      const currentTodo = todos[i];

      const todoLi = document.createElement('li');
      todoLi.textContent = currentTodo;
      todoUl.appendChild(todoLi);
    }
  }

  function addTask() {
    // Get value of input
    const todoText = todoInput.value;

    // Add item to JavaScript array
    todos.push(todoText);

    // Re-render list on page
    render();
  }

  render();

})();
