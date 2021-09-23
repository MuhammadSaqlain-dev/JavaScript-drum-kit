const crashRide = document.getElementById("crash-ride");
const hihatTop = document.getElementById("hihat-top");

const addAnimationCrashRide = () => {
  crashRide.style.transform = `rotate(0deg) scale(1.5)`;
};

const addAnimationHiHatTop = () => {
  hihatTop.style.top = `170px`;
};

function playSound(e) {
  var audio = document.querySelector(`audio[data-value="${e.key}"]`);
  var key = document.querySelector(`div.key[data-value="${e.key}"`);
  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
  key.classList.add("play");

  switch (e.key) {
    case "r":
    case "e":
      addAnimationCrashRide();
      break;
    case "k":
      addAnimationHiHatTop();
  }
}

function removeTransition(e) {
  if (e.propertyName !== "transform") return;
  this.classList.remove("play");
}

const removeAnimationCrashRide = (e) => {
  if (e.propertyName !== "transform") return;
  crashRide.style.transform = `rotate(-7.2deg) scale(1.5)`;
};

const removeAnimationHiHatTop = () => {
  hihatTop.style.top = `165px`;
};

const keys = document.querySelectorAll("div.key");
keys.forEach((key) => key.addEventListener("transitionend", removeTransition));

crashRide.addEventListener("transitionend", removeAnimationCrashRide);
hihatTop.addEventListener("transitionend", removeAnimationHiHatTop);

window.addEventListener("keydown", playSound);
