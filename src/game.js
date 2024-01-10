import { Gameboard } from "./gameboard";
import { gameObj, getName } from "./inputGrid";
import { displayWinner, updateHitMove, updateMissMove } from "./mainDOM";
import { Computer, Player } from "./player";
import { Ship } from "./ship";

const setupComp = (comp, gameboardComp) => {
  const shipLengths = [5, 4, 3, 2, 2];
  shipLengths.forEach((length) => {
    const ship = new Ship(length);
    let index = comp.generateShipsIndex(length);
    gameboardComp.placeShips(ship, index[0], index[1]);
  });
};

export class Game {
  constructor(name) {
    this.name = name;
    this.player = new Player(name);
    this.gameboardPlayer = new Gameboard(10);

    this.comp = new Computer(10);
    this.gameboardComp = new Gameboard(10);
    setupComp(this.comp, this.gameboardComp);
  }

  checkWin() {
    if (this.gameboardComp.checkAllSunk()) {
      return "player";
    } else if (this.gameboardPlayer.checkAllSunk()) {
      return "computer";
    }
    return false;
  }

  playGame(x, y) {
    let compHit = this.gameboardComp.receiveAttack(x, y);
    let compIndex = this.comp.makeMove();
    let playerHit = this.gameboardPlayer.receiveAttack(
      compIndex[0],
      compIndex[1]
    );
    return {
      compHit,
      playerHit,
      compIndex,
    };
  }
}

const checkHit = (e) => {
  let [x, y] = e.target.attributes.id.value.split("-");
  let output = gameObj.playGame(parseInt(x), parseInt(y));

  if (output.compHit) {
    updateHitMove(parseInt(x), parseInt(y), "compBoard");
  } else {
    updateMissMove(parseInt(x), parseInt(y), "compBoard");
  }

  if (output.playerHit) {
    updateHitMove(output.compIndex[0], output.compIndex[1], "playerBoard");
  } else {
    updateMissMove(output.compIndex[0], output.compIndex[1], "playerBoard");
  }

  let win = gameObj.checkWin();

  if (win) {
    win = win === "player" ? `${getName()} wins!` : "Computer Wins!";
    displayWinner(win);
  }
};

export const computerEventListener = function () {
  document.querySelectorAll("#compBoard>div").forEach((item) => {
    item.addEventListener("click", checkHit);
  });
};
