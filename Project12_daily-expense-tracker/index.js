window.addEventListener('DOMContentLoaded', getTask);

const input = document.getElementById('title');
const inputAmount = document.getElementById('amount');
const expenseDate = document.getElementById('expense-date');
const addBtn = document.getElementById('add-btn');
const setIncome = document.getElementById('set-income');
const totalBalance = document.getElementById('total-amount');
const remainingAmount = document.getElementById('remaining-amount')
const expenseList = document.getElementById('expense-list');
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchbtn');
const totalSpentExpenses = document.getElementById('total-expenses');

let expenses = [];

// Variables to store values
let income = 0;
let remaining = 0;


// Save Items
function saveTask() {
    localStorage.setItem('expenses', JSON.stringify(expenses));
    localStorage.setItem('income', income);
}

function getTask() {
    const savedTask = localStorage.getItem('expenses');
    const savedIncome = localStorage.getItem('income');

    if (savedTask) {
        expenses = JSON.parse(savedTask);
    }

    if (savedIncome) {
        income = parseFloat(savedIncome);
    }

    let totalExpenses = expenses.reduce((acc, curr) => acc + parseFloat(curr.amount), 0);
    remaining = income - totalExpenses;
    totalBalance.textContent = income || 0;
    remainingAmount.textContent = remaining || 0;


    showList();

}


setIncome.addEventListener('click', () => {
    const userIncome = prompt('Enter Your Income:');
    if (userIncome && !isNaN(userIncome) && userIncome > 0) {
        income = parseFloat(userIncome);
        remaining = income;

        let totalExpenses = expenses.reduce((acc, curr) => acc + parseFloat(curr.amount), 0);
        remaining = income - totalExpenses;

        totalBalance.textContent = income;
        remainingAmount.textContent = remaining;
        saveTask();
    }
    else {
        alert('Please Enter a Valid Income Amount')
    }
})

addBtn.addEventListener('click', () => {

    const inputValue = input.value.trim();
    const amountValue = inputAmount.value.trim();
    const date = expenseDate.value.trim();

    // error message
    const oldError = document.querySelector('.error-message');
    if (oldError) oldError.remove();

    // checking input field for text and amount can't be empty;
    if (!inputValue || !amountValue || !date || !isNaN(inputValue)) {
        const p = document.createElement('p');
        p.textContent = `Please fill valid input fields.`;
        p.style.color = 'red';
        p.style.fontSize = '18px';
        p.className = 'error-message';

        //  Insert error message just after the button
        addBtn.insertAdjacentElement('afterend', p);
        return;
    }

    expenses.push({ name: inputValue, amount: parseFloat(amountValue),date: date });
    input.value = '';
    inputAmount.value = '';
    expenseDate.value = '';

    // calculate expenses amount
    let totalExpenses = expenses.reduce((acc, curr) => acc + parseFloat(curr.amount), 0);
    remaining = income - totalExpenses;
    remainingAmount.textContent = remaining;
    saveTask();
    showList();
})

function showList() {
    expenseList.innerHTML = '';

    // Sort by Date
    expenses.sort((a, b) => new Date(a.date) - new Date(b.date));

    expenses.forEach((task, index) => {
        const li = document.createElement('li');
        li.textContent = `${task.name} - Rs.${task.amount} - ${formatDate(task.date)}`;

        // Deleting button

        const deleteBtn = document.createElement('i');
        deleteBtn.className = 'fas fa-trash';

        deleteBtn.addEventListener('click', () => {

            expenses.reduce((acc, curr) => acc + parseFloat(curr.amount), 0);
            remaining = remaining + parseFloat(task.amount);                  // deleted item ka amount add back kiya 
            remainingAmount.textContent = remaining;
            expenses.splice(index, 1);
            saveTask();
            showList();
        })

        // Editing button

        const editButton = document.createElement('i');
        editButton.className = 'fa-solid fa-pen';
        editButton.style.marginLeft = '-35px';

        editButton.addEventListener('click', () => {
            const inputText = prompt("Enter new Value", task.name);
            const newAmount = prompt("Enter new amount", task.amount);
            const newDate = prompt('Enter new Date', task.date);
            

            if(inputText !== null && inputText.trim() !== '' && newAmount !== null && newAmount.trim() && !isNaN(newAmount) && newDate !== null && newDate.trim()){
                expenses[index].name = inputText;
                expenses[index].amount= parseFloat(newAmount);
                expenses[index].date = newDate;

                remaining = income - expenses.reduce((acc, curr) => acc + parseFloat(curr.amount), 0);
                remainingAmount.textContent = remaining;
                saveTask();
                showList();
                
            }
        })

        li.appendChild(editButton);
        li.appendChild(deleteBtn);
        expenseList.appendChild(li);
        updateTotalExpenses();
    })
}

// Filter Expenses
function searchFilters(){
    // user ne jo input kiya hai usey lowercase mei convert kia hai(Abc = abc)
    const query = searchInput.value.toLowerCase();

    const filteredExpenses = expenses.filter(item => 
        item.name.toLowerCase().includes(query) || `rs. ${item.amount}`.toLowerCase().includes(query) || item.amount.toString().includes(query) || formatDate(item.date)    .toLowerCase().includes(query));

        expenseList.innerHTML = '';
        updateTotalExpenses(filteredExpenses);
        filteredExpenses.forEach((task) => {
            const li = document.createElement('li');
            li.textContent = `${task.name} - Rs. ${task.amount} - ${formatDate(task.date)}`;
            

            //  Delete button
            const deleteBtn = document.createElement('i');
            deleteBtn.className = 'fas fa-trash';

            deleteBtn.addEventListener('click', () => {

                // Original expenses array se item htao
                const indexInOriginal = expenses.indexOf(task);

                if(indexInOriginal !== -1){

                    remaining = remaining + parseFloat(task.amount);
                    remainingAmount.textContent = remaining;
                    expenses.splice(indexInOriginal, 1);    // remove from an original list
    
                    saveTask()     // saved to the original list
                    searchFilters()
                }
            })

           li.appendChild(deleteBtn);
           expenseList.appendChild(li);
        })
    
}

searchBtn.addEventListener('click', searchFilters);

// changing date format
function formatDate(dateStr){
    const date = new Date(dateStr);
    // const options = {day: '2-digit', month: 'short', year: 'numeric'};
    return date.toLocaleDateString('en-GB')
}

// total spent expenses
function updateTotalExpenses(filteredList = expenses){
    const total = filteredList.reduce((acc, curr) => acc + parseFloat(curr.amount), 0);

    document.getElementById('total-expenses').textContent = `${total}`
    document.getElementById('total-expenses').style.color = 'red';
}