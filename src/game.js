import { Gameboard } from "./gameboard";
import { Computer, Player } from "./player";
import { Ship } from "./ship";

const setupComp = (comp, gameboardComp) => {
  const compShip1 = new Ship(4);
  const compShip2 = new Ship(3);
  const compShip3 = new Ship(2);

  gameboardComp.placeShips(
    compShip1,
    comp.generateIndex(4),
    comp.generateIndex(4)
  );
  gameboardComp.placeShips(
    compShip2,
    comp.generateIndex(3),
    comp.generateIndex(3)
  );
  gameboardComp.placeShips(
    compShip3,
    comp.generateIndex(2),
    comp.generateIndex(2)
  );
};

export const Game = function (name) {
  const player = new Player(name);
  const gameboardPlayer = new Gameboard(10);

  const comp = new Computer(10);
  const gameboardComp = new Gameboard(10);
  setupComp(comp, gameboardComp);

  const playGame = (hitIndex) => {
    gameboardComp.receiveAttack(hitIndex);
    gameboardPlayer.receiveAttack(comp.makeMove());
    if (gameboardComp.checkAllSunk()) {
      return `${player.name} Wins!`;
    } else if (gameboardPlayer.checkAllSunk()) {
      return "Computer Wins!";
    }
    return false;
  };
  return {
    gameboardPlayer,
    playGame,
  };
};