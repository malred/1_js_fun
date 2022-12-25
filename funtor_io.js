// IO 函子
const fp = require('lodash/fp')
class IO {
    static of(value) {
        // new一个io对象,传入fn(返回value)作为_value
        return new IO(function () {
            return value
        })
    }
    constructor(fn) {
        this._value = fn
    }
    map(fn) {
        // 调用map,传入fn,与_value组合为新函数
        // 因为是从左到右执行,_value返回value,提供给map传入的函数
        return new IO(fp.flowRight(fn, this._value))
    }
}
// 使用
// process是node的全局模块,可以通过它来获得node进程相关的信息
let r = IO.of(process).map(p => p.execPath)// execPath是打印当前路径
console.log(r._value()); 