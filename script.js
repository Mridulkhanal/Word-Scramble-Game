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
const progressBar = document.querySelector(".progress");
const canvas = document.getElementById("particle-canvas");
const ctx = canvas.getContext("2d");

let currentWord, correctWord, scrambledWord, score = 0, time = 60, timer;
let particles = [];

function initGame() {
  startBtn.style.display = "none";
  document.querySelector(".inputs").style.display = "flex";
  score = 0;
  scoreText.textContent = score;
  initCanvas();
  pickNewWord();
  startTimer();
}

function initCanvas() {
  canvas.width = canvas.offsetWidth;
  canvas.height = canvas.offsetHeight;
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
  statusText.classList.remove("correct", "incorrect");
  inputField.value = "";
  inputField.setAttribute("maxlength", correctWord.length);
  particles = []; // Clear particles
  canvas.classList.remove("active");
}

function scrambleWord(word) {
  return word.split("").sort(() => Math.random() - 0.5).join("");
}

function startTimer() {
  clearInterval(timer);
  time = 60;
  timeText.textContent = time;
  progressBar.style.width = "100%";
  timer = setInterval(() => {
    time--;
    timeText.textContent = time;
    progressBar.style.width = `${(time / 60) * 100}%`;
    if (time <= 10) {
      timeText.parentElement.classList.add("low-time");
      progressBar.classList.add("low-time");
    } else {
      timeText.parentElement.classList.remove("low-time");
      progressBar.classList.remove("low-time");
    }
    if (time <= 0) {
      clearInterval(timer);
      statusText.textContent = `Game Over! Your score: ${score}`;
      document.querySelector(".inputs").style.display = "none";
      startBtn.style.display = "block";
      startBtn.textContent = "Play Again";
      particles = [];
      canvas.classList.remove("active");
    }
  }, 1000);
}

function createParticles() {
  particles = [];
  const particleCount = 50;
  for (let i = 0; i < particleCount; i++) {
    particles.push({
      x: canvas.width / 2,
      y: canvas.height / 2,
      radius: Math.random() * 3 + 1,
      color: `hsl(${Math.random() * 60 + 90}, 70%, 50%)`, // Yellow-green hues
      speed: Math.random() * 5 + 2,
      angle: Math.random() * Math.PI * 2,
      life: 100
    });
  }
  canvas.classList.add("active");
}

function updateParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles = particles.filter(p => p.life > 0);
  particles.forEach(p => {
    p.x += Math.cos(p.angle) * p.speed;
    p.y += Math.sin(p.angle) * p.speed;
    p.life -= 2;
    p.radius *= 0.98;
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
    ctx.fillStyle = p.color;
    ctx.fill();
  });
  if (particles.length > 0) {
    requestAnimationFrame(updateParticles);
  } else {
    canvas.classList.remove("active");
  }
}

function checkWord() {
  const userWord = inputField.value.toLowerCase();
  statusText.classList.remove("correct", "incorrect");
  if (!userWord) {
    statusText.textContent = "Please enter a word!";
    return;
  }
  if (userWord === correctWord) {
    score += 10;
    scoreText.textContent = score;
    statusText.textContent = `Congrats! ${correctWord.toUpperCase()} is correct!`;
    statusText.classList.add("correct");
    createParticles();
    requestAnimationFrame(updateParticles);
    setTimeout(pickNewWord, 1000);
  } else {
    statusText.textContent = `Oops! ${userWord} is not correct. Try again!`;
    statusText.classList.add("incorrect");
    inputField.value = "";
  }
}

startBtn.addEventListener("click", initGame);
refreshBtn.addEventListener("click", pickNewWord);
checkBtn.addEventListener("click", checkWord);
inputField.addEventListener("keypress", (e) => {
  if (e.key === "Enter") checkWord();
});

window.addEventListener("resize", initCanvas);