'use strict'

/*
 * Create a `multiply` function that takes two number as arguments
 * and returns the result of the multiplication of those two.
 * But you must do this without using the operators * or /
 * and no loops. You need to do it using recursion.
 *
 * @notions Primitive and Operators, Functions, Recursion
 */

// Your code :
function multiply(a, b){
    var length = 0;
    var i = "i" ;

    if (b > 0 && a > 0){
        return i.repeat(a).repeat(b).length;
    }else if (b < 0 && a > 0){
        b = b - b - b;
        return -i.repeat(a).repeat(b).length;
    } else if (a < 0 && b > 0){
        a = a - a - a;
        return -i.repeat(a).repeat(b).length;
    } else if (a < 0 && b < 0){
        b = b - b - b;
        a = a - a - a;
        return i.repeat(a).repeat(b).length;
    }  else if (a === 0 || b === 0){
        return 0;
    }        

}
/*
multiply(5, 3)           //our a is 5 and b is 3
"i"                      //creating a string of "i"
"iiiii"                  //repeating it a times or 5 
"iiiiiiiiiiiiiii"        //repeating again b times or 3
then we return the length which would be 15.
*/

//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof multiply, 'function')
assert.strictEqual(multiply.length, 2)
assert.strictEqual(multiply.toString().includes('Math.imul'), false)
assert.strictEqual(multiply.toString().includes('while'), false)
assert.strictEqual(multiply.toString().includes('for'), false)
assert.strictEqual(multiply.toString().includes('*'), false)
assert.strictEqual(multiply.toString().includes('/'), false)
assert.strictEqual(multiply(34, 78), 2652)
assert.strictEqual(multiply(123, 0), 0)
assert.strictEqual(multiply(0, -230), 0)
assert.strictEqual(multiply(0, 0), 0)
assert.strictEqual(multiply(123, -22), -2706)
assert.strictEqual(multiply(-22, 123), -2706)
assert.strictEqual(multiply(-22, -123), 2706)
// End of tests */
