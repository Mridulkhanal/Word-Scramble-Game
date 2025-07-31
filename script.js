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
  { word: "secret", hint: "Something kept hidden" },
  { word: "animal", hint: "A living creature that moves" },
  { word: "bottle", hint: "Container for holding liquids" },
  { word: "camera", hint: "Device for capturing images" },
  { word: "desert", hint: "Arid land with little water" },
  { word: "engine", hint: "Machine that powers vehicles" },
  { word: "family", hint: "Group of related individuals" },
  { word: "guitar", hint: "Stringed musical instrument" },
  { word: "hammer", hint: "Tool for driving nails" },
  { word: "island", hint: "Land surrounded by water" },
  { word: "jacket", hint: "Outer garment for warmth" },
  { word: "kitchen", hint: "Room for preparing food" },
  { word: "ladder", hint: "Tool for climbing heights" },
  { word: "magnet", hint: "Object that attracts metal" },
  { word: "nature", hint: "The world of plants and animals" },
  { word: "orange", hint: "Citrus fruit or a color" },
  { word: "pencil", hint: "Tool for writing or drawing" },
  { word: "rocket", hint: "Vehicle for space travel" },
  { word: "silver", hint: "Shiny metal or a color" },
  { word: "ticket", hint: "Pass for entry or travel" },
  { word: "umbrella", hint: "Device for rain protection" },
  { word: "village", hint: "Small community in rural area" },
  { word: "wallet", hint: "Holder for money and cards" },
  { word: "yogurt", hint: "Creamy dairy food" },
  { word: "anchor", hint: "Device to secure a ship" },
  { word: "button", hint: "Small fastener for clothes" },
  { word: "castle", hint: "Fortified building from history" },
  { word: "dragon", hint: "Mythical fire-breathing creature" },
  { word: "eagle", hint: "Large bird of prey" },
  { word: "fossil", hint: "Preserved remains of ancient life" },
  { word: "glacier", hint: "Large mass of moving ice" },
  { word: "hobby", hint: "Activity done for enjoyment" },
  { word: "insect", hint: "Small creature with six legs" },
  { word: "jungle", hint: "Dense tropical forest" },
  { word: "kettle", hint: "Container for boiling water" },
  { word: "lantern", hint: "Portable light source" },
  { word: "moment", hint: "A brief period of time" },
  { word: "nest", hint: "Bird's home for eggs" },
  { word: "onion", hint: "Vegetable that makes you cry" },
  { word: "piano", hint: "Keyboard musical instrument" },
  { word: "quilt", hint: "Warm bed covering" },
  { word: "radio", hint: "Device for receiving broadcasts" },
  { word: "saddle", hint: "Seat for riding a horse" },
  { word: "tiger", hint: "Large striped feline" },
  { word: "vase", hint: "Container for holding flowers" },
  { word: "wheel", hint: "Circular object for movement" },
  { word: "xray", hint: "Image to see inside the body" },
  { word: "yacht", hint: "Luxury boat for sailing" },
  { word: "zebra", hint: "Animal with black and white stripes" },
  { word: "arrow", hint: "Pointed projectile for a bow" },
  { word: "bench", hint: "Long seat for multiple people" }
];

const wordText = document.querySelector(".word");
const hintText = document.querySelector(".hint span");
const timeText = document.querySelector(".time b");
const scoreText = document.querySelector(".score b");
const highScoreText = document.querySelector(".high-score b");
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
const leaderboardMode = document.querySelector(".leaderboard-mode");
const leaderboardScores = document.querySelector(".leaderboard-scores");
const playerNameInput = document.querySelector(".player-name");

let currentWord, correctWord, scrambledWord, score = 0, time, timer, mode = "normal", hintCount = 0;
let highScoreNormal = parseInt(localStorage.getItem("highScoreNormal")) || 0;
let highScoreChallenge = parseInt(localStorage.getItem("highScoreChallenge")) || 0;
let leaderboardNormal = JSON.parse(localStorage.getItem("leaderboardNormal")) || [];
let leaderboardChallenge = JSON.parse(localStorage.getItem("leaderboardChallenge")) || [];
let playerName = localStorage.getItem("playerName") || "";
let wordStartTime;

function getTimeLimit() {
  return mode === "normal" ? 60 : 30;
}

function getPointsPerWord() {
  return mode === "normal" ? 10 : 15;
}

function updateLeaderboard() {
  const leaderboard = mode === "normal" ? leaderboardNormal : leaderboardChallenge;
  if (score > 0) {
    const date = new Date().toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit', year: 'numeric' });
    const name = playerName.trim() || "Player";
    leaderboard.push({ score, date, name });
    leaderboard.sort((a, b) => b.score - a.score);
    leaderboard.splice(3); // Keep top 3
    if (mode === "normal") {
      leaderboardNormal = leaderboard;
      localStorage.setItem("leaderboardNormal", JSON.stringify(leaderboardNormal));
    } else {
      leaderboardChallenge = leaderboard;
      localStorage.setItem("leaderboardChallenge", JSON.stringify(leaderboardChallenge));
    }
  }
  renderLeaderboard();
}

