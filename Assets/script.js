// Assignment Code
var generateBtn = document.querySelector("#generate");

const password =document.getElementById("password")

function generatePassword() {
  console.log ("the button was clicked")
}

const characters = ["a","b","c","d","e","f","g","h", "i","j","k","l","A","B","C","D","E","F","G","H","I","J","K","L","0","1","2","3","4","5","6","7","8","9","!","@","£","$","%","%",]

let pw= prompt ("Please choose a lenght between 8 and 128 characters");
if (pw<8 || pw >128){
  alert ("Incorrect password lenght")
  generatePassword ()
} else if (pw === '' || isNaN(pw)) {
  alert ("Please enter valid password between 8 and 128")
  generatePassword ()
} 

const UserIncCL =confirm ("Do you want to add a capital letter?")
const UserIncLC = confirm ("Do you want to add a lowercase letter?")
const UserIncNumber =-confirm("Do you want to add numbers?")
const UserIncSymbols = confirm("Do you want to add symbols?")

for (const i=0; i< passwordlength; i++) {
  password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.lenghth - 1)))
}

// Write password to the #password input

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password"); 

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

