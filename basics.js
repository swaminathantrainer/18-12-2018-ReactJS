// variables
let a = "Swami";
a = "Hello";

let c = 1;
let d = 3.33;

// constant variables
const PI = 3.14;
// PI = 3.21;

// functions
let fourthPower = (x) => {
    let result = x * x * x * x * x;
    return result;
};

// let x = 10;
// let result1 = x * x * x * x * x;
// let result2 = x * x * x * x * x;
// let result3 = x * x * x * x * x;
// let result4 = x * x * x * x * x;
// let result5 = x * x * x * x * x;
// let result6 = x * x * x * x * x;

let r1 = fourthPower(4);
let r2 = fourthPower(5);
let r3 = fourthPower(6);
let r4 = fourthPower(7);
let r5 = fourthPower(8);
let r6 = fourthPower(9);

console.log(r1);
console.log(r2);
console.log(r3);
console.log(r4);
console.log(r5);
console.log(r6);

let greeting = (name) => {
    let r = "Hello " + name + ". How are you? How is life?";
    return r;
};

let s = greeting("Swami");
console.log(s);

let e = greeting("Divya");
console.log(e);

// loops
let i = 0;

while (i <= 10) {
    console.log("The number now is " + i);
    i = i + 1;
}

console.log("While loop over");

let fibonacci = (num) => {
    // declare a result varaible
    let prev = 0;
    let current = 1;

    console.log(prev);
    let result = current;

    // Write a while loop with condition until the result <= num
    while (result <= num) {
        console.log(result);
        result = prev + current;
        prev = current;
        current = result;
    }
};

fibonacci(105);

// statements
let oddOrEven = (num) => {
    if (num % 2 == 0) {
        console.log("This is an even number: " + num);
    } else {
        console.log("This is a odd number: " + num);
    }
}

oddOrEven(15);
oddOrEven(12);

// Classes and Objects
class Student {
    // argument constructor
    constructor(n, roll, e) {
        this.fname = n;
        this.lname = n;
        this.rollNumber = roll;
        this.email = e;
        this.courses = [];
        this.parent = null;
    }

    addACourse(courseName) {
        this.courses.push(courseName);
    }
}

let student1 = new Student("Swami M", 12345, "swaaminathanm@gmail.com");
let student2 = new Student("Divya", 123, "d@gmail.com");

student2.email = "abc@gmail.com";

console.log(student2.email);

student1.addACourse("DS");
student1.addACourse("Science");

student2.addACourse("Physics");
student2.addACourse("Chemistry");

console.log(student1.courses);
console.log(student2.courses);

// Inheritance
class SportsStudent extends Student {
    // argument constructor
    constructor(n, roll, e) {
        super(n, roll, e);
        this.sportsCertificates = [];
    }

    addACertificate(cert) {
        this.sportsCertificates.push(cert);
    }
}

let student3 = new SportsStudent("Rahul", 11111, "aaa@gmail.com");
student3.addACertificate("Basket Ball Tournment 2015");
student3.addACourse("DS");

console.log(student3.courses);
student3.parent = "TEST Parent";
console.log(student3.parent);
