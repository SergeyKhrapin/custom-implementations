range(1, 200)
		.pipe(
			filter(x => x % 2 === 1),
			map(x => x + x)
		)
		.subscribe(x => console.log(x));

	function filter(callback) {
		return (arr) => arr.filter(callback);
	}

	function map(callback) {
		return (arr) => arr.map(callback);
	}

	function range(a: number, b: number) {		
		const rangeArray = [];

		for (let i = a; i <= b; i++) {
			rangeArray.push(i);
		}

		return {
			pipe: (...funcs) => {
				const transformedArray = funcs.reduce((arr, func) => {
					return func(arr);
				}, rangeArray);
				
				return {
					subscribe: (callback) => {
						transformedArray.forEach(e => {
							callback(e);
						})
					}
				}
			}
		}
	}
