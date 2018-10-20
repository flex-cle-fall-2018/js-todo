(function() {

  const todos = [
    'Mow the lawn',
    'Buy milk'
  ];

  // Prevent accidental form submission
  // Blocks the enter key press event
  // DEMO ONLY - this makes it less user friendly
  document.onkeydown = event => {
    if (event.keyCode === 13) {
      event.preventDefault();
    }
  };

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

    // Indicate if list is empty
    if (todos.length === 0) {
      const todoLi = document.createElement('li');
      todoLi.textContent = 'Nothing to do!';
      todoUl.appendChild(todoLi);
    }

    // Render to-do list items
    for (let i = 0; i < todos.length; i++) {
      const currentTodo = todos[i];

      const todoLi = document.createElement('li');
      todoLi.textContent = currentTodo;

      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'X';
      deleteButton.addEventListener('click', function() {
        // Doesn't work - they will all come back
        // todoLi.remove();

        // Modify the single source of truth
        todos.splice(i, 1);
        render();
      });

      todoLi.appendChild(deleteButton);
      todoUl.appendChild(todoLi);
    }
  }

  function addTask() {
    // Get value of input
    const todoText = todoInput.value;

    // If the input has text...
    if (todoText.length > 0) {
      // Add item to JavaScript array
      todos.push(todoText);

      // Clear input
      todoInput.value = '';

      // Re-render list on page
      render();
    }
  }

  render();

})();
