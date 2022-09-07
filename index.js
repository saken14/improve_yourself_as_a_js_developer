/*
* 1. Null and undefined evaluation
* */

let userName, name
if (name !== null && name !== undefined && name !== '')
    userName = name
else
    userName = ""

/* OR ↓ */

userName = name || ""



/*
* 2. Ternary Operator
* */

let big, x;
if (x > 10)
    big = true;
else
    big = false;

/* OR ↓ */

big = x > 10;



/*
* 3. Ternary Operator v2
* */

function xx() { console.log('x') }
function yy() { console.log('y') }

let z = 3;
if (z === 3)
    xx();
else
    yy();

/* OR ↓ */

z = 3;
(z===3 ? xx : yy)();



/*
* 4. Declaring variables
* */

let q1;
let w1;
let e1 = 3;

/* OR ↓ */

let q2, w2, e2 = 3;



/*
* 5. Powers of base 10
* */

for (let i = 0; i < 10000; i++) {}

/* OR ↓ */

for (let i = 0; i < 1e4; i++) {}



/*
* 6. Arrow Functions
* */

function sum1(n1,n2) {
    return n1 + n2
}

/* OR ↓ */

const sum2 = (n1,n2) => n1 + n2



/*
* 7. Argument Destructuring
* */

function init1(config){
    const s = config.s;
    const t = config.t;
    return s + t;// or config.s + config.t
}
init1({s: "1", t: "2"});

/* OR ↓ */

function init2({s, t}){ // it can be with defaults like: function init({s = 10, t = 20}){
    return s + t;
}
init2({s: 1, t: 2});



/*
* 8. Map
* */

const animals = [
    {
        "name": "cat",
        "size": "small",
        "weight": 5
    },
    {
        "name": "dog",
        "size": "small",
        "weight": 10
    },
    {
        "name": "lion",
        "size": "medium",
        "weight": 150
    },
    {
        "name": "elefante",
        "size": "large",
        "weight": 5000
    }
]
/*Now imagine that we want to take just the names of the animals to add to another array. Normally we would do this:*/
let animalNames1 = [];
for (let i = 0; i < animals.length; i++) {
    animalNames1.push(animals[i].name);
}

/* OR ↓ */

let animalNames2 = animals.map((animal) => {
    return animal.name;
})



/*
* 9. Filter by Map
* */

/*This time returning only those whose size is “small”?*/
let smallAnimals1 = [];
for (let i = 0; i < animals.length; i ++) {
    if (animals[i].size === "small") {
        smallAnimals1.push(animals[i])
    }
}

/* OR ↓ */

let smallAnimals2 = animals.filter((animal) => {
    return animal.size === "small"
})



/*
* 10. Reduce by Map
* */

/* if we wanted to add up the weight of all the animals in our array of animal objects, how would we do it?*/
let totalWeight1 = 0;
for (let i = 0; i < animals.length; i++) {
    totalWeight1 += animals[i].weight;
}

/* OR ↓ */

let totalWeight2 = animals.reduce((total, animal) => {
    return total += animal.weight;
}, 0)



/*
* 1. Ternary Operator v2
* */

///////////

/* OR ↓ */

//////