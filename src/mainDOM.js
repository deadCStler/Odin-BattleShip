export const createGrid = function () {
  const grid = document.createElement("div");
  grid.classList.add("gameBoard");

  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      let div = document.createElement("div");
      div.setAttribute("id", `${i}-${j}`);
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
  playerHead.textContent = "Player's Board";

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
