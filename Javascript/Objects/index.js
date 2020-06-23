var person1 = {
    name: "Zack",
    state: "FL",
    metrics: {
        age: 22,
        weight: 160,
        height: "5'11"
    }
};

function callPerson() {
    console.log(person1.name);
    console.log(person1.metrics.age);

}

var human = new Object();
human.eyeColor = "green";
human.height = "5'10";
human.weight = 160;