// 纯函数
// slice是纯函数,splice不是

let arr = [1, 2, 3, 4, 5]
// 多次调用结果一致 
console.log(arr.slice(0, 3)); // [ 1, 2, 3 ]
console.log(arr.slice(0, 3)); // [ 1, 2, 3 ]
console.log(arr.slice(0, 3)); // [ 1, 2, 3 ]
// 多次调用结果不一致
console.log(arr.splice(0, 3)); // [ 1, 2, 3 ]
console.log(arr.splice(0, 3)); // [ 4, 5 ]
console.log(arr.splice(0, 3)); // [ ]

function sum(n1, n2) {
    return n1 + n2
}
console.log(sum(1, 2)); // 3
console.log(sum(1, 2)); // 3
console.log(sum(1, 2)); // 3