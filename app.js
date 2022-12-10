let submitButton = document.querySelector('.add-button');
let inputField = document.querySelector('.add-field');
let toDoContent = document.querySelector('.tasks');

let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

let editIcon;
let deleteIcon;


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
}

let deleteTask = (whatTaskToDelete) => {
    let correspondingTask;

    for(let i = 0; i < tasks.length; i++){
        correspondingTask = JSON.parse(localStorage.getItem('tasks'))[i].taskDesc;
        if(correspondingTask == whatTaskToDelete.innerText) {
            tasks.splice(i, 1);

            localStorage.setItem('tasks', JSON.stringify(tasks));
            whatTaskToDelete.remove();
        }
    }
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
}

toDoContent.addEventListener('click', (e) => {
    if(e.target.matches('img[src*="edit"]')) {

    } else{
        deleteTask(e.target.parentNode);
    }
})

