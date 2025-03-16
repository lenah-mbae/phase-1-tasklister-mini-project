document.addEventListener("DOMContentLoaded", () => {
  const taskForm = document.getElementById("create-task-form");
  const taskList = document.getElementById("tasks");
  const sortButton = document.getElementById("sort-button");
  let tasks = [];
  let sortAscending = true;


  taskForm.addEventListener("submit", function(event) {
   event.preventDefault();
 
  const description = document.getElementById("new-task-description").value;
  const user = document.getElementById("user").value;
  const dueDate = document.getElementById("due-date").value;
  const priority = document.getElementById("priority").value;
  
  const task = {description, user, dueDate, priority};
  tasks.push(task);
  renderTasks();
  taskForm.reset();
 });

  sortButton.addEventListener("click", () => {
    sortAscending = !sortAscending;
    renderTasks();
  });

 function renderTasks() {
  taskList.innerHTML = ""
 
  if (tasks.length > 0) {
    tasks.sort((a, b) => {
    const priorityOrder = { high: 3, medium: 2, low: 1 };
    const aPriority = priorityOrder[a.priority] || 0;
    const bPriority = priorityOrder[b.priority] || 0;
    return sortAscending ? aPriority - bPriority : bPriority - aPriority;
    renderTasks();
  });
}

tasks.forEach((task, index) => {
  const li = document.createElement("li");
  li.className = "task";


  taskList.appendChild(li);
  let priorityColor = "black";
      if (task.priority === "high") priorityColor = "red";
      else if (task.priority === "medium") priorityColor = "orange";
      else if (task.priority === "low") priorityColor = "green";
      
      li.innerHTML = `
        <span style="color: ${priorityColor}">${task.description}</span>
        <span> | User: ${task.user}</span>
        <span> | Due: ${task.dueDate}</span>
      `;
 
});
}
});
