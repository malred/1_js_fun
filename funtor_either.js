// either 函子
class Left {
    static of(value) {
        return new Left(value);
    }
    constructor(value) {
        // 变量名加下划线表示私有属性(非强制,是规约)
        this._value = value;
    }
    map(fn) {
        return this
    }
}
class Right {
    static of(value) {
        return new Right(value);
    }
    constructor(value) {
        this._value = value;
    }
    map(fn) {
        return Right.of(fn(this._value))
    }
}
// let r1 = Right.of(12).map(x => x + 2) // 14
// let r2 = Left.of(12).map(x => x + 2)  // 12
// console.log(r1, r2);
// 解析json的方法
function parseJSON(str) {
    try {
        return Right.of(JSON.parse(str));
    } catch (e) {
        // 发生异常就返回异常
        return Left.of({ errro: e.message })
    }
}
// 测试: 非法json字符串
// let r = parseJSON('{name:zs}')
// console.log(r);
// 测试: 正确json字符串
let r = parseJSON('{"name":"zs"}')
    .map(x => x.name.toUpperCase())
console.log(r);