const name = document.getElementById('name');
const description = document.getElementById('description');
const addTask = document.getElementById('submit');

addTask.addEventListener('click', function (event) {
    event.preventDefault();
    const addedContainer = document.createElement('div');
    const headingParagraph = document.createElement('div');
    const taskHeading = document.createElement('h1');
    const taskParagraph = document.createElement('p');
    const buttons = document.createElement('div');
    const completeButton = document.createElement('button');
    const deleteButton = document.createElement('button');
    addedContainer.setAttribute('class', 'added-container');
    headingParagraph.setAttribute('class', 'heading-paragraph');
    taskHeading.setAttribute('class', 'task-heading');
    taskParagraph.setAttribute('class', 'task-paragraph');
    buttons.setAttribute('class', 'buttons');
    completeButton.setAttribute('class', 'complete');
    deleteButton.setAttribute('class', 'delete');
    taskHeading.innerText = name.value;
    taskParagraph.innerText = description.value;
    completeButton.innerText = "Complete";
    deleteButton.innerText = "Delete";
    deleteButton.addEventListener('click', function(){
        document.body.removeChild(addedContainer);
    });
    completeButton.addEventListener('click', function(){
        taskHeading.style.textDecoration = 'line-through';
        taskParagraph.style.textDecoration = 'line-through';
        taskHeading.style.color = 'rgba(131, 149, 167,1.0)';
        taskParagraph.style.color = 'rgba(131, 149, 167,1.0)';
        buttons.removeChild(completeButton);
    });
    if (name.value != "" && description.value != "") {
        document.body.appendChild(addedContainer);
        addedContainer.appendChild(headingParagraph);
        addedContainer.appendChild(buttons);
        headingParagraph.appendChild(taskHeading);
        headingParagraph.appendChild(taskParagraph);
        buttons.appendChild(completeButton);
        buttons.appendChild(deleteButton);
        name.value = "";
        description.value = "";
    }
});
