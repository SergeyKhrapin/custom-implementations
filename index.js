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
