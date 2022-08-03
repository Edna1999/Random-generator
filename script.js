
// Assignment Code
var generateBtn = document.querySelector("#generate");


 
// Write password to the #password input
function writePassword() {
  
function generatePassword() {

// prompts for the password length and characters
  var characters = window.prompt("How many characters would you like?");


 if (characters < 8 || characters >128) {
  window.alert("Password must be between 8 and 128 characters!");
  return;
  }                               

  if (isNaN(characters)) {
    window.alert("You must select a number!");
    return;
  }


  var lowercase = window.confirm("Would you like lowercase?");
  var uppercase = window.confirm("Would you like uppercase?");
  var numbers = window.confirm("Would you like numbers?");
  var special = window.confirm("Would you like special characters?"); 

  //Arrays with lists of characters
  var lowercaseList = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var uppercaseList = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var numbersList = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var specialList = ["!", "@", "#", "$", "?", "%", "^", "&", "*", "+", "="];
   
  //Empty array (location for selected characters)
  var choices = [];

  //Logic behind generator
  if (lowercase) {
    choices= choices.concat(lowercaseList);
  }
   if (uppercase) {
    choices= choices.concat(uppercaseList);
  }

  if (numbers) {
    choices= choices.concat(numbersList);
  }

  if (special) {
    choices= choices.concat(specialList);
  }

// Empty string (location for the password)
 var generatedPassword = "";

  for (var i = 0; i < characters; i++) {
   
    generatedPassword += choices[Math.floor(Math.random() * choices.length)];

  } return generatedPassword;
 
 
}
var password = generatePassword();
var passwordText = document.querySelector("#password");


passwordText.value = password;
  
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

generatePassword();
writePassword();

