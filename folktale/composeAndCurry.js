// folktale里的compose和curry
const { compose, curry } = require('folktale/core/lambda')
/* curry 柯里化
let f = curry(2, (x, y) => {
    return x+y
})
console.log(f(1, 2));
console.log(f(1)(2));
*/
const { toUpper, first } = require('lodash/fp');
/* compose 组合 */
// 从右到左执行的
let f = compose(toUpper, first)
console.log(f(['one', 'two', 'three']))
