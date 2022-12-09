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
    const editIcon = document.createElement('img')
    const deleteIcon = document.createElement('img')
    editIcon.src = './images/edit_icon.png';
    deleteIcon.src = './images/delete_icon.png';

    let div = document.createElement('div');
    div.classList.add('task-description')
    toDoContent.appendChild(div)
    div.innerText = taskDesc;
    div.appendChild(editIcon);
    div.appendChild(deleteIcon);

    allTaskDivs += div;
}

for(let i = 0; i < tasks.length; i++){
    const editIcon = document.createElement('img')
    const deleteIcon = document.createElement('img')
    editIcon.src = './images/edit_icon.png';
    deleteIcon.src = './images/delete_icon.png';

    let div = document.createElement('div');
    div.classList.add('task-description')
    toDoContent.appendChild(div)
    div.innerText = tasks[i].taskDesc;
    div.appendChild(editIcon);
    div.appendChild(deleteIcon);

    if(i == tasks.length -1) allTaskDivs = document.querySelectorAll('.tasks div');
}

toDoContent.addEventListener('mouseover', (e) => {
    // if(e.target.matches('.task-description')) e.target.style.background = 'blue';
});