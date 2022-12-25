// 函数组合演示
// 默认从右到左执行执行函数
function compose(f, g) {
    return function (value) {
        return f(g(value))
    }
}
// 示例: 获取数组最后一个元素
function reverse(arr) {
    return arr.reverse()
}
function first(arr) {
    return arr[0]
}
const last = compose(first, reverse)
console.log(last([1,2,3,4])); // 4