'use strict'

/*
 * Create a `repeat` function that takes a string and a number as parameters
 * and return the repeated string by the given number
 * Like the method https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat
 * Of course you may not use the method directly
 *
 */

function repeat(a, b){
    // Step 1. Create an empty string that will host the repeated string
    var repeatedString = "";

    // Step 2. Set the While loop with (times > 0) as the condition to check
    while (b > 0) {
      repeatedString += a;
      b--;
    }
    return repeatedString;
  }

  //                   Condition       T/F       repeatedString += string      repeatedString        times
  // First iteration    (3 > 0)        true            "" + "abc"                  "abc"               2
  // Second iteration   (2 > 0)        true           "abc" + "abc"               "abcabc"             1
  // Third iteration    (1 > 0)        true          "abcabc" + "abc"            "abcabcabc"           0
  // Fourth iteration   (0 > 0)        false



//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof repeat, 'function')
assert.strictEqual(repeat.length, 2)
assert.strictEqual(repeat.toString().includes('.repeat'), false)
assert.strictEqual(repeat('a', 3), 'aaa')
assert.strictEqual(repeat('ba', 10), 'babababababababababa')
assert.strictEqual(repeat('pouet', 2), 'pouetpouet')
assert.strictEqual(repeat('haha', 1), 'haha')
assert.strictEqual(repeat('hehehe', 0), '')
// End of tests */
