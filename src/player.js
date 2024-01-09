export class Player {
  constructor(name) {
    this.name = name;
  }
}

export class Computer {
  constructor(size) {
    this.size = size;
  }

  visited = [];

  generateIndex = (shipSize) => {
    let x = Math.floor(Math.random() * (this.size - shipSize + 1));
    let y = Math.floor(Math.random() * (this.size - shipSize + 1));
    return [x, y];
  };

  makeMove = () => {
    let [x, y] = this.generateIndex(1);

    for (let i = 0; i < this.visited.length; i++) {
      const [visitedX, visitedY] = this.visited[i];
      if (visitedX === x && visitedY === y) {
        [x, y] = this.generateIndex(1);
        i = -1;
      }
    }
    this.visited.push([x, y]);
    return [x, y];
  };
}
