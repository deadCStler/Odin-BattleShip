export class Ship {
  currLen = 0;
  initialLen = 0;
  constructor(len) {
    this.initialLen = len;
    this.currLen = len;
  }
  currLength = () => this.currLen;
  hit() {
    this.currLen = this.currLen !== 0 ? this.currLen - 1 : 0;
  }
  isSunk() {
    if (this.currLen === 0 && this.initialLen !== 0) {
      return true;
    }
    return false;
  }
}
