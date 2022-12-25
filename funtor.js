// 函子
/*
class Container {
    // 构造
    constructor(value) {
        // 内部_value赋值
        this._value = value
    }
    map(fn) {
        return new Container(fn(this._value))
    }
}
let r = new Container(5)
    .map(x => x + 1)
    .map(x => x * x)
console.log(r); // 36
*/
// 封装new Container
class Container {
    // 静态方法可以直接调用
    // of方法,返回新的container对象
    static of(value) {
        return new Container(value)
    }
    // 构造
    constructor(value) {
        // 内部_value赋值
        this._value = value
    }
    map(fn) {
        return Container.of(fn(this._value))
    }
}
// 永远不去直接拿值(不对外公布),而是存在函数(作为一个容器)里,
// 需要的时候就传入函数来return获取
let r = Container.of(5)  // 链式编程
    .map(x => x + 2)
    .map(x => x * x)
console.log(r); // 49
// null和undefined
