let selectedIngredients = [];
const correctIngredients = ["meat", "onion"];

let count = 0;
let timeLeft = 10;
let timer;

const clickSound = new Audio("click.mp3");

function startGame() {
  document.getElementById("start").classList.add("hidden");
  document.getElementById("menu").classList.remove("hidden");
}

function chooseDish(dish) {
  document.getElementById("menu").classList.add("hidden");
  document.getElementById("stage1").classList.remove("hidden");
}

function selectIngredient(item) {
  clickSound.play();

  if (!correctIngredients.includes(item)) {
    showResult(false);
    return;
  }

  if (!selectedIngredients.includes(item)) {
    selectedIngredients.push(item);
  }

  if (selectedIngredients.length === correctIngredients.length) {
    startCooking();
  }
}

function startCooking() {
  document.getElementById("stage1").classList.add("hidden");
  document.getElementById("stage2").classList.remove("hidden");

  timer = setInterval(() => {
    timeLeft--;
    document.getElementById("timer").innerText = timeLeft;

    if (timeLeft <= 0) {
      showResult(false);
    }
  }, 1000);
}

function cook() {
  count++;
  document.getElementById("count").innerText = count + " / 10";

  document.getElementById("pot").classList.add("shake");
  setTimeout(() => {
    document.getElementById("pot").classList.remove("shake");
  }, 200);

  if (count >= 10) {
    showResult(true);
  }
}

function showResult(success) {
  clearInterval(timer);

  document.getElementById("stage2").classList.add("hidden");
  document.getElementById("result").classList.remove("hidden");

  document.getElementById("resultText").innerText =
    success ? "요리 성공!" : "요리 실패!";
}