// IO 函子
var fs = require('fs');
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
let readFile = function (filename) {
    // return 新io函子
    return new IO(function () {
        // 异步读
        return fs.readFileSync(filename, 'utf-8')
    })
}
let print = function (x) {
    return new IO(function () {
        console.log(x);
        return x
    })
}
// IO(IO(x)) 嵌套函子
let cat = fp.flowRight(print, readFile)
let r = cat('./folktale/package.json')._value()._value()
console.log(r);