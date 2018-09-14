'use strict'

/*
 * Create a `sentence` function that takes an array of strings
 * and return a string of all the element separated by a space
 *
 */
function sentence(tab){
    var toto = "";
    var newStr = "";
    for (let index = 0; index < tab.length; index++) {
        toto = tab[index] + toto; 
    }
    for (var i = toto.length - 1; i >= 0; i--) { 
        newStr = newStr  + toto[i]+ " "; // or newString = newString + str[i];
    }
    

    return newStr;
}

//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof sentence, 'function')
assert.strictEqual(sentence.length, 1)
assert.deepStrictEqual(sentence([ 'a', 'b', 'c' ]), 'a b c')
assert.deepStrictEqual(sentence([ 'a', '1', 'c' ]), 'a 1 c')
assert.deepStrictEqual(sentence([ 'a', '1', 'c', 'd', 'e', 'f' ]), 'a 1 c d e f')
assert.deepStrictEqual(sentence([ 'wol.lol', 'lo,lol']), 'wol.lol lo,lol')
// End of tests */
