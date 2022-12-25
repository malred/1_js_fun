// task 异步任务
const fs = require('fs');
const { task } = require('folktale/concurrency/task')
const { split, find } = require('lodash/fp')
function readFile(filename) {
    // task接收一个函数
    return task(resolver => {
        fs.readFile(filename, 'utf8', (err, data) => {
            if (err) resolver.reject(err)
            resolver.resolve(data)
        })
    })
}
// 调用task返回的函数时,并没有马上执行
readFile('package.json')
    .map(split('\n')) // 传递处理方法,根据\n切割
    .map(find(x => x.includes('version'))) // 传递处理方法,寻找是否有version
    .run() // 执行
    .listen({ // 监听异步任务执行结果
        // 失败时执行
        onRejected: err => {
            console.log(err);
        },
        // 成功时执行    
        onResolved: data => {
            console.log(data);
        }
    })