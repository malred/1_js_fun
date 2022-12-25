// lodash 的fp模块
// NEVER SAY DIE --> never-say-die
const fp = require('lodash/fp');
// fp模块的函数都是函数优先(函数作为第一个形参)
const f = fp.flowRight(fp.join('-'), fp.map(fp.toLower), fp.split(' '))
console.log(f('NEVER SAY DIE')); // never-say-die