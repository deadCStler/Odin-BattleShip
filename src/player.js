export class Player {
  constructor(name) {
    this.name = name;
  }
}

export class Computer {
  constructor(size) {
    this.size = size;
    this.visitedIndex = [];
    this.usedIndex = [];
  }

  generateIndex = () => {
    let x = Math.floor(Math.random() * this.size);
    let y = Math.floor(Math.random() * this.size);
    return [x, y];
  };

  addToUsedIndex = (indices) => {
    const [startX, startY] = indices[0];
    const [endX, endY] = indices[1];

    for (let x = Math.min(startX, endX); x <= Math.max(startX, endX); x++) {
      for (let y = Math.min(startY, endY); y <= Math.max(startY, endY); y++) {
        this.usedIndex.push([x, y]);
      }
    }
  };

  checkUsed = (start, end) => {
    const [startX, startY] = start;
    const [endX, endY] = end;

    for (let x = Math.min(startX, endX); x <= Math.max(startX, endX); x++) {
      for (let y = Math.min(startY, endY); y <= Math.max(startY, endY); y++) {
        if (this.usedIndex.some((index) => index[0] === x && index[1] === y)) {
          return false;
        }
      }
    }

    return true;
  };

  generateShipsIndex = (length) => {
    let axis = Math.floor(Math.random() * 2) === 0 ? "x" : "y";
    let [startX, startY] = this.generateIndex();
    let valid = false;
    while (!valid) {
      if (axis === "x") {
        let endX = startX + length - 1;
        if (endX < 10 && this.checkUsed([startX, startY], [endX, startY])) {
          valid = true;
          this.addToUsedIndex([
            [startX, startY],
            [endX, startY],
          ]);
          return [
            [startX, startY],
            [endX, startY],
          ];
        }
      } else {
        let endY = startY - length + 1;
        if (endY >= 0 && this.checkUsed([startX, startY], [startX, endY])) {
          valid = true;
          this.addToUsedIndex([
            [startX, startY],
            [startX, endY],
          ]);
          return [
            [startX, startY],
            [startX, endY],
          ];
        }
      }
      [startX, startY] = this.generateIndex();
    }
  };

  makeMove = () => {
    let [x, y] = this.generateIndex(1);

    for (let i = 0; i < this.visitedIndex.length; i++) {
      const [visitedX, visitedY] = this.visitedIndex[i];
      if (visitedX === x && visitedY === y) {
        [x, y] = this.generateIndex(1);
        i = -1;
      }
    }
    this.visitedIndex.push([x, y]);
    return [x, y];
  };
}
