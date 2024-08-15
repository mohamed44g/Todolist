const themeToggle = document.querySelector(".Theme-toggle img");
const complite = document.querySelectorAll(".task-check");
const inputform = document.getElementById("addTaskform");
const input = document.getElementById("addTask");
const deleteTask = document.querySelectorAll(".delete-task");
const todoTasks = document.querySelector(".to-do-tasks");
const taskVeiwed = document.querySelectorAll("ul li");
const allTaskBtn = document.querySelectorAll(".all-task");
const activeTaskBtn = document.querySelectorAll(".active-task");
const completedTaskBtn = document.querySelectorAll(".completed-task");
const clearCompletedBtn = document.querySelector(".clear-completed-btn");
const taskNumber = document.querySelector(".task-number");

themeToggle.addEventListener("click", function () {
    if (document.body.id == "") {
        document.body.id = "dark";
        themeToggle.src = "images/icon-sun.svg";
    } else {
        document.body.id = "";
        themeToggle.src= "images/icon-moon.svg"
    }
});

complite.forEach(ele => ele.addEventListener("click", function () {
    ele.parentElement.classList.toggle("checked");
}));

document.addEventListener("click", function (e) {
    if (e.target.className == "delete-task") {
        e.target.parentElement.parentElement.remove();
    }

    if (e.target.id == "checkbox") {
        e.target.parentElement.parentElement.classList.toggle("checked");
        if (taskNumber.innerHTML != 0){
            taskNumber.innerHTML--;
        } else {
            taskNumber.innerHTML =+ 1;
        }
    }
});

inputform.addEventListener("submit", function (e) {
    e.preventDefault();
    if (input.value != "") {
        const eleContanier = document.createElement("div");
        eleContanier.classList.add("task");
        const ele = `
                        <div class="task-check">
                            <span id="checkbox"></span>
                        </div>
    
                        <div class="task-text">
                            <h5>${input.value}</h5>
                        </div>
    
                        <div>
                            <img class="delete-task" src="images/icon-cross.svg" alt="delete-task" srcset="">
                        </div>
                    `;
        input.value = "";
        eleContanier.innerHTML = ele;
        todoTasks.prepend(eleContanier);
        taskNumber.innerHTML++;
    }
});



taskVeiwed.forEach(ele => ele.addEventListener("click", function () {
    taskVeiwed.forEach(ele => ele.classList.remove("veiw-active"));
    ele.classList.add("veiw-active");
    }
));


allTaskBtn.forEach(ele => ele.addEventListener("click", function () {
    let tasks = document.querySelectorAll(".task");
    tasks.forEach(ele => ele.style.display = "flex");
}));


activeTaskBtn.forEach(ele => ele.addEventListener("click", function () {
    let tasks = document.querySelectorAll(".task");
    tasks.forEach(ele => ele.classList.contains("checked")? ele.style.display = "none" : ele.style.display = "flex");
}));

completedTaskBtn.forEach(ele => ele.addEventListener("click", function () {
    let tasks = document.querySelectorAll(".task");
    tasks.forEach(ele => ele.classList.contains("checked")?  ele.style.display = "flex" : ele.style.display = "none");
}));

clearCompletedBtn.addEventListener("click", function () {
    let tasks = document.querySelectorAll(".task");
    tasks.forEach(ele => ele.classList.contains("checked")?  ele.remove() : null);
});










