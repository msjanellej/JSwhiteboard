"use strict";
getHappyNumbers();

//Reverse String

function runReverseString(){
    let string = getStringToReverse();
    let reverseWord = reverseString(string);
    displayResult(reverseWord);
}
function getStringToReverse(){
    let string = prompt("Select a word to reverse");
    return string;
}
function reverseString(word){
    let reverseWord = "";
    for (let i = word.length -1; i > -1; i--){
        reverseWord = reverseWord + word[i];     
    }
    return reverseWord;
}
function displayResult(result){
    document.getElementById("whiteboardProblems").innerHTML = result;
}
//capitalizeWord

function runCapitalizeWord(){
  let phrase = getPhrase();
  let result = CapitalizePhrase(phrase);
  displayResult(result);
}

function getPhrase(){
    let phrase = prompt("Write a two word phrase")
    return phrase;
}
function CapitalizePhrase(phrase){
    let captureString = "";
    let words = phrase.split(" ")
    for (let i = 0; i < words.length; i++){
        words[i] = words[i][0].toUpperCase()+ words[i].substr(1)
    }
    captureString =words.join(" ");
    return captureString;
}
//Compress a string
function getCompressedString(){
    let string = getString();
    let result =compressString(string);
    displayResult(result);
}
function getString(){
    let string = prompt("Insert String to be compressed")
    return string;
}
function compressString(string){
    let compressedString = "";
    let array = string.split("");
    let counter = 0;
    let current = array[0];
    for (let i =0; i < array.length; i++){
        if (current == array[i]){
            counter++;
        }
        else{
            compressedString += counter + current;
            current = array[i];
            counter = 1;
        }
    }
    compressedString += counter + current;
    return compressedString;
}
function getPalindrome(){
    let word = getWord();
    let reverseWord = reverseString(word)
    let result = palindromeChecker(word, reverseWord);
    displayResult(result); 
}
function getWord(){
    let word = prompt("plese enter a word");
    return word;
}
function palindromeChecker(word, reverseWord){
    let isPalindrome = false;
    if (reverseWord === word ){
        isPalindrome = true;
    }
    return isPalindrome;   
}
function getHappyNumbers(){
    let number =getNumber();
    let result = determineHappyNumber(number);
    displayResult(result);

}
function getNumber(){
    let number = prompt("please enter a number");
    return number;
}
function determineHappyNumber(input){
    let numbersTried = [];
    numbersTried.push(input);
    let sum = 0;
    let number =0;
    let result;
    let output = input;
    while (true){
        let digits = output.toString().split("")
        sum = 0;
        for (let i =0; i< digits.length; i++){
            number = parseInt(digits[i])* parseInt(digits[i]);
            sum += number;
        }
        if (sum ==1){
            result = input + " is a happy number";
            break;
        }
        else if (numbersTried.includes(sum)){
            result = input +" not a happy number";
            break;
        }
        else{
            numbersTried.push(sum);
            output = sum;
            continue;
        }
    }
    return result;

    

}







