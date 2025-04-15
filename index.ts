let souls_borne_name: string = "ornstein";
let souls_collected: number = 500;
let chosen_undead: boolean = true;

let greeting = "Arise";

function add(n1: number, n2: number): number {
    return n1 + n2;
}

console.log(add(150958406, 3457408670));

const addArrow = (n1: number, n2: number): number => n1 + n2;

const printResult = (num: number): void => {
    console.log('Result: ' + num);
};

const person: {
    name: string;
    age: number;
    hobbies: string[];
    role: [number, string];
} = {
    name: "Ornstein",
    age: 1000,
    hobbies: ["lightning spears", "dragon hunting"],
    role: [1, "Executioner"]
};

let product: {
    id: string;
    price: number;
    tags: string[];
    details: {
        title: string;
        description: string;
    };
} = {
    id: "soul_of_smough",
    price: 10000,
    tags: ["rare", "boss", "forgeable"],
    details: {
        title: "Soul of Smough",
        description: "The soul of Executioner Smough, used to forge powerful weapons."
    }
};

enum Role {
    ADMIN = "ADMIN",
    READ_ONLY = 0,
    AUTHOR = 100,
}

let answer: string | number | boolean;
answer = "false";

type Combinable = number | string;

type User = {
    name: string;
    age: number;
};

function greet(user: User) {
    console.log("Hi, I am " + user.name);
}

function isOlder(user: User, checkAge: number) {
    return checkAge > user.age;
}


console.log(add(10, 20)); // Outputs: 30

interface Character {
    name: string;
    class: "Knight" | "Sorcerer" | "Thief";
    level: number;
    stats: {
        strength: number;
        dexterity: number;
        intelligence: number;
        faith: number;
    };
    levelUp: () => void;
}


