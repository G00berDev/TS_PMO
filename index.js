"use strict";
let souls_borne_name = "ornstein";
let souls_collected = 500;
let chosen_undead = true;
let greeting = "Arise";
function add(n1, n2) {
    return n1 + n2;
}
console.log(add(150958406, 3457408670));
const addArrow = (n1, n2) => n1 + n2;
const printResult = (num) => {
    console.log('Result: ' + num);
};
const person = {
    name: "Ornstein",
    age: 1000,
    hobbies: ["lightning spears", "dragon hunting"],
    role: [1, "Executioner"]
};
let product = {
    id: "soul_of_smough",
    price: 10000,
    tags: ["rare", "boss", "forgeable"],
    details: {
        title: "Soul of Smough",
        description: "The soul of Executioner Smough, used to forge powerful weapons."
    }
};
var Role;
(function (Role) {
    Role["ADMIN"] = "ADMIN";
    Role[Role["READ_ONLY"] = 0] = "READ_ONLY";
    Role[Role["AUTHOR"] = 100] = "AUTHOR";
})(Role || (Role = {}));
let answer;
answer = "false";
function greet(user) {
    console.log("Hi, I am " + user.name);
}
function isOlder(user, checkAge) {
    return checkAge > user.age;
}
console.log(add(10, 20)); // Outputs: 30
