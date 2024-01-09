import { Ship } from "../src/ship";

test("Testing Hit", () => {
  const ship1 = new Ship(4);

  ship1.hit();
  expect(ship1.currLength()).toEqual(3);
});

test("Testing Hit after zero", () => {
  const ship1 = new Ship(4);

  ship1.hit();
  ship1.hit();
  ship1.hit();
  ship1.hit();
  ship1.hit(); //extra hit

  expect(ship1.currLength()).toEqual(0);
});

test("Test positive sunk function", () => {
  const ship1 = new Ship(4);

  ship1.hit();
  ship1.hit();
  ship1.hit();
  ship1.hit();

  expect(ship1.isSunk()).toEqual(true);
});

test("Test negative sunk function", () => {
  const ship1 = new Ship(4);

  ship1.hit();
  ship1.hit();
  ship1.hit();

  expect(ship1.isSunk()).toEqual(false);
});
