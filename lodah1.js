// lodah常用方法
// first / last / toUpper / reverse / each / includes / find / findIndex
const _ = require('lodash')
const arr = ['jack', 'tom', 'lucy', 'kate']
console.log(_.first(arr));
console.log(_.last(arr));
console.log(_.toUpper(_.first(arr)));
console.log(_.reverse(arr)); // [ 'kate', 'lucy', 'tom', 'jack' ]
const r = _.each(arr, (item, i) => {
    console.log(item, i);
})
console.log(r);// [ 'kate', 'lucy', 'tom', 'jack' ]