function renderLeaderboard() {
  const leaderboard = leaderboardMode.value === "normal" ? leaderboardNormal : leaderboardChallenge;
  leaderboardScores.innerHTML = "";
  leaderboard.forEach((entry, index) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${index + 1}</td>
      <td>${entry.name}</td>
      <td>${entry.score}</td>
      <td>${entry.date}</td>
    `;
    leaderboardScores.appendChild(row);
  });
}

function updateHighScore() {
  const highScore = mode === "normal" ? highScoreNormal : highScoreChallenge;
  if (score > highScore) {
    if (mode === "normal") {
      highScoreNormal = score;
      localStorage.setItem("highScoreNormal", highScoreNormal);
    } else {
      highScoreChallenge = score;
      localStorage.setItem("highScoreChallenge", highScoreChallenge);
    }
    highScoreText.textContent = score;
    highScoreText.parentElement.classList.add("new-high");
    statusText.textContent = `New High Score! ${score} points!`;
    statusText.classList.add("correct");
    setTimeout(() => {
      highScoreText.parentElement.classList.remove("new-high");
    }, 1000);
  }
  updateLeaderboard();
}

function initGame() {
  playerName = playerNameInput.value.trim() || "Player";
  localStorage.setItem("playerName", playerName);
  startBtn.style.display = "none";
  document.querySelector(".inputs").style.display = "flex";
  document.querySelector(".mode-selection").style.display = "none";
  modeDisplay.textContent = `Mode: ${mode.charAt(0).toUpperCase() + mode.slice(1)}`;
  score = 0;
  scoreText.textContent = score;
  highScoreText.textContent = mode === "normal" ? highScoreNormal : highScoreChallenge;
  highScoreText.parentElement.classList.remove("new-high");
  initCanvas();
  renderLeaderboard();
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
  wordText.innerHTML = scrambledWord.toUpperCase().split("").map(letter => `<span>${letter}</span>`).join("");
  const spans = wordText.querySelectorAll("span");
  spans.forEach((span, index) => {
    setTimeout(() => {
      span.classList.add("reveal");
    }, index * 100);
  });
  hintText.textContent = currentWord.hint;
  timeText.textContent = time;
  statusText.textContent = "";
  statusText.classList.remove("correct", "incorrect", "bonus");
  inputField.value = "";
  inputField.setAttribute("maxlength", correctWord.length);
  hintBtn.disabled = false;
  hintBtn.textContent = "Get Hint (-5 points)";
  hintCount = 0;
  wordStartTime = Date.now();
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
      updateHighScore();
      statusText.textContent = `Game Over! Your score: ${score}`;
      document.querySelector(".inputs").style.display = "none";
      document.querySelector(".mode-selection").style.display = "block";
      startBtn.style.display = "block";
      startBtn.textContent = "Play Again";
      playerNameInput.value = playerName;
      particles = [];
      canvas.classList.remove("active");
    }
  }, 1000);
}

function getHint() {
  const hintCost = hintCount === 0 ? 5 : 10;
  if (hintCount >= 2 || score < hintCost) {
    statusText.textContent = score < hintCost ? `Not enough points for a hint (${hintCost} needed)!` : "No more hints available!";
    statusText.classList.add("incorrect");
    return;
  }
  score = Math.max(0, score - hintCost);
  scoreText.textContent = score;
  updateHighScore();
  hintCount++;
  hintBtn.textContent = hintCount === 1 ? "Get Hint (-10 points)" : "Get Hint (-10 points)";
  if (hintCount >= 2) hintBtn.disabled = true;
  const hintIndex = hintCount - 1;
  const correctLetter = correctWord[hintIndex].toUpperCase();
  const currentDisplay = wordText.querySelectorAll("span");
  const correctLetterIndex = currentWord.word.toUpperCase().split("").indexOf(correctLetter, hintIndex);
  const scrambledLetterIndex = scrambledWord.toUpperCase().split("").indexOf(correctLetter, hintIndex === 0 ? 0 : Array.from(currentDisplay).findIndex(span => span.textContent === correctWord[0].toUpperCase()));
  currentDisplay[scrambledLetterIndex].textContent = correctLetter;
  currentDisplay[scrambledLetterIndex].classList.add("reveal");
  statusText.textContent = `Hint: Letter ${hintCount} is '${correctLetter}'`;
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
  statusText.classList.remove("correct", "incorrect", "bonus");
  if (!userWord) {
    statusText.textContent = "Please enter a word!";
    return;
  }
  if (userWord === correctWord) {
    let points = getPointsPerWord();
    const timeTaken = (Date.now() - wordStartTime) / 1000;
    let bonus = 0;
    if (timeTaken <= 5) {
      bonus = 5;
      points += bonus;
      statusText.textContent = `Congrats! ${correctWord.toUpperCase()} is correct! +${bonus} time bonus!`;
      statusText.classList.add("bonus");
    } else {
      statusText.textContent = `Congrats! ${correctWord.toUpperCase()} is correct!`;
      statusText.classList.add("correct");
    }
    score += points;
    scoreText.textContent = score;
    updateHighScore();
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
  highScoreText.textContent = mode === "normal" ? highScoreNormal : highScoreChallenge;
  renderLeaderboard();
});

leaderboardMode.addEventListener("change", renderLeaderboard);

startBtn.addEventListener("click", initGame);
refreshBtn.addEventListener("click", pickNewWord);
checkBtn.addEventListener("click", checkWord);
hintBtn.addEventListener("click", getHint);
inputField.addEventListener("keypress", (e) => {
  if (e.key === "Enter") checkWord();
});

window.addEventListener("resize", initCanvas);
playerNameInput.value = playerName;
renderLeaderboard();