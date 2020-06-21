var todos = [];

window.setTimeout(function () {

	var input = prompt("What would you like to do?");

	while (input !== 'quit') {
		switch (input) {
			case 'list':
				listTodos();
				break;
			case 'new':
				addTodos();
				break;
			case 'delete':
				deleteTodos();
				break;
		}
		input = prompt('What would you like to do?');
	}
	console.log(todos);
	console.log('Ok, you quit the app');

}, 500);


function listTodos() {
	console.log("**********");
	todos.forEach(function (todo, i) {
		todos.indexOf(todo);
		console.log(i + ": " + todo);
	});
	console.log("**********");
}

function addTodos() {
	var newTodo = prompt('What do you have todo?');
	todos.push(newTodo);
	console.log(newTodo + ': added to the list');
}

function deleteTodos() {
	var indexOfTodo = prompt('Which index would you like to delete?');
	var deletedTodo = todos[indexOfTodo];
	todos.splice(indexOfTodo, 1);
	console.log("Deleted Todo: " + deletedTodo);
	var decision = prompt('Would you like to undo the last deletion?');
	if (decision === 'yes') {
		todos.push(deletedTodo);
	} else
		console.log("Todo deletion final.");

}