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

export const createDialog = function () {
  let dialog = document.createElement("dialog");
  dialog.classList.add("details");

  let form = document.createElement("form");
  form.setAttribute("id", "detailsForm");

  let div = document.createElement("div");

  let titleLabel = document.createElement("label");
  titleLabel.setAttribute("for", "playerName");
  titleLabel.innerHTML = "Enter Player's Name";

  let titleInput = document.createElement("input");
  titleInput.setAttribute("id", "playerName");
  titleInput.setAttribute("name", "playerName");
  titleInput.setAttribute("type", "text");
  titleInput.setAttribute("required", "true");

  div.appendChild(titleLabel);
  div.appendChild(titleInput);

  let submitButton = document.createElement("button");
  submitButton.innerHTML = "Submit";

  form.appendChild(div);
  form.appendChild(submitButton);

  dialog.appendChild(form);

  return dialog;
};

export const mainDOM = function (playerGrid) {
  let container = document.createElement("div");

  let rules = document.createElement("div");
  rules.classList.add("rules");

  let rule1 = document.createElement("div");
  rule1.classList.add('rule1');
  rule1.innerHTML = "<div></div><h2>:indicates that the ship was hit</h2>";

  let rule2 = document.createElement("div");
  rule2.classList.add('rule2');
  rule2.innerHTML = "<div></div><h2>:indicates that the ship wasn't hit.</h2>";

  rules.appendChild(rule1);
  rules.appendChild(rule2);

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

  container.appendChild(gameBody);
  container.appendChild(rules);

  return container;
};

export const showInputDialog = function () {
  let dialog = document.createElement("dialog");
  dialog.classList.add("details");

  let form = document.createElement("form");
  form.setAttribute("id", "gridForm");

  let div = document.createElement("div");
  div.textContent = "Place the ships on the board below.";
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

export const updateHitMove = function (x, y, id) {
  let idEle = document.getElementById(id);
  let id2 = `${x}-${y}`;
  let hitEle = idEle.querySelector(`#${CSS.escape(id2)}`);
  hitEle.style.backgroundColor = "red";
  hitEle.style.pointerEvents = "none";
};

export const updateMissMove = function (x, y, id) {
  let idEle = document.getElementById(id);
  let id2 = `${x}-${y}`;
  let missEle = idEle.querySelector(`#${CSS.escape(id2)}`);
  missEle.style.backgroundColor = "green";
  missEle.style.pointerEvents = "none";
};

export const displayWinner = function (win) {
  const content = document.querySelector("#content");
  let dialog = document.createElement("dialog");
  dialog.classList.add("details");

  let div = document.createElement("div");
  div.textContent = "The winner is:";

  let winner = document.createElement("h1");
  winner.textContent = win;

  let restartButton = document.createElement("button");
  restartButton.textContent = "Restart";
  restartButton.setAttribute("onClick", "window.location.reload();");

  dialog.appendChild(div);
  dialog.appendChild(winner);
  dialog.appendChild(restartButton);

  content.appendChild(dialog);
  dialog.showModal();
};
