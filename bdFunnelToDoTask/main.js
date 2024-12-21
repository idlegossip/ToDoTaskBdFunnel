


// document.getElementById('submit-btn').addEventListener('click', 
//     function(event) {

//         // Handle the form data
//         event.preventDefault();
// });

const list = [];
var index = 0;

function addTask() {
    const taskName = document.getElementById("name")
    const taskData = document.getElementById("task_name")
    const task = taskName.value;
    list[index] = task;

    const table = document.getElementById("tbl").
        getElementsByTagName('tbody')[0];
    const newRow = table.insertRow();
    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);
    const cell3 = newRow.insertCell(2);
    cell1.innerHTML = index;
    cell2.innerHTML = task;
    cell3.innerHTML='<input type="checkbox">';
    

    index++;
}

function addTaskList() {
    const taskListDiv = document.getElementById("taskListId");
    taskListDiv.style.display = "block";
}

