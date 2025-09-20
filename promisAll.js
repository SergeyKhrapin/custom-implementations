function promiseAll(promises) {
	const result = [];
	let count = 0;

	return new Promise((resolve) => {
		promises.forEach((pr, i) => {			
			pr.then((res) => {
				result[i] = res;
				++count;
				if (count === promises.length) {
					resolve(result);
				}
			});
		});
	});
}

const pr1 = new Promise(resolve => {
  resolve(1);
});

const pr2 = new Promise(resolve => {
	setTimeout(() => {
		resolve(2);
	}, 1000);
});

const pr3 = new Promise(resolve => {
  resolve(3);
});

const promise = promiseAll([pr1, pr2, pr3]);

promise.then((data) => {
  console.log(data); // [1, 2, 3]
});
