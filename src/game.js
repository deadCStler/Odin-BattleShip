import { Gameboard } from "./gameboard";
import { gameObj } from "./inputGrid";
import { Computer, Player } from "./player";
import { Ship } from "./ship";

const setupComp = (comp, gameboardComp) => {
  const compShip1 = new Ship(5);
  const compShip2 = new Ship(4);
  const compShip3 = new Ship(3);
  const compShip4 = new Ship(2);
  const compShip5 = new Ship(2);

  gameboardComp.placeShips(
    compShip1,
    comp.generateIndex(5),
    comp.generateIndex(5)
  );
  gameboardComp.placeShips(
    compShip2,
    comp.generateIndex(4),
    comp.generateIndex(4)
  );
  gameboardComp.placeShips(
    compShip3,
    comp.generateIndex(3),
    comp.generateIndex(3)
  );
  gameboardComp.placeShips(
    compShip4,
    comp.generateIndex(2),
    comp.generateIndex(2)
  );
  gameboardComp.placeShips(
    compShip5,
    comp.generateIndex(2),
    comp.generateIndex(2)
  );

  //need to edit from here
  //we need to refactor this function
  // and then add the method for showing hit and miss

  const shipLengths = [5, 4, 3, 2, 2];
  shipLengths.forEach((length) => {
    const ship = new Ship(length);
    const startIndex = comp.generateIndex(length);
    const orientation = comp.generateIndex(2);
    gameboardComp.placeShips(ship, startIndex, orientation);
  });
};

export class Game {
  constructor(name) {
    this.player = new Player(name);
    this.gameboardPlayer = new Gameboard(10);

    this.comp = new Computer(10);
    this.gameboardComp = new Gameboard(10);
    setupComp(this.comp, this.gameboardComp);
  }

  playGame(x, y) {
    let out = this.gameboardComp.receiveAttack(x, y);
    let [cx, cy] = this.comp.makeMove();
    let out2 = this.gameboardPlayer.receiveAttack(cx, cy);

    if (out) {
      console.log("hit");
    } else if (out2) {
      console.log("player hit");
    }

    if (this.gameboardComp.checkAllSunk()) {
      return `${this.player.name} Wins!`;
    } else if (this.gameboardPlayer.checkAllSunk()) {
      return "Computer Wins!";
    }

    return false;
  }
}

const checkHit = (e) => {
  let [x, y] = e.target.attributes.id.value.split("-");
  // let index = [];
  let val = gameObj.playGame(parseInt(x), parseInt(y));
  // if (val) {
  console.log(gameObj);
  // }
};

export const computerEventListener = function () {
  document.querySelectorAll("#compBoard").forEach((item) => {
    item.addEventListener("click", checkHit);
  });
};
