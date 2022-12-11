let submitButton = document.querySelector('.add-button');
let inputField = document.querySelector('.add-field');
let toDoContent = document.querySelector('.tasks');

let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

let editIcon;
let deleteIcon;
let edit = false;


let addToStorage = (taskDesc) => {
    tasks.push({taskDesc});
    appendToDoc(taskDesc);

    localStorage.setItem('tasks', JSON.stringify(tasks));
}

let appendToDoc = (taskDesc) => {
    let line = document.createElement('hr');
    let div = document.createElement('div');
    let span = document.createElement('span');

    div.classList.add('task-description');
    div.appendChild(span);
    toDoContent.appendChild(div);

    span.innerText = taskDesc;

    editIcon = document.createElement('img');
    deleteIcon = document.createElement('img');


    div.appendChild(editIcon);
    div.appendChild(deleteIcon);
    div.appendChild(line);

    editIcon.src = './images/edit_icon.png';
    deleteIcon.src = './images/delete_icon.png';
}

let editTask = (whatTaskToEdit, secondChild) => {
    let editInputField = document.createElement('input');
    let finalizeChangesBtn = document.createElement('button');
    let newSpan = document.createElement('span');
    let correspondingTask;


    for(let i = 0; i < tasks.length; i++){
        correspondingTask = JSON.parse(localStorage.getItem('tasks'))[i].taskDesc;
        if(correspondingTask == whatTaskToEdit.innerText) {

            let tempInnerText = whatTaskToEdit.firstElementChild.innerText;

            whatTaskToEdit.removeChild(whatTaskToEdit.firstElementChild);
            whatTaskToEdit.insertBefore(finalizeChangesBtn, secondChild);
            whatTaskToEdit.insertBefore(editInputField, finalizeChangesBtn);

            editInputField.value = tempInnerText;
            finalizeChangesBtn.innerText = 'Apply';

            finalizeChangesBtn.addEventListener('click', () => {
                tasks[i] = {taskDesc: `${editInputField.value}`};
                localStorage.setItem('tasks', JSON.stringify(tasks));

                whatTaskToEdit.removeChild(editInputField);
                whatTaskToEdit.removeChild(finalizeChangesBtn);
                
                whatTaskToEdit.insertBefore(newSpan, secondChild);
                newSpan.innerText = tasks[i].taskDesc;
            })
        }
    }
}

let deleteTask = (whatTaskToDelete) => {
    let correspondingTask;

    for(let i = 0; i < tasks.length; i++){
        correspondingTask = JSON.parse(localStorage.getItem('tasks'))[i].taskDesc;
        if(correspondingTask == whatTaskToDelete.innerText) {
            tasks.splice(i, 1);

            localStorage.setItem('tasks', JSON.stringify(tasks));

            toDoContent.removeChild(whatTaskToDelete);
        }
    }
}

for(let i = 0; i < tasks.length; i++){
    let div = document.createElement('div');
    let line = document.createElement('hr');
    let span = document.createElement('span');

    div.classList.add('task-description');
    div.appendChild(span);
    toDoContent.appendChild(div);
    span.innerText = tasks[i].taskDesc;

    editIcon = document.createElement('img')
    deleteIcon = document.createElement('img')

    div.appendChild(editIcon);
    div.appendChild(deleteIcon);
    div.appendChild(line);

    editIcon.src = './images/edit_icon.png';
    deleteIcon.src = './images/delete_icon.png';
}


submitButton.addEventListener('click', () => {
    addToStorage(inputField.value);
    inputField.value = '';
});

toDoContent.addEventListener('click', (e) => {
    if(e.target.matches('img[src*="edit"]')) {
        editTask(e.target.parentNode, e.target);
    } else if(e.target.matches('img[src*="delete"]')){
        deleteTask(e.target.parentNode);
    }
});

