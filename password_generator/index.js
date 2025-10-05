const genPass = document.getElementById(`genPass`)

function generatePassword(length, includeLowercase, includeUppercase, includeNumbers, includeSymbols){

    const lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
    const upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "0123456789"
    const symbolChars = "!@$%()_+=-%";

    let allowedChars = "";
    let password = "";

    allowedChars += includeLowercase ? lowerCaseChars : "";
    allowedChars += includeUppercase ? upperCaseChars : "";
    allowedChars += includeNumbers ? numberChars : "";
    allowedChars += includeSymbols ? symbolChars : "";

    if(passwordLength <= 0){
        return `(Password length must be atleast 1)`;
    }

    if(allowedChars.length === 0){
        return `(Atleast one set of characters needs to be selected)`
    }

    for(let i = 0; i < length; i++){

        /*The math.random() generates a random number then the
        allowed.chars.length multiples it by the number of elements stored
        in that empty string ie 26 uppercase, 26 lowercase, 10 digits and 10
        symbols = 72(if all conditions are marked true).
        The math.floor() then rounds down to nearest whole number*/
        const randomIndex = Math.floor(Math.random() * allowedChars.length)


        /*The password function calls upon the allowed characters and references
        the number generated as an index relative to the list*/
        password += allowedChars[randomIndex];

        //console.log(password)

    }

    return password;

}


/*Defining the parameters to be used in the function*/
const passwordLength = 12;
const includeLowercase = true;
const includeUppercase = true;
const includeNumbers = true;
const includeSymbols = true;


/*Calling the function and storing the final password
in a constant called password*/
const password = generatePassword(passwordLength,
                                 includeLowercase,
                                 includeUppercase,
                                 includeNumbers,
                                 includeSymbols)

console.log(`Generate password: ${password}`)

genPass.textContent = password;