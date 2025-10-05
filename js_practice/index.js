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

/*const PI = 3.14159;
let radius;
let circumference;


document.getElementById(`submit`).onclick = function () {
    radius = document.getElementById(`txt`).value;
    radius = Number(radius);
    circumference = 2 * PI * radius;
    document.getElementById(`myh3`).textContent = `${circumference} cm . Told ya!`
}*/

/*age = window.prompt(`What the hell is your age?`)
age = Number(age)
if(age > 21){
    console.log(`You are older than 21 years`)
}
else{
    console.log(`You are a kido, #bounce`)
}

let time = 14;

if (time < 12){
    console.log(`Good morning!`)
}
else{
    console.log(`Good afternoon`)
}

let isStudent = true;

if(isStudent){
    console.log(`You are a student`)
}
else{
    console.log(`You ARE NOT A student`)
}*/

/*let age = 29;
let hasLicense = false;

age = window.prompt(`Wetin be ur age?`)
age = Number(age)
if(age >= 16){
    console.log(`You are old enough to drive`)
}
else{
    console.log(`You are too small to get a license`)
}*/

/*let age = 20;
let hasLicense = false;

if (age >= 16){
    console.log(`You are old enough to drive`)

    if(hasLicense){
        console.log(`You have a license`)
    }
    else{
        console.log(`You DONT HAVE a license`)
    }
}
else{
    console.log(`You are not old enough to drive`)
}*/

/*const mytxt = document.getElementById(`mytxt`);
const mysubmit = document.getElementById(`mysubmit`);
const result = document.getElementById(`result`);

mysubmit.onclick = function(){
    age = mytxt.value;
    age = Number(age)

    if (age > 100 ){
        console.log(`You are too old`)
        result.textContent = `You are too old`
    }
    else if (age < 0){
        console.log(`Mbu ur age is negative?`)
        result.textContent = `Mbu ur age is negative`
    }
    else if (age == 0){
        console.log(`You were just born!!!`)
        result.textContent = `You were just born`
    }
    else if (age < 18){
        console.log(`Bro you cant watch this movie`)
        result.textContent = `Bro you cant watch`

    }
    else{
        console.log(`You can watch`)
        result.textContent = `You can watch`
    }
}*/

/*function happyBirthday(username, age){
    console.log(`HAppy Birthday To You`);
    console.log(`Happy birthday ${username}`)
    console.log(`You are ${age}`)
}

happyBirthday("Lesley", 20);
happyBirthday("Jerome", 90);*/

/*function add(x, y){
    return x + y
}

let answer = add(90, 20)
console.log(answer)*/

/*function subtract(x,y){
    return x - y
}

console.log(subtract(100, 20))*/

/*function isEven(Number){
    if (Number % 2 == 0){
        return true
    }
    else{
        return false
    }
}

console.log(isEven(1))*/

/*function isValidEmail(email){
    if (email.includes("@)")){
        return true;
    }
    else{
        return false;
    }

}

console.log(isValidEmail("leon@gmail.com"));*/

/*const mycheckbox = document.getElementById(`mycheckbox`);
const vbtn = document.getElementById(`vbtn`);
const mbtn = document.getElementById(`mbtn`);
const pbtn = document.getElementById(`pbtn`);
const mysubmit = document.getElementById(`mysubmit`);
const para = document.getElementById(`para`);
const para2 = document.getElementById(`para2`);


mysubmit.onclick = function(){
    if(mycheckbox.checked){
        para.textContent = `You are subscribed`
    }
    else{
        para.textContent = `You are NOT subscribed`
    }

    if(vbtn.checked){
        para2.textContent = `You are paying with visa`
    }else if (mbtn.checked){
        para2.textContent = `You are paying with mastercard`
    }
}*/

// let time = 16;
// let greeting = time <= 12 ? `Good morning` : `Good afternoon`;
// console.log(greeting)

// let isStudent = true;
// let message = isStudent ? `You are a student` : `You AreN't a student`
// console.log(message)

// let purchaseAmount = 101;
// let discount = purchaseAmount >= 100 ? 10 : 0;
// console.log(`Your total us $${purchaseAmount - (purchaseAmount * discount/100}`)

// let day = 7;

// if (day == 1){
//     console.log(`It is Sunday`);
// }else if (day == 2){
//     console.log(`It is Monday`)
// }else if (day == 3){
//     console.log(`It is Tuesday`)
// }else if (day == 4){
//     console.log(`It is Wednesday`)
// }else if (day == 5){
//     console.log(`It is Thursday`)
// }else if (day == 6){
//     console.log(`It is Friday`)
// }else if (day == 7){
//     console.log(`It is Saturday`)
// }else{
//     console.log(`The day ${day} you entered is invalid`)
// }

