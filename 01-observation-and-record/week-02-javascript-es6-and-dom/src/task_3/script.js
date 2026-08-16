const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");
const emptyMessage = document.getElementById("emptyMessage");

function updateEmptyMessage() {
    if (taskList.children.length === 0) {
        emptyMessage.style.display = "block";
    } else {
        emptyMessage.style.display = "none";
    }
}

addTaskBtn.addEventListener("click", function () {

    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task.");
        return;
    }

    // Create task item
    const taskItem = document.createElement("li");
    taskItem.className = "task-item";

    // Create task text
    const task = document.createElement("span");
    task.className = "task-text";
    task.textContent = taskText;

    // Create buttons container
    const buttons = document.createElement("div");
    buttons.className = "task-buttons";

    // Complete button
    const completeBtn = document.createElement("button");
    completeBtn.textContent = "Complete";

    completeBtn.addEventListener("click", function () {
        task.classList.toggle("completed");
    });

    // Delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";

    deleteBtn.addEventListener("click", function () {
        taskItem.remove();
        updateEmptyMessage();
    });

    // Add buttons
    buttons.appendChild(completeBtn);
    buttons.appendChild(deleteBtn);

    // Add task and buttons to task item
    taskItem.appendChild(task);
    taskItem.appendChild(buttons);

    // Add task to list
    taskList.appendChild(taskItem);

    // Clear input
    taskInput.value = "";

    updateEmptyMessage();
});

updateEmptyMessage();