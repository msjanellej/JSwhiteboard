"use strict";
runCapitalizeWord()

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







