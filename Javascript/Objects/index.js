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
            title: "Bugs Life",
            rating: 5,
            hasWatched: "seen"
        },
        {
            title: "Toy Story 4",
            rating: 3,
            hasWatched: "not seen"
        },
        {
            title: "Frozen",
            rating: 4.5,
            hasWatched: "seen"
        },
        {
            title: "Die Hard",
            rating: 3.45,
            hasWatched: "seen"
        }
    ]
};

function movieStat() {
    for (let i = 0; i < movieDB.movies.length; i++) {
        console.log('You have ' + movieDB.movies[i].hasWatched +
            ' "' + movieDB.movies[i].title + '" - ' + movieDB.movies[i].rating + ' stars');
    }
}