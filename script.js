document.getElementById("addTaskButton").addEventListener("click", () => {
  const taskInput = document.getElementById("taskInput");
  const taskText = taskInput.value.trim();

  if (taskText !== "") {
    const taskList = document.getElementById("taskList");

    // Create a new list item
    const newTask = document.createElement("li");
    newTask.innerText = taskText;

    // Click to mark as done
    newTask.addEventListener("click", () => {
      newTask.style.textDecoration =
        newTask.style.textDecoration === "line-through"
          ? "none"
          : "line-through";
    });

    // Double click to delete
    newTask.addEventListener("dblclick", () => {
      taskList.removeChild(newTask);
    });

    // Highlight when mouse over
    newTask.addEventListener("mouseover", (event) => {
      if (event.target !== newTask.querySelector("button")) {
        newTask.style.color = "blue";
      }
    });

    newTask.addEventListener("mouseout", (event) => {
      if (event.target !== newTask.querySelector("button")) {
        newTask.style.color = "black";
      }
    });

    // Append the new task to the task list
    taskList.appendChild(newTask);

    // Add an edit buttons
    const editButton = document.createElement("button");
    editButton.innerText = "Edit";

    // Edit functionality
    editButton.addEventListener("click", (event) => {
      event.stopPropagation();
      const newNameTask = prompt("Enter a New Task Name", taskText);
      if (newNameTask !== null && newNameTask.trim() !== "") {
        newTask.innerText = newNameTask;
        newTask.appendChild(editButton);
      }
    });

    newTask.appendChild(editButton);

    // Clear the input field
    taskInput.value = "";
  }
});

document
  .getElementById("deleteAllTasksButton")
  .addEventListener("click", () => {
    // Delete all tasks in the list
    const taskList = document.getElementById("taskList");
    taskList.innerHTML = "";
  });
