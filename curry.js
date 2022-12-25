// 柯里化
// function checkAge(age) {
//     let min = 18
//     return age >= min
// }
/*
// 此时不依赖外部变量
function checkAge(min, age) {
    return age >= min
}
console.log(checkAge(18, 20));
console.log(checkAge(18, 24));
console.log(checkAge(22, 24));
*/
// 柯里化,固定min,简化代码
// function checkAge(min) {
//     return function (age) {
//         return age >= min
//     }
// }
// es6箭头函数简化
let checkAge = min => (age => age >= min)
let checkAge18 = checkAge(18)
let checkAge20 = checkAge(20)
console.log(checkAge18(20));
console.log(checkAge20(24));