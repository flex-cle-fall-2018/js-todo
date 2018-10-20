(function() {

  /**
   * Items that still need done.
   */
  const todos = [
    'Mow the lawn',
    'Buy milk'
  ];

  /**
   * Items that are complete.
   */
  const dones = [];

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
  const doneUl = document.querySelector('#doneList');

  todoForm.addEventListener('submit', function(event) {
    event.preventDefault();
  });
  addTaskButton.addEventListener('click', addTask);

  function render() {
    // Clear existing to-do list
    todoUl.innerHTML = '';
    doneUl.innerHTML = '';

    // Indicate if list is empty
    if (todos.length === 0) {
      const todoLi = document.createElement('li');
      todoLi.textContent = 'Nothing to do!';
      todoUl.appendChild(todoLi);
    }

    // Render to-do list items
    for (let i = 0; i < todos.length; i++) {
      const currentTodo = todos[i];

      // Create list item
      const todoLi = document.createElement('li');
      todoLi.textContent = currentTodo;

      // Create delete button
      const deleteButton = document.createElement('button');
      deleteButton.innerHTML = '&times;';
      deleteButton.addEventListener('click', function() {
        // Doesn't work - they will all come back
        // todoLi.remove();

        // Modify the single source of truth
        todos.splice(i, 1);
        render();
      });

      // Create checkbox
      const checkbox = document.createElement('input');
      checkbox.setAttribute('type', 'checkbox');
      checkbox.addEventListener('click', function() {
        const completedTodo = todos.splice(i, 1);
        dones.push(completedTodo);
        render();
      });

      // Insert all elements as needed
      todoLi.appendChild(deleteButton);
      todoLi.prepend(checkbox);
      todoUl.appendChild(todoLi);
    }

    // Render done list items
    for (let i = 0; i < dones.length; i++) {
      const currentDone = dones[i];

      // Create list item
      const doneLi = document.createElement('li');
      doneLi.textContent = currentDone;

      // Create delete button
      const deleteButton = document.createElement('button');
      deleteButton.innerHTML = '&times;';
      deleteButton.addEventListener('click', function() {
         // Modify the single source of truth
         dones.splice(i, 1);
         render();
      });

      // Create checkbox
      const checkbox = document.createElement('input');
      checkbox.setAttribute('type', 'checkbox');
      checkbox.checked = true;
      checkbox.addEventListener('click', function() {
        const incompleteTodo = dones.splice(i, 1);
        todos.push(incompleteTodo);
        render();
      });
      
      // Insert all elements as needed
      doneLi.prepend(checkbox);
      doneLi.append(deleteButton);
      doneUl.appendChild(doneLi);
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
