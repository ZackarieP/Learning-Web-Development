var todos = [];

window.setTimeout(function() {

    var input = prompt("What would you like to do?");

    if (input == "quit") {
        console.log("Done");
    }

    while (input != "quit") {
        input = prompt("What would you like to do?");

        if (input == "list") {
            console.log(todos);
        }

        if (input == "new") {
            var newTodo = prompt("What do you have todo?");
            todos.push(newTodo);
            console.log(todos);
        }
    }
    
}, 500);

