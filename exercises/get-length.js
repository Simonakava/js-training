'use strict'

/*
 * Create a `getLength` function that takes an array or a string
 * and return its length.
 *
 * @notions Data-Structures, Get
 */

// Your code :
function getLength(tab){
    var sum = 0;
    for (let index = 0; index < tab.length; index++) {
       sum = index + 1;
       
        
    }
    return sum;
}
//* Begin of tests
const assert = require('assert')

assert.strictEqual(getLength([ 2, 42 ]), 2)
assert.strictEqual(getLength([ 'pouet', 4, true ]), 3)
assert.strictEqual(getLength(Array(100)), 100)
assert.strictEqual(getLength([ getLength ]), 1)
assert.strictEqual(getLength('salut'), 5)
assert.strictEqual(getLength([]), 0)
// End of tests */
