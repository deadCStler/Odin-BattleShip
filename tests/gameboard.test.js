import { Gameboard } from "../src/gameboard";
import { Ship } from "../src/ship";

const gameboard = new Gameboard(5);
const ship1 = new Ship(3);

test("Adding Ships", () => {
  gameboard.placeShips(ship1, [1, 3], [3, 3]);
  expect(gameboard.shipsCoordinates[0]).toMatchObject({
    ship: ship1,
    startCoordinate: [1, 3],
    endCoordinate: [3, 3],
  });
});

test("Checking hit", () => {
  expect(gameboard.receiveAttack(2, 3)).toEqual(true);
  expect(ship1.currLength()).toEqual(2);
});

test("Miss hit", () => {
  expect(gameboard.receiveAttack(2, 4)).toEqual(false);
});

test("Out range hit", () => {
  expect(gameboard.receiveAttack(2, 5)).toEqual(false);
});

test("Revisiting same hit", () => {
  expect(gameboard.receiveAttack(2, 3)).toEqual(false);
});

test("Sunk test", () => {
  gameboard.receiveAttack(1, 3);
  gameboard.receiveAttack(3, 3);
  expect(ship1.isSunk()).toEqual(true);
  expect(gameboard.checkAllSunk()).toEqual(true);
});
