// 函数组合 调试
// NEVER SAY DIE -> never-say-die (需求: 拆分,转小写,拼接)
const _ = require('lodash');
// 因为分割符要定下,所以把它转为第一个参数
// _.split(str,sep) -> split(sep,str) 
const split = _.curry((sep, str) => _.split(str, sep))
// join(arr,sep) -> join(sep,arr)
const join = _.curry((sep, arr) => _.join(arr, sep))
// v1: 打印传过来的处理结果
// const log = v => {
//     console.log(typeof (v), ': ', v);
//     return v // 还需要接着处理,要返回
// }
// v2: 打印传过来的值和tag
const trace = _.curry((tag, v) => {
    console.log(tag, v);
    return v
})
// split返回数组,tolower把数组转成小写字符串,而join需要的是数组
// const f = _.flowRight(join('-'), log, _.toLower, log, split(' '))
// console.log(f('NEVER SAY DIE')); // n-e-v-e-r-,-s-a-y-,-d-i-e
// map,回调函数转到形参1,并固定转小写函数,把数组的每一项转小写
const map = _.curry((fn, arr) => _.map(arr, fn))
// const f = _.flowRight(join('-'), log, map(_.toLower), log, split(' '))
const f = _.flowRight(join('-'), trace('map之后'), map(_.toLower), trace('split之后'), split(' '))
console.log(f('NEVER SAY DIE'));