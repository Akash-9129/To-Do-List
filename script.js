$(document).ready(function() {
    const $newTaskInput = $('#new-task');
    const $taskList = $('#task-list');
  
    $('#add-task').on('click', function() {
      const taskText = $newTaskInput.val().trim();
  
      if (taskText !== '') {
        const $taskItem = $('<li><span class="task-text">' + taskText + '</span><button class="edit-task">Edit</button><button class="delete-task">Delete</button></li>');
        $taskList.append($taskItem);
        $newTaskInput.val('');
      }
    });
  
    $taskList.on('click', '.edit-task', function() {
      const $taskItem = $(this).closest('li');
      const $taskText = $taskItem.find('.task-text');
      const newText = prompt('Edit task:', $taskText.text());
  
      if (newText !== null) {
        $taskText.text(newText);
      }
    });
  
    $taskList.on('click', '.delete-task', function() {
      $(this).closest('li').remove();
    });
  });
  