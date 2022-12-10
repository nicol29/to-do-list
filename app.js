let submitButton = document.querySelector('.add-button');
let inputField = document.querySelector('.add-field');
let toDoContent = document.querySelector('.tasks');
let form = document.querySelector('form');

let isHovering = false;
let allTaskDivs;
let editIcon;
let deleteIcon;

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

    editIcon = document.createElement('img')
    deleteIcon = document.createElement('img')

    div.appendChild(editIcon);
    div.appendChild(deleteIcon);

    editIcon.src = './images/edit_icon.png';
    deleteIcon.src = './images/delete_icon.png';

    allTaskDivs += div;
}

for(let i = 0; i < tasks.length; i++){
    let div = document.createElement('div');
    div.classList.add('task-description')
    toDoContent.appendChild(div)
    div.innerText = tasks[i].taskDesc;

    editIcon = document.createElement('img')
    deleteIcon = document.createElement('img')

    div.appendChild(editIcon);
    div.appendChild(deleteIcon);

    editIcon.src = './images/edit_icon.png';
    deleteIcon.src = './images/delete_icon.png';

    if(i == tasks.length -1) allTaskDivs = document.querySelectorAll('.tasks div');
}

