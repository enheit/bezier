# Bezier class
This is a simple class that allow you to create bezier curve by points.

# How to
```javascript
// step must be in range 0 to 1
let step = 0.001;

let points = [ 
  {x: 1, y: 1}, 
  {x: 2, y: 2}, 
  {x: 1, y: 3} 
 ];
let bezier = new Bezier(points);

for(let i = 0; i < 1; i += step) {
  bezier.calc(0.001); // i = 0, result [1; 1]
                      // i = 0.001, result [1.001998; 1.002]
                      // i = 0.002, result [1.003992; 1.004]
                      // i = 0.003, etc.
}
```
