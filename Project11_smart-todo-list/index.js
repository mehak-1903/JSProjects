const addBtn = document.getElementById('add-btn');
const input = document.getElementById('input-box');
const taskList = document.querySelector('.list-container');

let tasks = [];             // All tasks are stored in this empty list.

addBtn.addEventListener('click', () => {
    
    // Input values ko lenge
    const taskText = input.value.trim();

    if(taskText !== ''){
        tasks.push(taskText);     // Adding to the list
        input.value = '';         // clear input box

        showTasks();              // showing tasks
    }

})

// Showing tasks on screen

function showTasks(){
    taskList.innerHTML = '';      // clear old list

    tasks.forEach((task , index) => {
        const li = document.createElement('li');

        li.textContent = task;     // li mei tasks dalra hai

        // Creating and Adding Delete Button to the list
        
        const deleteBtn = document.createElement('i');
        deleteBtn.className = 'fas fa-trash';     // Font awesome icon

        deleteBtn.addEventListener('click', () => {
            tasks.splice(index, 1);       // remove from list

            showTasks();         // updated list
        })
        
        li.appendChild(deleteBtn);      // adding icon with the list
        taskList.appendChild(li);         // showing to the list
        console.log(deleteBtn)
    })
}