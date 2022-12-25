// point free 模式
// Hello    World -> hello_world
const fp = require('lodash/fp');
// 组合过程不需要指定数据
const f = fp.flowRight(fp.replace(/\s+/g, '_'), fp.toLower)
console.log(f('Hello    World'));
// world wild web -> W. W. W   (字符串首字母大写,使用.作为分隔符)
// 多个map遍历数组,性能低
// const firstLetterToUpper = fp.flowRight
//     (fp.join('.'), fp.map(fp.first), fp.map(fp.toUpper), fp.split(' ')) 
// 多个map组合为一个
const firstLetterToUpper = fp.flowRight
    (fp.join('.'), fp.map(fp.first, fp.toUpper), fp.split(' '))
console.log(firstLetterToUpper('world wild web'));