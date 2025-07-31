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
  { word: "library", hint: "Place containing collection of books" },
  { word: "river", hint: "A large flowing body of water" },
  { word: "dream", hint: "A series of thoughts during sleep" },
  { word: "cloud", hint: "A visible mass of water droplets" },
  { word: "music", hint: "Art of sound in time" },
  { word: "bridge", hint: "Structure over a river or road" },
  { word: "forest", hint: "Large area covered with trees" },
  { word: "school", hint: "Place for education and learning" },
  { word: "window", hint: "Opening in a wall for light" },
  { word: "travel", hint: "To journey from one place to another" },
  { word: "market", hint: "Place where goods are bought and sold" },
  { word: "puzzle", hint: "Game requiring problem-solving" },
  { word: "chair", hint: "A seat for one person" },
  { word: "dance", hint: "Moving rhythmically to music" },
  { word: "planet", hint: "A celestial body orbiting a star" },
  { word: "smile", hint: "A facial expression of happiness" },
  { word: "street", hint: "Public thoroughfare in a city" },
  { word: "mirror", hint: "Surface that reflects images" },
  { word: "candle", hint: "Wax stick with a wick for light" },
  { word: "clock", hint: "Device for measuring time" },
  { word: "flower", hint: "Blooming part of a plant" },
  { word: "table", hint: "Furniture with a flat top" },
  { word: "laugh", hint: "Sound of amusement or joy" },
  { word: "ocean", hint: "Vast body of saltwater" },
  { word: "breeze", hint: "A gentle wind" },
  { word: "shadow", hint: "Dark area caused by blocked light" },
  { word: "valley", hint: "Low area between hills" },
  { word: "secret", hint: "Something kept hidden" }
];

const wordText = document.querySelector(".word");
const hintText = document.querySelector(".hint span");
const timeText = document.querySelector(".time b");
const scoreText = document.querySelector(".score b");
const inputField = document.querySelector(".inputs input");
const refreshBtn = document.querySelector(".refresh");
const checkBtn = document.querySelector(".check");
const hintBtn = document.querySelector(".hint-btn");
const startBtn = document.querySelector(".start");
const statusText = document.querySelector(".status");
const progressBar = document.querySelector(".progress");
const canvas = document.getElementById("particle-canvas");
const ctx = canvas.getContext("2d");
const modeSelect = document.querySelector(".mode");
const modeDisplay = document.querySelector(".mode-display");

let currentWord, correctWord, scrambledWord, score = 0, time, timer, mode = "normal", hintUsed = false;

function getTimeLimit() {
  return mode === "normal" ? 60 : 30;
}

function getPointsPerWord() {
  return mode === "normal" ? 10 : 15;
}

function initGame() {
  startBtn.style.display = "none";
  document.querySelector(".inputs").style.display = "flex";
  document.querySelector(".mode-selection").style.display = "none";
  modeDisplay.textContent = `Mode: ${mode.charAt(0).toUpperCase() + mode.slice(1)}`;
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
  hintBtn.disabled = false;
  hintUsed = false;
  particles = [];
  canvas.classList.remove("active");
}

function scrambleWord(word) {
  return word.split("").sort(() => Math.random() - 0.5).join("");
}

function startTimer() {
  clearInterval(timer);
  time = getTimeLimit();
  timeText.textContent = time;
  progressBar.style.width = "100%";
  timer = setInterval(() => {
    time--;
    timeText.textContent = time;
    progressBar.style.width = `${(time / getTimeLimit()) * 100}%`;
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
      document.querySelector(".mode-selection").style.display = "block";
      startBtn.style.display = "block";
      startBtn.textContent = "Play Again";
      particles = [];
      canvas.classList.remove("active");
    }
  }, 1000);
}

function getHint() {
  if (hintUsed || score < 5) {
    statusText.textContent = score < 5 ? "Not enough points for a hint!" : "Hint already used for this word!";
    statusText.classList.add("incorrect");
    return;
  }
  score = Math.max(0, score - 5);
  scoreText.textContent = score;
  hintUsed = true;
  hintBtn.disabled = true;
  const correctLetter = correctWord[0].toUpperCase();
  const currentDisplay = wordText.textContent.split("");
  const correctIndex = currentWord.word.toUpperCase().split("").indexOf(correctLetter);
  currentDisplay[scrambledWord.toUpperCase().split("").indexOf(correctLetter)] = correctLetter;
  wordText.textContent = currentDisplay.join("");
  statusText.textContent = `Hint: First letter is '${correctLetter}'`;
  statusText.classList.add("correct");
}

function createParticles() {
  particles = [];
  const particleCount = 50;
  for (let i = 0; i < particleCount; i++) {
    particles.push({
      x: canvas.width / 2,
      y: canvas.height / 2,
      radius: Math.random() * 3 + 1,
      color: `hsl(${Math.random() * 60 + 90}, 70%, 50%)`,
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
    score += getPointsPerWord();
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

modeSelect.addEventListener("change", () => {
  mode = modeSelect.value;
  modeDisplay.textContent = `Mode: ${mode.charAt(0).toUpperCase() + mode.slice(1)}`;
});

startBtn.addEventListener("click", initGame);
refreshBtn.addEventListener("click", pickNewWord);
checkBtn.addEventListener("click", checkWord);
hintBtn.addEventListener("click", getHint);
inputField.addEventListener("keypress", (e) => {
  if (e.key === "Enter") checkWord();
});

window.addEventListener("resize", initCanvas);