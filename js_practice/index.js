/*console.log(`Hello bro`);

window.alert(`baller alert`);

document.getElementById("myh1").textContent = 'chingy';

document.getElementById("myp").textContent = 'pushing p';
*/

/*let x;
x = 102240;

console.log(x);

let y = 13;

console.log(y);
*/

/*let age = 20;
let price = 10.99;
let gpa = 4.8

console.log(age);
console.log(price)
console.log(gpa);

console.log(`You are ${age} years old`);
console.log(`Your gpa is ${gpa}, do better`);
console.log(`The price of an LV watch is $${price}`);
console.log(typeof age);*/

/*let firstName = "guilano"
let faveFood = "dog meat"
let email = "br2o3@gmail.com"
console.log(typeof firstName)

console.log(`The fastest freestyler is called ${firstName}!`);
console.log(`${faveFood} is a delicacy in my country!`)
console.log(`Bro's email is ${email}`);*/

/*let online = true;
let forSale = true;
let isStudent = true;

console.log(typeof online);

console.log(`Bro is online: ${online}`);

console.log(`is this tesla for sale?: ${forSale}`);

console.log(`Enrolled: ${isStudent}`);*/


/*let fullName = "Jovani dosanto"
let age = 104;
let isStudent = false;

document.getElementById("p1").textContent = `Your name is ${fullName}`;
document.getElementById("p2").textContent = `You are ${age} years old`;
document.getElementById("p3").textContent = `Are you in school?: ${isStudent}`
*/

/*let students = 181;
let extrastudents = students % 82

students += 100;

students++;



console.log(students);
console.log(extrastudents);*/

/*let username = window.prompt('Who are you? ');
let age = window.prompt('What is your age?');


console.log(username);
console.log(age);*/

/*let username;

document.getElementById(`mysubmit`).onclick = function () {
    username = document.getElementById(`mytext`).value;
    document.getElementById(`myh1`).textContent = `Your name is ${username}`
    console.log(username)
}*/

/*let age = window.prompt(`How old are you? `)
age = Number(age)

age +=1;

console.log(age, typeof age);

let x = "0";
let y = "pizza";
let z = "pizza";

x = Number(x);

console.log(x, typeof x)*/

const PI = 3.14159;
let radius;
let circumference;


document.getElementById(`submit`).onclick = function () {
    radius = document.getElementById(`txt`).value;
    radius = Number(radius);
    circumference = 2 * PI * radius;
    document.getElementById(`myh3`).textContent = `${circumference} cm . Told ya!`
}