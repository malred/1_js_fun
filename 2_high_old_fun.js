// 高阶函数-函数作为返回值
/*
function makeFn() {
    let msg = 'hello func'
    return function () {
        console.log(msg);
    }
}
const fn = makeFn()
fn()
makeFn()()
*/
// 模拟once函数(对一个函数只触发一次)
function once(fn) {
    let done = false
    return function () {
        if (!done) {
            done = true
            // 调用fn,并传递当前参数
            return fn.apply(this,arguments)
        }
    }
}
let pay = once(function (money) {
     console.log(`支付: ${money} RMB`);
})
pay(100)
pay(100)
pay(100)
pay(100)
pay(100)