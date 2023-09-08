const guessNumberGame = document.querySelector("#guessNumberGame");
const numberRange = guessNumberGame.querySelector("#numberRange");
const userNumber = guessNumberGame.querySelector("#userNumber");
const result = document.querySelector("#result");

function submitNumber(event) {
  event.preventDefault();
  const maxNumber = numberRange.value;
  const userGuessNumber = parseInt(userNumber.value, 10);

  localStorage.setItem("maxNumber_key", maxNumber);
  const updateMaxNum = parseInt(localStorage.getItem("maxNumber_key"), 10);
  if (userGuessNumber < 0 || userGuessNumber > updateMaxNum) {
    alert(`0부터 ${updateMaxNum} 사이의 숫자를 맞춰보세요!`);
    return;
  }

  const randomNumber = Math.floor(Math.random() * (updateMaxNum + 1));
  compareNumbers(userGuessNumber, randomNumber);
}

function compareNumbers(userNumber, randomNumber) {
  result.classList.remove("hidden");
  if (userNumber === randomNumber) {
    result.innerHTML = `<h3>You chose: ${userNumber}, the machine chose: ${randomNumber}</h3>
                        <h3>You won!</h3>`;
  } else {
    result.innerHTML = `<h3>You chose: ${userNumber}, the machine chose: ${randomNumber}</h3>
                        <h3>You lost!</h3>`;
  }
}

guessNumberGame.addEventListener("submit", submitNumber);
