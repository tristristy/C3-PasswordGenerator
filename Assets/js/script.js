// Assignment Code
var generateBtn = document.querySelector("#generate");
var copyBtn = document.querySelector("#copy");

const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
const upperAlphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const numbers = ["0","1","2","3","4","5","6","7","8","9"];
const special = ["~","!","@","#","$","%","^","&","*","(",")",">","<","?","/","_","-","+","=","\\"];


function generatePassword() {
  var passwordArray = [];

  var length = window.prompt("Please enter the length you would like your password to be. Must be between 8 and 180 characters")
  if(length > 180 || length < 8){

  }else if(length <= 180 || length >= 8 ){

    var lowercaseConfirm = window.confirm("Press Okay if you would like Lowercase Letters in your generated password, or cancel to not include them")
    var uppercaseConfirm = window.confirm("Press Okay if you would like Uppercase Letters in your generated password, or cancel to not include them")
    var numberConfirm = window.confirm("Press Okay if you would like Numbers in your generated password, or cancel to not include them")
    var specialConfirm = window.confirm("Press Okay if you would like Special Characters in your generated password, or cancel to not include them")
    var password = ""

    //adds array to main password array based on previous window.confirms
    if(lowercaseConfirm = true){
      passwordArray = passwordArray.concat(alphabet);
    }
    if(uppercaseConfirm = true){
      passwordArray = passwordArray.concat(upperAlphabet);
    }
    if(numberConfirm = true){
      passwordArray = passwordArray.concat(numbers);
    }
    if(specialConfirm = true){
      passwordArray = passwordArray.concat(special);
    }

    //attempted use with switch cases
    //switch(lowercaseConfirm,uppercaseConfirm,numberConfirm,specialConfirm){
      //case lowercaseConfirm(true):
        //passwordArray = concat(alphabet);
        //break;
     // case uppercaseConfirm(true):
       //passwordArray = concat(upperAlphabet);
        //break;
      //case numberConfirm(true):
        //passwordArray = concat(numbers);
      //case specialConfirm(true):
        //passwordArray = concat(special);
      //case lowercaseConfirm(false), uppercaseConfirm(false), numberConfirm(false), specialConfirm(false):

    };
    for (var i = 0; i <= length; i++) {
      password += passwordArray[Math.floor(Math.random() * passwordArray.length + 1)]
      console.log(password)
    }
    return password;
  }

  
  


// Write password to the #password input
function writePassword() {
  var password = ""
  var password = generatePassword();

  var passwordText = document.getElementById("password");

  passwordText.value = password;
}

function copyPass(){
  var copyText = document.getElementById("password");
  copyText.select();
  document.execCommand("copy");
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
copyBtn.addEventListener("click", copyPass);


