"use strict";
//This is diffrent elements from html stored in a var
const form = document.getElementById("guessForm");
const errorMessage = document.getElementById("errorMessage");
const successMessage = document.getElementById("successMessage");

let number = Math.floor(Math.random()* 50) +1; //Random number (floor avrundar (random hämtar ett nummer))

function showErrorMessage(message) {
    errorMessage.classList.add("visible");
    errorMessage.innerHTML = message;
  
    setTimeout(function () {
      errorMessage.classList.remove("visible");
    }, 1000);
  }
  
  function showSuccsesMessage(message) {
      successMessage.classList.add("visiblee");
      successMessage.innerHTML = message;
    
      setTimeout(function () {
        successMessage.classList.remove("visiblee");
      }, 1000);
    }

form.onsubmit = function (event) {
  event.preventDefault();

  let guess = Number(form.elements.guess.value);
  form.elements.guess.value = "";

  if (Number.isNaN(guess)) {
    showErrorMessage("That is not a number...");
  } else if (guess === number) {
    showSuccsesMessage("correct");
  } else if (guess < number) {
    showErrorMessage("Higher");
  } else if (guess > number) {
    showErrorMessage("Lower");
  }
};

