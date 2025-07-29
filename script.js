const words = [
  { word: "addition", hint: "The process of adding numbers" },
  { word: "meeting", hint: "Event in which people come together" },
  { word: "number", hint: "Math symbol used for counting" },
  { word: "exchange", hint: "The act of trading" },
  { word: "canvas", hint: "Piece of fabric for oil painting" },
  { word: "garden", hint: "Space for planting flower and plant" },
  { word: "position", hint: "Location of someone or something" },
  { word: "feather", hint: "Hair like outer covering of bird" },
  { word: "comfort", hint: "A pleasant feeling of relaxation" },
  { word: "tongue", hint: "The muscular organ of mouth" },
  { word: "expansion", hint: "The process of increase or grow" },
  { word: "country", hint: "A politically identified region" },
  { word: "group", hint: "A number of objects or persons" },
  { word: "taste", hint: "Ability of tongue to detect flavour" },
  { word: "store", hint: "Large shop where goods are traded" },
  { word: "field", hint: "Area of land for farming activities" },
  { word: "friend", hint: "Person other than a family member" },
  { word: "pocket", hint: "A bag for carrying small items" },
  { word: "needle", hint: "A thin and sharp metal pin" },
  { word: "expert", hint: "Person with extensive knowledge" },
  { word: "statement", hint: "A declaration of something" },
  { word: "second", hint: "One-sixtieth of a minute" },
  { word: "library", hint: "Place containing collection of books" }
];

const wordText = document.querySelector(".word");
const hintText = document.querySelector(".hint span");
const timeText = document.querySelector(".time b");
const scoreText = document.querySelector(".score b");
const inputField = document.querySelector(".inputs input");
const refreshBtn = document.querySelector(".refresh");
const checkBtn = document.querySelector(".check");
const startBtn = document.querySelector(".start");
const statusText = document.querySelector(".status");

let currentWord, correctWord, scrambledWord, score = 0, time = 30, timer;

function initGame() {
  startBtn.style.display = "none";
  document.querySelector(".inputs").style.display = "flex";
  score = 0;
  scoreText.textContent = score;
  pickNewWord();
  startTimer();
}

function pickNewWord() {
  const randIndex = Math.floor(Math.random() * words.length);
  currentWord = words[randIndex];
  correctWord = currentWord.word.toLowerCase();
  scrambledWord = scrambleWord(correctWord);
  wordText.textContent = scrambledWord.toUpperCase();
  hintText.textContent = currentWord.hint;
  timeText.textContent = time;
  statusText.textContent = "";
  inputField.value = "";
  inputField.setAttribute("maxlength", correctWord.length);
}

function scrambleWord(word) {
  return word.split("").sort(() => Math.random() - 0.5).join("");
}

function startTimer() {
  clearInterval(timer);
  time = 30;
  timeText.textContent = time;
  timer = setInterval(() => {
    time--;
    timeText.textContent = time;
    if (time <= 0) {
      clearInterval(timer);
      statusText.textContent = `Game Over! Your score: ${score}`;
      document.querySelector(".inputs").style.display = "none";
      startBtn.style.display = "block";
      startBtn.textContent = "Play Again";
    }
  }, 1000);
}

function checkWord() {
  const userWord = inputField.value.toLowerCase();
  if (!userWord) {
    statusText.textContent = "Please enter a word!";
    return;
  }
  if (userWord === correctWord) {
    score += 10;
    scoreText.textContent = score;
    statusText.textContent = `Congrats! ${correctWord.toUpperCase()} is correct!`;
    setTimeout(pickNewWord, 1000);
  } else {
    statusText.textContent = `Oops! ${userWord} is not correct. Try again!`;
    inputField.value = "";
  }
}

startBtn.addEventListener("click", initGame);
refreshBtn.addEventListener("click", pickNewWord);
checkBtn.addEventListener("click", checkWord);
inputField.addEventListener("keypress", (e) => {
  if (e.key === "Enter") checkWord();
});