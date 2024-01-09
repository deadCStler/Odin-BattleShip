import { getName } from "./inputGrid";

const createGrid = function () {
  const grid = document.createElement("div");
  grid.classList.add("gameBoard");

  for (let y = 9; y >= 0; y--) {
    for (let x = 0; x < 10; x++) {
      let div = document.createElement("div");
      div.setAttribute("id", `${x}-${y}`);
      grid.appendChild(div);
    }
  }
  return grid;
};

export const mainDOM = function (playerGrid) {
  let gameBody = document.createElement("div");
  gameBody.classList.add("gameBody");

  let div1 = document.createElement("div");
  let div2 = document.createElement("div");

  let gameboardPlayer = playerGrid;
  gameboardPlayer.setAttribute("id", "playerBoard");

  let gameboardComp = createGrid();
  gameboardComp.setAttribute("id", "compBoard");

  let playerHead = document.createElement("h2");
  playerHead.textContent = `${getName()}'s Board`;

  let compHead = document.createElement("h2");
  compHead.textContent = "Computer's Board";

  div1.appendChild(playerHead);
  div1.appendChild(gameboardPlayer);
  div2.appendChild(compHead);
  div2.appendChild(gameboardComp);

  gameBody.appendChild(div1);
  gameBody.appendChild(div2);

  return gameBody;
};

export const showInputDialog = function () {
  let dialog = document.createElement("dialog");
  dialog.classList.add("details");

  let form = document.createElement("form");
  form.setAttribute("id", "gridForm");

  let div = document.createElement("div");
  div.textContent = "Drag the ships on the board below.";
  div.classList.add("detailsHeading");

  let axis = document.createElement("button");
  axis.textContent = "Change Axis";
  axis.setAttribute("type", "button");
  axis.setAttribute("id", "changeAxis");

  let grid = createGrid();
  grid.setAttribute("id", "playerBoard");

  let submitButton = document.createElement("button");
  submitButton.innerHTML = "Submit";
  submitButton.setAttribute("type", "submit");

  form.appendChild(div);
  form.appendChild(axis);
  form.appendChild(grid);
  form.appendChild(submitButton);

  dialog.appendChild(form);

  return dialog;
};
