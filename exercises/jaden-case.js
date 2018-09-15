'use strict'

/*
 * Jaden Smith Case
 *
 * Make a `jadenCase` function that takes a string as parameter
 * and return the string with each words capitilized.
 *
 * Example : "How are you ?" -> "How Are You ?"
 *
 */

function jadenCase(str){
        str.toLowerCase()
        return str.charAt(0).toUpperCase() + str.substr(1).toLowerCase()
    
    
}

//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof jadenCase, "function")
assert.strictEqual(jadenCase('str'), 'Str')
assert.strictEqual(jadenCase('qsdqsdqsd'), 'Qsdqsdqsd')
assert.strictEqual(jadenCase('STR'), 'Str')
assert.strictEqual(jadenCase('zapZAP'), 'Zapzap')
// End of tests */
