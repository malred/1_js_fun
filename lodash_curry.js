// lodash里的curry (柯里化可以把多参函数转化为一元函数)
const _ = require('lodash')
function sum(a, b, c) {
    return a + b + c
}
// const curried = _.curry(sum)
const curried = curry(sum)
// console.log(curried(1, 2, 3)); // 6
// 如果只传递部分参数,会返回一个形参是剩余参数的函数,
// 等待传递完所有参数才会调用函数
// console.log(curried(1)(2, 3)); // 6
// console.log(curried(1, 2)(3)); // 6
console.log(curried(1));
console.log(curried(1)(2)(3));
// 手写柯里化
function curry(f) {
    // ...xxx 可变长参数,这里用来接收参数
    return function curriedFn(...args) {
        // function.length: 指该函数期望传入的参数数量，即形参的个数
        // 判断实参和形参的个数
        if (args.length < f.length) {
            return function () {
                // arguments是`当前调用`时传进来的参数
                // args是被闭包固定了的`上传`调用的参数
                console.log(arguments, args); // curried(1)(2, 3) -> { '0': 2, '1': 3 } [1]
                console.log(...args.concat(Array.from(arguments)));
                // args.concat(合并两个数组)拼接传进来的参数和原本的参数
                // Array.from把伪数组转为数组
                // ...是展开的意思,这里展开args
                return curriedFn(...args.concat(Array.from(arguments)))
            }
        }
        return f(...args) // f(...args)接收所有参数,调用
    }
}