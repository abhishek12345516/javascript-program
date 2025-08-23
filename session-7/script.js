let todos=[];

function addTodo(task){
    todos.push(task);
}

function removeTodo(task){
    todos=todos.filter(function(item){
        return item !==task
    })
}

function displayTodos(){
    console.log("My Todos:", todos);
}