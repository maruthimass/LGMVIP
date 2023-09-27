document.addEventListener('DOMContentLoaded', function() {
    const addBtn = document.getElementById('addBtn');
    const taskInput = document.getElementById('task');
    const taskList = document.getElementById('taskList');
    const clearBtn = document.getElementById('clearBtn');
  
    addBtn.addEventListener('click', function() {
      const taskText = taskInput.value.trim();
      if (taskText !== '') {
        const li = document.createElement('li');
        li.innerHTML = `
          <label class="love-checkbox">
            <input type="checkbox" class="hidden-checkbox">
            <span class="love-symbol"></span>
          </label>
          <span>${taskText}</span>
          <button class="deleteBtn">Delete</button>
        `;
        taskList.appendChild(li);
        taskInput.value = '';
      }
    });
  
    taskList.addEventListener('click', function(e) {
      if (e.target.classList.contains('deleteBtn')) {
        e.target.parentNode.remove();
      }
    });
  
    clearBtn.addEventListener('click', function() {
      const completedTasks = document.querySelectorAll('.love-checkbox input[type="checkbox"]:checked');
      completedTasks.forEach(task => {
        task.parentNode.parentNode.remove();
      });
    });
  });
  