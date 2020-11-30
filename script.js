// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowerCaseChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCaseChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChars = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "{", "|", "}", "~", '"'];

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

//Write function for genertePassword
function generatePassword() {
    var passLength = Number(prompt("How many characters would you like for passwords between 8 to 128 characters?"));

    //Validation password's length must be between 8 and 128 characters. 
    //If the answer is not in the range, ask the questions again.    
    while (isNaN(passLength) || passLength < 8 || passLength > 128) {
        alert("Password length must be between 8-128 characters.Try again!")
        var passLength = Number(prompt("How many characters would you like for passwords between 8 to 128 characters?"));
    }

    var lowerCase = confirm('Include lowercase?');
    var upperCase = confirm('Include uppercase?');
    var numeric = confirm('Include numbers?');
    var specialChar = confirm('Include special characters?');

    // Validation input. At least one character type should be selected.
    while (lowerCase === false && upperCase === false && numeric === false && specialChar === false) {
        alert("You must choose at least one parameter");
        var lowerCase = confirm('Include lowercase?');
        var upperCase = confirm('Include uppercase?');
        var numeric = confirm('Include numbers?');
        var specialChar = confirm('Include special characters?');
    }

    var chars = [];
    var generatedPass = '';

    if (lowerCase) chars = chars.concat(lowerCaseChar);
    if (upperCase) chars = chars.concat(upperCaseChar);
    if (numeric) chars = chars.concat(numbers);
    if (specialChar) chars = chars.concat(specialChars);

    //generate password for matching citeria
    for (var i = 0; i < passLength; i++) {
        var charIndex = Math.floor(Math.random() * chars.length);
        generatedPass += chars[charIndex];
    }
    return generatedPass;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);