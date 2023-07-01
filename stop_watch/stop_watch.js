const playBtn = document.querySelector(".play-btn");
const resetBtn = document.querySelector(".reset-btn");
const time = document.querySelector(".time");
const pauseBtn = document.querySelector(".pause-btn");

let ticker;

// Play the ticker

playBtn.addEventListener("click", () => {
  ticker = setInterval(() => {
    playStopWatch();
  }, 1000);

  playBtn.classList.add("hidden");
  pauseBtn.classList.remove("hidden");
});

// Pause the ticker
pauseBtn.addEventListener("click", () => {
  pauseStopWatch();
});

resetBtn.addEventListener("click", () => {
  resetTicker();
});

function playStopWatch() {
  const [hour, min, sec] = time.textContent.split(" : ");
  let newSec = parseInt(sec);
  let newMin = parseInt(min);
  let newHour = parseInt(hour);

  newSec += 1;

  if (newSec % 60 == 0) {
    newSec = 0;
    newMin += 1;
  }
  if (newMin > 0 && newMin % 60 == 0) {
    newMin = 0;
    newHour += 1;
  }

  time.textContent = `${newHour.toString().padStart(2, 0)} : ${newMin
    .toString()
    .padStart(2, 0)} : ${newSec.toString().padStart(2, 0)}`;
}

function pauseStopWatch() {
  clearInterval(ticker);
  playBtn.classList.remove("hidden");
  pauseBtn.classList.add("hidden");
}

function resetTicker() {
  window.location.reload();
}
