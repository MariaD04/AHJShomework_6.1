import Lists from "./Lists";
import DnD from "./DnD";

const containers = document.querySelectorAll(".list-container");
containers.forEach((container) => {
  const list = new Lists(container);
  list.bindToDOM();
});

const board = document.querySelector(".board");
const hoverElements = document.querySelectorAll(".hover");
const cardsVerticalDistance = 8;
const dragAndDrop = new DnD(board, hoverElements, cardsVerticalDistance);

dragAndDrop.onMouseDown();
dragAndDrop.mouseLeave();
dragAndDrop.mouseMove();
dragAndDrop.onMouseUp();
