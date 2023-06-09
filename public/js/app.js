// Get elements from HTML
let taskInput = document.getElementById('task-input');
let taskBtn = document.getElementById('task-btn');
let filterSelect = document.getElementById('filter-select');
let taskList = document.getElementById('task-list');

// Add task when click the botton
taskBtn.addEventListener('click', () => {
    let taskText = taskInput.value.trim();
    if (taskText) { // Check if the task text is not empty
        let taskItem = createTaskElement(taskText); // Create a new task item element using the task text
        taskList.appendChild(taskItem); // zid task item to task list
        taskInput.value = ''; // Clear the task input bch tkhli espace ltask khra   
    }
});

taskList.addEventListener('click', function (event) {
    let targetElement = event.target; // evnt target 'clicked' 7to f targetElement
    let taskItem = targetElement.closest('.task-item'); // Find the closest parent with class 'task-item'

    if (taskItem !== null) {
        let buttonElement = targetElement.closest('.complete-btn, .delete-btn, .uncomplete-btn'); // Find the closest parent ina btn 3ndo

        if (buttonElement !== null) { 
            if (buttonElement.classList.contains('complete-btn')) {
                taskItem.classList.toggle('completed');
            } else if (buttonElement.classList.contains('delete-btn')) {
                taskItem.parentNode.removeChild(taskItem); // 7ayd task mn parent node(lista)
            } else if (buttonElement.classList.contains('uncomplete-btn')) {
                taskItem.classList.remove('completed'); // bch n7ayd 'completed' class mn task item
            }
        }
    }
});

// filter updates the display of the task list based on the selected filter
filterSelect.addEventListener('change', () => {
    let filterValue = filterSelect.value;
    // ga3 task items lif taskList 3ytna lihom wkhznahom f $taskItems
    let taskItems = taskList.getElementsByClassName('task-item');
    
    // loopi each task item element in the array
    Array.from(taskItems).forEach((taskItem) => {
        taskItem.style.display = 'block'; // make each task visible f defealt
        if (filterValue === 'completed' && !taskItem.classList.contains('completed')) {
            taskItem.style.display = 'none'; //hide it in case task item value done and is not marked as completed flclass
        } else if (filterValue === 'uncompleted' && taskItem.classList.contains('completed')) {
            taskItem.style.display = 'none'; // lakan 'uncompleted' w task item 3ndo 'completed' class 
        }
    });
});

// creates a new task element with the appropriate text and buttons,wki returnih 
function createTaskElement(taskText) {
    let taskItem = document.createElement('div'); //create new div ltask item
    taskItem.classList.add('task-item'); //Add task-item in t-element

    let taskTextElement = document.createElement('div'); //create new div ltask txt
    taskTextElement.classList.add('task-text'); // Add task-text-c ltask txt
    taskTextElement.textContent = taskText;

//now creating buttons
    let buttonsContainer = document.createElement('div');

    let completeButton = createButton('Complete', 'complete-btn');
    let deleteButton = createButton('Delete', 'delete-btn');
    let uncompleteButton = createButton('Uncomplete', 'uncomplete-btn');

    buttonsContainer.append(completeButton, deleteButton, uncompleteButton);
    taskItem.append(taskTextElement, buttonsContainer);
    return taskItem;
}

function createButton(text, className) {
    let button = document.createElement('button');
    //add necessary classes 
    button.classList.add('btn', 'btn-sm', className); 
    button.textContent = text;
    return button;
}