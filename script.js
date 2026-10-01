let tasks = [];

function addTask() {

    let taskInput = document.getElementById("taskInput");

    let taskText = taskInput.value.trim();

    if (taskText === "") {

        alert("Please enter a task.");

        return;
    }

    let task = {
        text: taskText,
        completed: false
    };

    tasks.push(task);

    taskInput.value = "";

    displayTasks();
}


function displayTasks() {

    let taskList = document.getElementById("taskList");

    taskList.innerHTML = "";

    tasks.forEach(function(task, index) {

        let li = document.createElement("li");

        li.className = "task-item";

        li.innerHTML = `
            <span
                class="task-text ${task.completed ? "completed" : ""}"
                onclick="completeTask(${index})"
            >
                ${task.text}
            </span>

            <button
                class="delete-btn"
                onclick="deleteTask(${index})"
            >
                Delete
            </button>
        `;

        taskList.appendChild(li);

    });

    updateTaskCount();
}


function completeTask(index) {

    tasks[index].completed = !tasks[index].completed;

    displayTasks();
}


function deleteTask(index) {

    tasks.splice(index, 1);

    displayTasks();
}


function updateTaskCount() {

    let taskCount = document.getElementById("taskCount");

    taskCount.innerText =
        tasks.length + " Tasks";
}