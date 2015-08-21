import {PI} from './module';
import {sqrt} from './module';
import {square} from './module'; 

var arg1 = process.argv[2];
var arg2 = process.argv[3];

console.log(PI);
console.log(sqrt(+arg1));
console.log(square(+arg2));



// solution-math.js:

//     export const PI = 3.141592;
    
//     var _sqrt = function(s, x, last){
//       return x != last ? _sqrt(s, (x + s / x) / 2.0, x) : x;
//     };
//     export function sqrt(s){
//       return _sqrt(s, s/2.0, 0.0);
//     };
//     export function square(x) {
//       return x * x;
//     };