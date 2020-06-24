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

var someObject = {
    friends: [{
            name: "Malfoy"
        },
        {
            name: "Crabbe"
        },
        {
            name: "Goyle"
        }
    ],
    color: "baby blue",
    isEvil: true
};


// movieDB exercise lecture 171
var movieDB = {
    movies: [{
            name: "Bugs Life"
        },
        {
            name: "Frozen"
        },
        {
            name: "Frozen 2"
        },
        {
            name: "Die Hard"
        }
    ]
};