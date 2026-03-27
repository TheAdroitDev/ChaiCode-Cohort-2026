export class TempleQueue {
  #devotees;
  #maxCapacity;
  #vipEnabled;

  constructor(templeName, maxCapacity) {
    this.templeName = templeName;
    this.#devotees = [];
    this.#maxCapacity = maxCapacity > 0 ? maxCapacity : 100;
    this.#vipEnabled = false;
  }

  get length() {
    return this.#devotees.length;
  }

  get isEmpty() {
    return this.#devotees.length === 0;
  }

  get vipEnabled() {
    return this.#vipEnabled;
  }

  set vipEnabled(value) {
    if (typeof value !== "boolean") {
      throw new TypeError("VIP status must be a boolean");
    }
    this.#vipEnabled = value;
  }

  enqueue(name, type) {
    if (!name) return null;
    if (type !== "regular" && type !== "vip") return null;
    if (this.#devotees.length >= this.#maxCapacity) return null;

    const devotee = {
      name,
      type,
      joinedAt: new Date().toISOString()
    };

    if (type === "vip" && this.#vipEnabled) {
      this.#devotees.unshift(devotee);
    } else {
      this.#devotees.push(devotee);
    }

    return devotee;
  }

  dequeue() {
    if (this.#devotees.length === 0) return null;
    return this.#devotees.shift();
  }

  peek() {
    if (this.#devotees.length === 0) return null;
    return this.#devotees[0];
  }

  contains(name) {
    for (let i = 0; i < this.#devotees.length; i++) {
      if (this.#devotees[i].name === name) return true;
    }
    return false;
  }

  toArray() {
    const copy = [];
    for (let i = 0; i < this.#devotees.length; i++) {
      copy.push({ ...this.#devotees[i] });
    }
    return copy;
  }

  static merge(queue1, queue2) {
    const arr1 = queue1.toArray();
    const arr2 = queue2.toArray();

    const newQueue = new TempleQueue(
      `${queue1.templeName}-${queue2.templeName}`,
      arr1.length + arr2.length + 10
    );

    for (let i = 0; i < arr1.length; i++) {
      newQueue.#devotees.push({ ...arr1[i] });
    }

    for (let i = 0; i < arr2.length; i++) {
      newQueue.#devotees.push({ ...arr2[i] });
    }

    return newQueue;
  }

  static fromArray(templeName, maxCapacity, arr) {
    const queue = new TempleQueue(templeName, maxCapacity);

    if (!Array.isArray(arr)) return queue;

    for (let i = 0; i < arr.length; i++) {
      queue.enqueue(arr[i], "regular");
    }

    return queue;
  }

  [Symbol.iterator]() {
    let index = 0;
    const data = this.#devotees;

    return {
      next() {
        if (index < data.length) {
          return { value: data[index++], done: false };
        }
        return { done: true };
      }
    };
  }
}