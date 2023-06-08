let taskInput = document.getElementById('task-input');
let taskBtn = document.getElementById('task-btn');
let filterSelect = document.getElementById('filter-select');
let taskList = document.getElementById('task-list');

// Add an event listener l #taskBoton
Btn.addEventListener('click', () => {
    let taskText = taskInput.value.trim();
    // kanchekiw wch kayn chi text wla walo, lakan :
    if (taskText) {
        let taskItem = createTaskElement(taskText);
        // dakhal ay task item l lista
        taskList.appendChild(taskItem);
        // na9i lblasa l input jdid
        taskInput.value = '';
    }
});
// 
    taskList.addEventListener('click', (event) => {
        let targetElement = event.target;
        let taskItem = targetElement.closest('.task-item');

        if (targetElement.classList.contains('complete-btn')) {
            taskItem.classList.toggle('completed');
        } else if (targetElement.classList.contains('delete-btn')) {
            taskList.removeChild(taskItem);
        } else if (targetElement.classList.contains('uncomplete-btn')) {
            taskItem.classList.remove('completed');
        }
    });

// add an event listener to the filter drop-down menu:

filterSelect.addEventListener('change', () => {
    let filterValue = filterSelect.value;
    let taskItems = taskList.getElementsByClassName('task-item');

    Array.from(taskItems).forEach((taskItem) => {
        taskItem.style.display = 'block';
        if (filterValue === 'completed' && !taskItem.classList.contains('completed')) {
            taskItem.style.display = 'none';
        } else if (filterValue === 'uncompleted' && taskItem.classList.contains('completed')) {
            taskItem.style.display = 'none';
        }
    });
});
