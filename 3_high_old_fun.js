// 模拟常用高阶函数: map,every,some
/*
// map
const map = (arr, fn) => {
    let res = []
    for (let value of arr) {
        res.push(fn(value))
    }
    return res
}
// 测试
let arr = [1, 2, 3, 4]
arr = map(arr, v => v * v)
console.log(arr);
*/
/*
// every
const every = (arr, fn) => {
    let res = true
    for (let value of arr) {
        res = fn(value)
        if (!res) {
            break
        }
    }
    return res
}
// 测试
arr = [9, 12, 13]
let r = every(arr, v => v > 10)
console.log(r);
*/
// some
const some = (arr, fn) => {
    let res = false
    for (let value of arr) {
        res = fn(value)
        if (res) {
            break
        }
    }
    return res
}
// 测试
let arr = [1, 2, 3, 9]
let r = some(arr, v => v % 2 === 0)
console.log(r); 