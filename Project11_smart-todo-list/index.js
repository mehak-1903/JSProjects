const addBtn = document.getElementById('add-btn');
const input = document.getElementById('input-box');
const taskList = document.querySelector('.list-container');
const allTask = document.getElementById('all');

let tasks = [];             // All tasks are stored in this empty list.

//  saved values 

function saveTask() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

const savedTask = localStorage.getItem('tasks');
if (savedTask) {
    tasks = JSON.parse(savedTask);
    showTasks();
}

// All Task
const showingResult = document.querySelector('.todo-app');
const allResult = document.createElement('h2');

allResult.textContent = `All Tasks: ${tasks.length}`;
showingResult.appendChild(allResult)

allTask.addEventListener('click', () => {
   
    allResult.textContent = `All Tasks: ${tasks.length}`;
    showingResult.appendChild(allResult);

    if(tasks.length === 0){
        allResult.innerHTML = '';
    }
})

// Add Button Click
addBtn.addEventListener('click', () => {

    // Input values ko lenge
    const taskText = input.value.trim();

    if (taskText !== '') {
        tasks.push({ text: taskText, done: false });     // Adding to the list--- stored as an object
        input.value = '';         // clear input box

        saveTask();
        showTasks();              // showing tasks
    }

})

// Showing tasks on screen

function showTasks() {
    taskList.innerHTML = '';      // clear old list

    tasks.forEach((task, index) => {
        const li = document.createElement('li');

        li.textContent = task.text;     // li mei tasks dalra hai

        if (task.done) {
            li.style.textDecoration = 'line-through';
        }

        // Creating and Adding Delete Button to the list

        const deleteBtn = document.createElement('i');
        deleteBtn.className = 'fas fa-trash';     // Font awesome icon

        deleteBtn.addEventListener('click', () => {
            tasks.splice(index, 1);       // remove from list

            saveTask();
            showTasks();         // updated list
        })

        // Done Task
        const doneBtn = document.createElement('i');
        doneBtn.className = 'fa-solid fa-check';
        doneBtn.style.marginRight = '38px';

        doneBtn.addEventListener('click', () => {
            tasks[index].done = !tasks[index].done;

            saveTask();

            // Only update current li instead of full re-render
            li.style.textDecoration = tasks[index].done ? 'line-through' : 'none';
        })

        // Editing
        const editText = document.createElement('i');
        editText.className = 'fa-solid fa-pen';
        editText.style.marginRight = '75px';

        editText.addEventListener('click', () => {
            const newText = prompt("Enter your Text: ", task.text);
            if (newText !== null && newText.trim() !== '') {
                tasks[index].text = newText.trim();
            }
            saveTask();
            showTasks()
        })

        li.appendChild(editText);
        li.appendChild(doneBtn);
        li.appendChild(deleteBtn);      // adding icon with the list
        taskList.appendChild(li);         // showing to the list
    })
}