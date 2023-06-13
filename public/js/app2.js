let inputTask = document.getElementById('inputDtask');
let taskBtn = document.getElementById('taskBtn');

// Get the task lists
let todoList = document.getElementById('todo-list');
let doingList = document.getElementById('doing-list');
let doneList = document.getElementById('done-list');

taskBtn.addEventListener('click', () => {
    // Get the value of the input
    let taskText = inputTask.value.trim();

    // Create new task 
    let newTaskItem = document.createElement('li');
    newTaskItem.textContent = taskText;

    // create icons
    let deleteIcon = document.createElement('span');
    deleteIcon.classList.add('icon');
    deleteIcon.textContent = ' ⌫';
    deleteIcon.style.cursor = 'pointer'; // add this line
    deleteIcon.addEventListener('click', () => {
        newTaskItem.remove();
    });

    let editeicon = document.createElement('span');
    editeicon.classList.add('icon');
    editeicon.textContent = '✎';
    editeicon.style.cursor = 'pointer';
    editeicon.addEventListener('click', () => {
        let updatedTaskText = prompt('Edit the task');
        newTaskItem.textContent = updatedTaskText;
    });

    let selectElement = document.createElement('select');
    // Add options to switch
    let todoOption = document.createElement('option');
    todoOption.value = 'todo';
    todoOption.text = 'Todo';

    let doingOption = document.createElement('option');
    doingOption.value = 'doing';
    doingOption.text = 'Doing';

    let doneOption = document.createElement('option');
    doneOption.value = 'done';
    doneOption.text = 'Done';

    // add icons
    newTaskItem.appendChild(deleteIcon);
    newTaskItem.appendChild(editeicon);
    newTaskItem.appendChild(selectElement);
    //options
    selectElement.appendChild(todoOption);
    selectElement.appendChild(doingOption);
    selectElement.appendChild(doneOption);

    selectElement.addEventListener('change', () => {
        let selectedValue = selectElement.value;
        if (selectedValue === 'todo') {
            todoList.appendChild(newTaskItem);
        } else if (selectedValue === 'doing') {
            doingList.appendChild(newTaskItem);
        } else if (selectedValue === 'done') {
            doneList.appendChild(newTaskItem);
        }
    });

    // Add the task item to the Todo list
    todoList.appendChild(newTaskItem);
    //to clear
    inputTask.value = '';
});