function addTask() {
    const taskInput = document.getElementById("task");
    const titleInput = document.getElementById("title");
    const datetimeInput = document.getElementById("datetime");
    const taskList = document.getElementById("tasks");

    const titletext = titleInput.value;
    const taskText = taskInput.value;
    const datetime = datetimeInput.value;

    if (taskText.trim() === "") {
        alert("Please enter a task.");
        return;
    }
    
    const taskItem = document.createElement("li");
    taskItem.innerHTML = `<span id="first">${titletext}</span> <span id ="second">${taskText}</span> <span id="third">${datetime}</span> <button onclick="removeTask(this)">Remove</button>`;

    taskList.appendChild(taskItem);

    // Clear input fields
    titleInput.value = "";
    taskInput.value = "";
    datetimeInput.value = "";
}

function removeTask(button) {
    const taskList = document.getElementById("tasks");
    const taskItem = button.parentElement;
    taskList.removeChild(taskItem);
}
