const soundPaths = {
  w: "./sounds/tom-1.mp3",
  a: "./sounds/tom-2.mp3",
  s: "./sounds/tom-3.mp3",
  d: "./sounds/tom-4.mp3",
  j: "./sounds/snare.mp3",
  k: "./sounds/crash.mp3",
  l: "./sounds/kick-bass.mp3",
};

const handleClick = (element) => {
  const buttonInnerHTML = element.innerHTML;
  const sound = new Audio(soundPaths[buttonInnerHTML]);
  element.classList.add("pressed");
  sound.play();
};

const handleKeyDown = (event) => {
  if (!Object.keys(soundPaths).includes(event.key)) {
    return;
  } else {
    const selector = `button.drum.${event.key}`;
    const element = document.querySelector(selector);
    handleClick(element);
  }
};

const handleKeyUp = (event) => {
  if (!Object.keys(soundPaths).includes(event.key)) {
    return;
  } else {
    const selector = `button.drum.${event.key}`;
    const element = document.querySelector(selector);
    element.classList.remove("pressed");
  }
};

let buttons = document.getElementsByClassName("drum");
buttons = Array.from(buttons);
buttons.map((element) => {
  element.addEventListener("mousedown", () => handleClick(element));
  element.addEventListener("mouseup", () => (element.classList.remove("pressed")));
});

document.addEventListener("keydown", (event) => handleKeyDown(event));
document.addEventListener("keyup", (event) => handleKeyUp(event));
