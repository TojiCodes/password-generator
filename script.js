// Assignment Code
var generateBtn = document.querySelector("#generate");

var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var lowerCasedCharacters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var upperCasedCharacters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var specialCharacters = ['@','%','+','\\','/',"'",'!','#','$','^','?',':',',',')','(','}','{',']','[','~','-','_','.'];

// An empty array that will receive input from other variables
var answersCart = [];

// Write password to the #password input
function writePassword() {
var password = generatePassword();
var passwordText = document.querySelector("#password");

passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function randomInt(min, max){
  if (!max){
    max=min
    min= 0
  }
  var rand = Math.random()
  return Math.floor (min*(1-rand) + rand*max)
  };
  
  function getRandomItem (list){
    return list[randomInt(list.length)]
  }

function generatePassword () {

    passwordLength = prompt("Choose a password length between 8 and 128?");

// If input for password length is not a number, it will return this window alert
    if (isNaN(passwordLength)){
      window.alert("Not a number")
    }
// If input doesn't meet required length, alert user
    else if (passwordLength < 8 || passwordLength > 128) {
      window.alert ("Invalid password length")
    } else {
      
    }
  
    // if (!passwordLength) return "No Password";

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
// Questions that will prompt to user
var includeNumbers = confirm("Include number?");
var lowercaseQuestion = window.confirm("Include lowercase letters?")
var uppercaseQuestion = window.confirm("Include Uppercase letters?")
var symbolsQuestion= window.confirm("Include symbols?")

if (includeNumbers === true) {
    // allCharacters = allCharacters.concat(numericCharacters);

// If the user wants to include number, push numeric characters list into answers cart
answersCart.push(numericCharacters)
}
if (lowercaseQuestion === true) {
    answersCart.push(lowerCasedCharacters)
}

if (uppercaseQuestion === true) {
    answersCart.push(upperCasedCharacters)
}

if (symbolsQuestion === true) {
    answersCart.push(specialCharacters)
}

// If the user selects no for every prompt, it automatically makes password all lowercase letters
if (answersCart.length === 0) {
  answersCart.push(lowerCasedCharacters)
}

console.log(allCharacters);

var generatedPassword = ""
// This for loop starts with 1st value, increments by 1, and stops at the value of passwordLength
for(var i = 0; i < passwordLength; i++) {

// This is grabbing a list of randomly selected variables from the answerCart array
var randomList = getRandomItem(answersCart)

// This is grabbing a random character from the randomized lists created above
var randomCharacter = getRandomItem(randomList)

generatedPassword += randomCharacter

}

return generatedPassword

}