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

export const Game = function () {
  const player = new Player("Test Player");
  const gameboardPlayer = new Gameboard(5);

  const comp = new Computer(5);
  const gameboardComp = new Gameboard(5);
  setupComp(comp, gameboardComp);

  const playerShip1 = new Ship(4);
  const playerShip2 = new Ship(3);
  const playerShip3 = new Ship(2);

  gameboardPlayer.placeShips(playerShip1, [1, 0], [4, 0]);
  gameboardPlayer.placeShips(playerShip2, [1, 3], [3, 3]);
  gameboardPlayer.placeShips(playerShip3, [0, 1], [0, 2]);

  playGame = (hitIndex) => {
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
    playGame,
  };
};
