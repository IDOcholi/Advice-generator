// Variables
let dice = document.getElementsByClassName("button");
let adviceNumber = document.getElementById("advice-number");
let adviceText = document.querySelector(".advice-text");

// Run the showQuote function when the page is loaded
window.onload = showQuote;

// Eventlistener for dice button
dice.addEventListener("click", function(){
    showQuote();
});

// showQuote function to show random quote from API
function showQuote(){
    fetch("https://api.adviceslip.com/advice")
    .then(response => response.json())
    .then((data) => data.slip)
    .then((data) => {
        adviceNumber.textContent = data.id;
        adviceText.textContent = data.advice;
    })
    .catch((error) => {
        alert(`Error ${error}`);
    });
}
