let submitButton = document.querySelector('.add-button');
let inputField = document.querySelector('.add-field');
let toDoContent = document.querySelector('.tasks');
let form = document.querySelector('form');

let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

submitButton.addEventListener('click', () => {
    addToStorage(inputField.value);
    inputField.value = '';
});

let addToStorage = (taskDesc) => {
    tasks.push({taskDesc});
    appendToDoc(taskDesc)
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

let appendToDoc = (taskDesc) => {
    let div = document.createElement('div');
    toDoContent.appendChild(div)
    div.innerText = taskDesc;
}

for(let i = 0; i < tasks.length; i++){
    let div = document.createElement('div');
    toDoContent.appendChild(div)
    div.innerText = tasks[i].taskDesc;
}

// localStorage.setItem('tasks', JSON.stringify(tasks));
