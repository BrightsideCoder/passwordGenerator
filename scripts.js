const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passwordLength = prompt("What should the length of the password be?");
let passwordField1 = document.querySelector(".left-field");
let passwordField2 = document.querySelector(".right-field");

function getRandomChar() {
    let randomChar = Math.floor(Math.random() * characters.length);
    return characters[randomChar];
}

function generateRandomPassword() {
    let randomPassword = "";
    for (let i = 0; i < passwordLength; i++) {
        randomPassword += getRandomChar();
    }
    return randomPassword;
}

function outputPassword() {
    passwordField1.textContent = generateRandomPassword();
    passwordField2.textContent = generateRandomPassword()
}