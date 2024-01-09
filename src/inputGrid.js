import { Game } from "./game";
import { Ship } from "./ship";

let currAxis = "x";
let shipLen = [5, 4, 3, 2, 2];
let playerName = "";
let usedID = [];

export const getName = (name = null) => {
  if (name) {
    playerName = name;
  }
  return playerName;
};

const gameObj = new Game(getName());

const changeAxis = () => {
  currAxis = currAxis === "x" ? "y" : "x";
  return currAxis;
};

function addValidListener(cell) {
  document.getElementById(cell).addEventListener("click", shipPlaced);
}

const highlightShip = (e) => {
  if (shipLen.length > 0) {
    let len = shipLen[0];
    let validPlacement = false;

    if (currAxis === "x") {
      validPlacement = checkX(e.target.attributes.id.value, len);
    } else {
      validPlacement = checkY(e.target.attributes.id.value, len);
    }

    if (validPlacement) {
      highlightCells(e.target.attributes.id.value, len, currAxis);
      addValidListener(e.target.attributes.id.value, len, currAxis);
    }
  }
};

function highlightCells(startCell, len, axis) {
  let [startX, startY] = startCell.split("-");
  startX = parseInt(startX);
  startY = parseInt(startY);
  for (let i = 0; i < len; i++) {
    let cellId =
      axis === "x" ? `${startX + i}-${startY}` : `${startX}-${startY - i}`;
    document.getElementById(cellId).style.backgroundColor = "black";
  }
}

const removeHighlight = () => {
  const highlightedCells = document.querySelectorAll(
    "#playerBoard>div[style='background-color: black;']"
  );
  highlightedCells.forEach((cell) => {
    cell.style.backgroundColor = "";
  });
};

function checkX(value, len) {
  let [x, y] = value.split("-");
  if (parseInt(x) + len - 1 < 10) {
    return true;
  }
  return false;
}
function checkY(value, len) {
  let [x, y] = value.split("-");
  if (parseInt(y) - len + 1 >= 0) {
    return true;
  }
  return false;
}

const shipPlaced = (e) => {
  const ship = new Ship(shipLen[0]);
  let [x, y] = e.target.attributes.id.value.split("-");
  let end = [];
  let start = [parseInt(x), parseInt(y)];

  if (currAxis === "x") {
    end = [parseInt(x) + shipLen[0] - 1, parseInt(y)];
  } else {
    end = [parseInt(x), parseInt(y) - shipLen[0] + 1];
  }

  gameObj.gameboardPlayer.placeShips(ship, start, end);

  for (let i = 0; i < shipLen[0]; i++) {
    let cellId =
      currAxis === "x"
        ? `${start[0] + i}-${start[1]}`
        : `${start[0]}-${start[1] - i}`;
    document.getElementById(cellId).style.backgroundColor = "gray";
    document.getElementById(cellId).style.pointerEvents = "none";
    usedID.push(cellId);
  }

  shipLen = shipLen.slice(1);
};

export const eventShipsHanlders = function () {
  document.getElementById("changeAxis").addEventListener("click", changeAxis);

  const gridArr = document.querySelectorAll("#playerBoard>div");
  gridArr.forEach((gridItem) => {
    gridItem.addEventListener("mouseover", highlightShip);
    gridItem.addEventListener("mouseleave", removeHighlight);
  });
};
