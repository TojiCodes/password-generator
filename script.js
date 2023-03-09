// Assignment Code
var generateBtn = document.querySelector("#generate");

var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
];
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
];
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.',
];

// Write password to the #password input
function writePassword() {
var password = generatePassword();
var passwordText = document.querySelector("#password");

passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


function generatePassword () {


    passwordLength = prompt("Chose a password length between 8 and 128?");

    if (!passwordLength) return "No Password";

passwordLength = parseInt(passwordLength);

if (!passwordLength) {
    alert("Please enter a valid number.")
    return generatePassword();
}

if (passwordLength < 8 || passwordLength > 128) {
    alert("Please enter a number between 8 and 128.")
    return generatePassword();
}

var allCharacters = [];

var includeNumbers = confirm("Include number?");

if (includeNumbers) {
    allCharacters = allCharacters.concat(numericCharacters);


}

console.log(allCharacters);

return "asdfasdfasdf"

}