let submitButton = document.querySelector('.add-button');
let inputField = document.querySelector('.add-field');
let toDoContent = document.querySelector('.tasks');
let form = document.querySelector('form');
let allTaskDivs;

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
    div.classList.add('task-description')
    toDoContent.appendChild(div)
    div.innerText = taskDesc;
    allTaskDivs += div;
}

for(let i = 0; i < tasks.length; i++){
    let div = document.createElement('div');
    div.classList.add('task-description')
    toDoContent.appendChild(div)
    div.innerText = tasks[i].taskDesc;
    if(i == tasks.length -1) allTaskDivs = document.querySelectorAll('.tasks div');
}

toDoContent.addEventListener('mouseover', (e) => {
    let target = e.target;
    console.log(target);
    if(target.matches('div.task-description')) target.style.background = 'blue';
});


// localStorage.setItem('tasks', JSON.stringify(tasks));