// switch(day){
//     case 1:
//         console.log(`It is Monday`);
//         break;
//     case 2:
//         console.log(`It is Tuesday`);
//         break;
//     case 3:
//         console.log(`It is Wednesday`);
//         break;
//     case 4:
//         console.log(`It is tHursday`);
//         break;
//     case 5:
//         console.log(`It is Friday`);
//         break;
//     case 6:
//         console.log(`It is Saturday`);
//         break;
//     case 7:
//         console.log(`It is Sunday`);
//         break;
//     default:
//         console.log(`${day} is not a day`);

// }

// testScore = 52;
// let letterGrade;

// switch(true){
//     case testScore >= 90:
//         letterGrade = "A"
//         break;
//     case testScore >= 80:
//         letterGrade = "c";
//         break;
//     case testScore >= 70:
//         letterGrade = "d";
//         break;
//     case testScore >= 60:
//         letterGrade = "e";
//         break;
//     case testScore >= 50:
//         letterGrade = "o";
//         break;
//     default:
//         letterGrade = "F"

// }

// console.log(letterGrade)

//let userName = "LeonNsamba";

// let charUser = userName.charAt(0)
// console.log(charUser)\\

// console.log(userName.indexOf("n"))

// console.log(userName.length)

// userName = userName.toLowerCase();
// console.log(userName)

// let result = userName.includes(" ")

// if (!result){
//     console.log(`Your username must include a space`)
// }else{
//     console.log(`Valid username`)
// }

// let phoneNumber = "777-967-578";
// phoneNumber = phoneNumber.replaceAll("-", " ")
// phoneNumber = phoneNumber.padStart(12, "0")


// console.log(phoneNumber)

// let tagName = document.getElementsByTagName(`input`)
// console.log(tagName)

// let websiteOpener = window.prompt("Enter website url: ")

// if (websiteOpener === "https://www.ibm.com/us-en"){
//     window.open(websiteOpener)
// }

// fullName = "Leon Nsamba";

// firstName = fullName.slice(0,5).toLowerCase();
// lastName = fullName.slice(fullName.indexOf(" ")).trim().toUpperCase()
// console.log(firstName)
// console.log(lastName)

// const email = "leonnsamba@gmail.com";

// let userName = email.slice(0, email.indexOf("@"));
// let extension = email.slice(email.indexOf("@") + 1, email.indexOf("."));
// console.log(userName);
// console.log(extension);

// let matrix = [[1,2,3],
//              [4,5,6],
//              [7,8,9]];

// matrix[0][0] = 'X'
// matrix[0][1] = 'O'
// matrix[0][2] = 'X'


// for (items of matrix){
//     let rowString = items.join()
//     console.log(rowString)
// }

// let numbers = [1,2,3,4,5]
// let maximum = Math.max(...numbers)
// let minimum = Math.min(...numbers)

// console.log(minimum)

// let userName = "Leon Nsamba"
// let letters = [...userName].join(' ')

// console.log(letters)

// let fruits = ["apple", "orange", "mango"]
// let vegies = ["celery", "avoc"]
// let newFoods = [...fruits, ...vegies]

// console.log(newFoods)

// function openFridge(...foods){
//     console.log(...foods)
// }

// const food1 = "pizza"
// const food2 = "apple"
// const food3 = "cake"
// const food4 = "burger"

// openFridge(food1,food2,food3,food4)

// myArray = ["xxxtenacion", "pop smoke", "juice wrld"]
// console.log(...myArray)


// const userName = prompt(`What is your name?`)

// function hello(userName){

//     if(isNaN(userName)){
//     console.log("Hello " + userName);
//     }
//     else{
//         console.log(`Your name cannot be numbers db`)
//     }
// }

// hello(userName)

// const hello = (name, age) => {console.log(`Hello ${name}`)
//                         console.log(`sybau`)
//                         console.log(`You are ${age}`)}


// hello("YBG DON", 9000);

// setTimeout(function(){
//     console.log(`tiwa savage`);
// }, 4000);

// setTimeout( () => console.log(`onetwothreefour`), 2000)

// let person = (name) => console.log(`what the hellyante ${name}`)

// person("Jhon Duran")

// const number = [1,2,3,4,5,6];

hello(goodbye);

function hello(callback){
    console.log("hello")
    callback()
}

function goodbye(){
    console.log("goodbye")
}
