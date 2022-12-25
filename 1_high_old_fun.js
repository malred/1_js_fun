// 高阶函数-函数作为参数
// 1,模拟foreach方法
/*
function forEach(array, fn) {
    for (let i = 0; i < array.length; i++) {
        fn(array[i])
    }
}
// 测试
let arr = [1, 2, 3, 4, 5]
forEach(arr, function (item) {
    console.log(item);
}) 
*/
// 2,模拟filter方法
function filter(array, fn) {
    let results = []
    for (let i = 0; i < array.length; i++) {
        // 如果数组的元素满足fn
        if (fn(array[i])) {
            results.push(array[i])
        }
    }
    return results
}
// 测试
let arr = [1, 2, 3, 4, 5]
let res = filter(arr, function (item) {
    return item % 2 === 0
})
console.log(res);