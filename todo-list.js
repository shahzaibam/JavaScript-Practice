var inputTodo = document.getElementById("todo");
let todoListAdd = document.getElementById("todo-list")
const todos = [];

function addTodo() {
    if (inputTodo.value == "") { 
        alert("porfavor escribe algo")
    } else {
        alert(inputTodo.value)
        todos.push(inputTodo.value);
        console.log(todos)
        // document.write(inputTodo.value)
        // for(let i=0; i<todos.length; i++) {
            todoListAdd.innerHTML += `${inputTodo.value} <button id="delete" onclick="removeTodo()">Delete</button><br>`;
        // }
        inputTodo.value = ""
    }

    // return todoListAdd.innerHTML += `<p>${inputTodo.value}</p>`


}


function removeTodo() {

}

// console.log(inputTodo.value)


