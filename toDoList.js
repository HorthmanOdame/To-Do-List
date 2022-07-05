const formEl = document.querySelector(".form");

const inputEl = document.querySelector(".input")

const ulEl = document.querySelector(".list")

form.addEventListener("submit",    (event)=>
{
    event.preventDefault();
    toDoList()
});


function listToDo(){
    let newTask = inputEl.value;
    const liEl = document.createElement("li");
    liEl.innerText = newTask;
    ulEl.appendChild(liEl)
    inputEl.value = ""
}