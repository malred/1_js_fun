// lodash 中的函数组合方法
const _ = require("lodash")

const reverse = arr => arr.reverse()
const first = arr => arr[0]
const toUpper = s => s.toUpperCase()

// const f = _.flowRight(toUpper, first, reverse)
const f = composeRight(toUpper, first, reverse)
console.log(f(['one', 'two', 'three'])); // THREE
// 函数组合原理
function composeRight(...args) {
    return function (value) {
        // 因为是`从右往左`调用,所以要先翻转
        // reduce方法接收一个函数作为累加器，数组中的每个值（从左到右）开始缩减，最终计算为一个值 
        // acc是结果(每次都对他进行操作)
        // fn是当前元素(这里就是`数组`里的函数)
        // value是初始值,这里是`组合函数`调用时传的值
        return args.reverse().reduce(function (acc, fn) {
            return fn(acc) // 每次执行的操作
        }, value)
    }
}
// 从左往右调用的函数组合方法 + 箭头函数简化
const compose = (...args) => (value) => args.reduce((acc, fn) => fn(acc), value)
// 箭头函数要先定义再调用
const f1 = compose(reverse, first, toUpper)
console.log(f1(['one', 'two', 'three'])); // THREE
