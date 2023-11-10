const block = document.querySelector(".root");
const game = document.querySelector(".container__game");

const autoStep = 50;
const step = 10;
let currentPosition = 0;
let canMove = true;
const border = 100;

function moveCubeDown() {
  currentPosition += autoStep;
  block.style.top = `${currentPosition}px`;

  const gameContainerHeight = game.offsetHeight;
  const height = gameContainerHeight - block.offsetHeight - border;
  console.log(currentPosition);
  console.log(height);
  if (currentPosition >= height) {
    clearInterval(intervalId);
    canMove = false;
  }
}

const intervalId = setInterval(moveCubeDown, 1000);
document.addEventListener("keydown", (event) => {
  if (canMove) {
    if (event.keyCode === 37) {
      if (block.offsetLeft > 0) {
        block.style.left = block.offsetLeft - step + "px";
      }
    }

    if (event.keyCode === 39) {
      const gameWidth = game.offsetWidth;
      if (block.offsetLeft < gameWidth - block.offsetWidth - border) {
        block.style.left = block.offsetLeft + step + "px";
      }
    }
  }
});
