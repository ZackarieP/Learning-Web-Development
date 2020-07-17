let textInput = document.querySelector("#input");

let ul = document.querySelector("#todos");
let li = document.createElement("li");
let plus = document.querySelector("#plus-icon");

let addLi = function (e) {
    var ul = document.getElementById("todos");
    var text = document.getElementById("input");
    var li = document.createElement("li");
    if (e.key === "Enter" && (text.value != "")) {
        li.setAttribute('id', text.value);
        li.appendChild(document.createTextNode(text.value));
        ul.appendChild(li);
        text.value = "";
    } else return;
}

textInput.addEventListener("keydown", function (e) {
    var ul = document.getElementById("todos");
    var text = document.getElementById("input");
    var li = document.createElement("li");
    if (e.key === "Enter" && (text.value != "")) {
        li.setAttribute('id', text.value);
        li.appendChild(document.createTextNode(text.value));
        ul.appendChild(li);
        text.value = "";
    } else return;
});

plus.addEventListener("click", function () {
    var ul = document.getElementById("todos");
    var text = document.getElementById("input");
    var li = document.createElement("li");
    if (text.value != "") {
        li.setAttribute('id', text.value);
        li.appendChild(document.createTextNode(text.value));
        ul.appendChild(li);
        text.value = "";
    }
});