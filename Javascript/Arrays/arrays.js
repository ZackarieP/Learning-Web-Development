var todos = [];

window.setTimeout(function () {

    var input = prompt("What would you like to do?");

    while (input !== 'quit') {
		if (input === 'list') {
			todos.forEach(function(todo) {
				console.log(todo);
			});
			//console.log(todos);
		} else if (input === 'new') {
			var newTodo = prompt('What do you have todo?');
			todos.push(newTodo);
			console.log(newTodo + ' added to the list');
		}
		input = prompt('What would you like to do?');
	}
	console.log(todos);
    console.log('Ok, you quit the app');
    
}, 500);