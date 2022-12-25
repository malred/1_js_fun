// maybe 函子
class MayBe {
    static of(value) {
        return new MayBe(value)
    }
    constructor(value) {
        this._value = value
    }
    map(fn) {
        // 根据是否为空来执行,提高代码健壮性
        return this.isNothing() ? MayBe.of(null) : MayBe.of(fn(this._value))
    }
    // 判断是不是空
    isNothing() {
        return this._value === null || this._value === undefined
    }
}

// let r = MayBe.of('Hello World')
//     .map(x => x.toUpperCase())
// 可以解决输入值为null
// let r = MayBe.of(null).map(x => x.toUpperCase())// MayBe { _value: null }
// 多次调用时不知道哪个地方输入了null
let r = MayBe.of('Hello World')
    .map(x => x.toUpperCase())
    .map(x => null)
    .map(x => x.split(' '))
console.log(r); // null