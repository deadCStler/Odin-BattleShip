export class Gameboard {
  shipsCoordinates = [];
  missCoordinates = [];
  visitedCoordinates = [];

  constructor(size) {
    this.boardSize = size;
  }

  placeShips = (ship, start, end) => {
    this.shipsCoordinates.push({
      ship: ship,
      startCoordinate: start,
      endCoordinate: end,
    });
  };

  validHit = (x, y) => {
    return x < this.boardSize && y < this.boardSize && x >= 0 && y >= 0
      ? true
      : false;
  };

  checkShipHit = (x, y) => {
    for (const shipObj of this.shipsCoordinates) {
      const [startX, startY] = shipObj.startCoordinate;
      const [endX, endY] = shipObj.endCoordinate;
      if (
        x >= startX &&
        x <= endX &&
        y >= Math.min(startY, endY) &&
        y <= Math.max(startY, endY)
      ) {
        return shipObj.ship;
      }
    }
    return false;
  };

  checkVisited = (x, y) => {
    for (const coordinate of this.visitedCoordinates) {
      if (coordinate[0] === x && coordinate[1] === y) {
        return true;
      }
    }
    return false;
  };

  receiveAttack = (x, y) => {
    if (this.checkVisited(x, y)) {
      return false;
    }
    if (this.validHit(x, y)) {
      this.visitedCoordinates.push([x, y]);
      let ship = this.checkShipHit(x, y);
      if (ship) {
        ship.hit();
        return true;
      }
      this.missCoordinates.push([x, y]);
    }
    return false;
  };

  checkAllSunk = () => {
    return this.shipsCoordinates.every((shipObj) => shipObj.ship.isSunk());
  };
}
