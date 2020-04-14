class Dequeue {
  constructor() {
    this.items = {};
    this.backcount = 0;
    this.frontCount = 0;
  }

  addFront(element) {
    if (this.isEmpty()) {
      this.addBack(element);
    } else if (this.frontCount > 0) {
      this.frontCount--;
      this.items[this.frontCount] = element;
    } else {
      for (let i = this.backcount; i > 0; i--) {
        this.items[i] = this.items[i - 1];
      }
      this.backcount++;
      this.items[0] = element;
    }
  }
  addBack(element) {
    this.items[this.backcount] = element;
    this.backcount++;
  }
  removeFront() {
    if (this.isEmpty()) {
      return undefined;
    }

    let result = this.items[this.frontCount];
    delete this.items[this.frontCount];
    this.frontCount++;
    return result;
  }
  removeBack() {
    if (this.isEmpty()) {
      return undefined;
    }
    let result = this.items[this.backcount - 1];
    delete this.items[this.backcount - 1];
    this.backcount--;
    return result;
  }

  peekFront() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items[this.frontCount];
  }

  peekBack() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items[this.backcount - 1];
  }

  isEmpty() {
    return this.count - this.lowestCount == 0;
  }

  size() {
    return this.count - this.lowestCount;
  }

  clear() {
    this.items = {};
    this.count = 0;
    this.lowestCount = 0;
  }

  toString() {
    if (this.isEmpty()) {
      return "";
    }
    let string = `${this.items[this.lowestCount]}`;
    for (let index = this.lowestCount + 1; index < this.count; index++) {
      string = `${string},${this.items[index]}`;
    }
    return string;
  }
}
