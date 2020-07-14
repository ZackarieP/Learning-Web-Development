let newTodos = [];
let textInput = document.querySelector(".input");

let list = document.querySelector(".todos");
let entry = document.createElement("li");
// let plus = document.querySelector("#plus-icon").addEventListener("click");

textInput.addEventListener("keydown", function (e) {
    if (e.key == "Enter") {
        for (let i = 0; i < newTodos.length; i++) {
            newTodos[i] = (this.value);
            entry.appendChild(document.createTextNode(newTodos[i]));
        }
        list.appendChild(entry);
        textInput.value = "";

    }
});