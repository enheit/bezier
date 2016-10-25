class Bezier {
	constructor(points) {
		this.points = [...points];

		return this;
	}

	// n = Pow of polynom
	// t = step
	calc(t) {
		// The intermediate point
		let point = {x: 0, y: 0};
		let n = this.points.length - 1;

		for(let i = 0; i <= n; i++) {
			let b = this.basisBezier(i, n, t);
			point.x += this.points[i].x * b;
			point.y += this.points[i].y * b;
		}

		return point;
	}

	basisBezier(i, n, t) {
		let b = this.combination(n, i) * Math.pow(t, i) * Math.pow(1 - t, n - i);
		return b;
	}

	combination(n, i) {
		let nF = this.getFactorial(n);
		let iF = this.getFactorial(i);
		// n - i
		let subtraction = this.getFactorial(n - i);

		return nF / (iF * subtraction);
	}

	getFactorial(n) {
		return n == 0 ? 1 : n * this.getFactorial(n - 1);
	}
}