let text = document.querySelector("#input");

let ul = document.querySelector(".todos");
let li = document.createElement("li");
// let plus = document.querySelector("#plus-icon").addEventListener("click");

text.addEventListener("keydown", function (e) {
    if (e.key == "Enter") {
        li.appendChild(document.createTextNode(text.value));
        ul.appendChild(li);
        text.value = "";
    } else return;
});

// function listItem() {
//     li.appendChild(document.createTextNode(text.value));
//     ul.appendChild(li);
//     text.value = "";
// }