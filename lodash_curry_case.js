// 柯里化案例
const _ = require('lodash')
// match() 方法可在字符串内检索指定的值，或找到一个或多个正则表达式的匹配。
// 面向过程方式
''.match(/\s+/g) // 提取字符串的空白
''.match(/\d+/g) // 提取字符串的数字
// 函数式方式
const match = _.curry(function (reg, str) {
    return str.match(reg)
})
// 固定了参数1
const haveSpace = match(/\s+/g)
const haveNumber = match(/\d+/g)
console.log(haveSpace('hello world')); // [' ']
console.log(haveSpace('helloworld')); // null
console.log(haveNumber('123abc')); // ['123']
console.log(haveNumber('abc')); // null
// 过滤数组里的空格或数字
const filter = _.curry(function (f, arr) {
    return arr.filter(f)
})
console.log(filter(haveSpace, ['john connor', 'john_donne'])); // [ 'john connor' ]
// 固定参数1
const findSpace = filter(haveSpace)
console.log(findSpace(['john connor', 'john_donne'])); // [ 'john connor' ]