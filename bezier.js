/* 
 * More info at:
 * http://html5tutorial.com/how-to-draw-n-grade-bezier-curve-with-canvas-api/
 *
 */

class Bezier {
	// points - array of points. [{x: 0, y: 1}, {x: 1, y: 2}, etc.];
	constructor(points) {
		this.points = [...points];
		return this;
	}

	// returns intermediate point
	calc(step) {
		// intermediate point
		let point = {x: 0, y: 0};
		// n is number of points - 1;
		let n = this.points.length - 1;

		for(let i = 0; i <= n; i++) {
			let b = this.getBezierBasis(i, n, step);

			point.x += this.points[i].x * b;
			point.y += this.points[i].y * b;
		}

		return point;
	}

	getBezierBasis(i, n, step) {
		return this.J(n, i) * Math.pow(step, i) * Math.pow(1 - step, n - i);
	}

	J(n, i) {
		return this.F(n) / (this.F(i) * this.F(n - i));
	}

	// F = factorial
	F(n) {
		return n == 0 ? 1 : n * this.F(n - 1);
	}
}