// 1. Make an object iterable
const obj = {
    start: 1,
    end: 5,
};

obj[Symbol.iterator] = function() {
    return {
        from: this.start,
        to: this.end,
        next() {
            return {
                value: this.from++,
                done: this.from > this.to + 1 ? true : false,
            };
        }
    };
}

for (let val of obj) {
    console.log(val); // 1, 2, 3, 4, 5
}

// 2. Make for..of working like for..in :)
const obj2 = {
    a: 1,
    b: 2,
    c: 3,
};

obj2[Symbol.iterator] = function() {
    return {
        keys: Object.keys(this),
        i: 0,
        next() {
            return {
                value: this.keys[this.i++],
                done: this.i > this.keys.length ? true : false,
            };
        }
    };
}

for (let key of obj2) {
    console.log(key); // 'a', 'b', 'c' (the same like for..in)
}

// 3. Implement default for..of behaviour
const obj3 = {
    a: 100,
    b: 200,
    c: 300,
  };

  obj3[Symbol.iterator] = function() {
    const keys = Object.keys(this);
    const _this = this;
    return {
      index: 0,
      next() {
        return {
         value: _this[keys[this.index++]],
         done: this.index === keys.length + 1,
        }
      }
    };
  }

  for (let val of obj3) {
     console.log('val', val); // 100, 200, 300
  }
