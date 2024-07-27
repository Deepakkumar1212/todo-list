// script.js

document.addEventListener('DOMContentLoaded', function() {
    const taskInput = document.getElementById('task-input');
    const addTaskBtn = document.getElementById('add-task-btn');
    const taskList = document.getElementById('task-list');

    addTaskBtn.addEventListener('click', addTask);

    // Function to add a task
    function addTask() {
        const taskText = taskInput.value;
        if (taskText === "") return;

        const taskItem = document.createElement('li');
        taskItem.classList.add('task-item');
        taskItem.innerHTML = `
            <span>${taskText}</span>
            <button class="delete-btn"><i class="fa-solid fa-trash"></i></button>
        `;

        taskList.appendChild(taskItem);
        taskInput.value = '';
        
        // delete btn
        const deleteBtn = taskItem.querySelector('.delete-btn');
        deleteBtn.addEventListener('click', function() {
            taskItem.remove();
        });

        // line though
        taskItem.addEventListener('click', function() {
            taskItem.classList.toggle('completed');
        });
    }

});
