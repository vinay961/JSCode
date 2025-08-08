
// Task Management (To-Do List) System

// Task array to store the list of tasks
let tasks = [];

// Function to add a task
function addTask(taskName) {
    if(!tasks[taskName]){
        tasks.push({name:taskName, isCompleted:false});
    }
    else{
        console.log("Similar task is register earlier!")
    }
}
// Function to mark a task as completed
function completeTask(taskName) {
    tasks.forEach(item => {
        if(item.name === taskName){
            item.isCompleted = true;
        }
    })
}

// Function to remove a task
function removeTask(taskName) {
    tasks = tasks.filter(item => item.name != taskName);
}

// Function to view all tasks (pending and completed)
function viewTasks() {
    tasks.forEach(item => {
        console.log(item.name + " -- isCompleted:" + item.isCompleted);
    })
}

// Example usage
addTask("Buy groceries");
addTask("Walk the dog");
addTask("Finish JavaScript project");

viewTasks();  // View all tasks

completeTask("Buy groceries");
removeTask("Walk the dog");
viewTasks();



  