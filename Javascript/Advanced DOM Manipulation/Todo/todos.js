var lis = document.querySelectorAll("li");

// firstLi.addEventListener("mouseover", function () {
//     firstLi.style.color = "green";

//     more practical to use CSS file to complete this task
//     firstLi.classList.add("mouseOver");
//     firstLi.classList.remove("mouseOut");
// });

// firstLi.addEventListener("mouseout", function () {
//     firstLi.style.color = "black";

//     more practical to use CSS file to complete this task
//     firstLi.classList.add("mouseOut");
//     firstLi.classList.remove("mouseOver");
// });


// utilize for loop to complete tasks above
for (let i = 0; i < lis.length; i++) {
    lis[i].addEventListener("mouseover", function () {
        this.classList.add("selected");
    });
    lis[i].addEventListener("mouseout", function () {
        this.classList.remove("selected");
    });
    lis[i].addEventListener("click", function () {
        this.classList.toggle("done");
    });
}