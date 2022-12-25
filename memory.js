// 记忆函数
const _ = require('lodash')
function getArea(r) {
    console.log(r);
    return Math.PI * r * r
}
/*
// memorize会返回一个带有记忆功能的函数
let getAreaMemory = _.memoize(getArea)
console.log(getAreaMemory(4)); // 4 \n 50.26548245743669
// 第一遍打印了r,说明有执行函数,后面都没有,说明是直接取缓存
console.log(getAreaMemory(4)); // 50.26548245743669
console.log(getAreaMemory(4)); // 50.26548245743669
*/
// 模拟memorize
function memoize(f) {
    // 把函数的参数作为key,函数结果作为value,保存
    let cache = {}
    return function () {
        // 把伪数组转化为字符串
        let key = JSON.stringify(arguments)
        // 从cache中取值,如果有就取,没有就获取f调用的返回值
        // apply可以传递不定长参数
        cache[key] = cache[key] || f.apply(f, arguments)
        return cache[key]
    }
}
let getAreaMemory = memoize(getArea)
console.log(getAreaMemory(4)); // 4 \n 50.26548245743669
// 第一遍打印了r,说明有执行函数,后面都没有,说明是直接取缓存
console.log(getAreaMemory(4)); // 50.26548245743669
console.log(getAreaMemory(4)); // 50.26548245743669