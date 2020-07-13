let newTodos = [];
let textInput = document.querySelector(".input");

let list = document.querySelector(".todos");
let entry = document.createElement("li");

textInput.addEventListener("keydown", function (e) {
    if (e.key == "Enter") {
        newTodos.push(textInput.value);
        entry.appendChild(document.createTextNode(textInput.value));
        list.appendChild(entry);
        textInput.value = "";
    }
});