// lodash-fp 和 lodash 里的map方法的区别
// lodash里的函数都是数据优先(数据是第一个形参)
// const _ = require('lodash')
// console.log(_.map(['23', '8', '10'], parseInt)) // [ 23, NaN, 2 ]
// 出现[ 23, NaN, 2 ]的原因: 这个map(data,fn)需要的函数(map形参2)是三个参数(data,index,array)的
// map传递的是('23',0,array)->转成10进制;('8',1,array)->不支持的进制;('10',2,array)->转成2进制
const fp = require('lodash/fp')
// 这里的parseInt只接收一个参数
console.log(fp.map(parseInt, ['23', '8', '10'])); //[ 23, 8, 10 ]