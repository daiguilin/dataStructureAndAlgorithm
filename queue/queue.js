/*
 * @Author: daiGuilin
 * @Date: 2020-07-30 19:05:56
 * @LastEditTime: 2020-08-21 15:01:30
 * @LastEditors: daiGuilin
 */
// 自定义队列
function Queue() {
    var items = []
    // 队列操作的方法
    this.enqueue = function (element) {
        return items.push(element)
    }
    this.dequeue = function () {
        return items.shift()
    }
    this.front = function () {
        return items[0]
    }
    this.isEmpty = function () {
        return items.length == 0
    }
    this.size = function () {
        return items.length
    }
}
// 创建队列对象
// var queue = new Queue()

// // 在队列中添加元素
// queue.enqueue("abc")
// queue.enqueue("cba")
// queue.enqueue("nba")

// // 查看一下队列前端元素
// alert(queue.front())

// // 查看队列是否为空和元素个数
// alert(queue.isEmpty())
// alert(queue.size())

// // 从队列中删除元素
// alert(queue.dequeue())
// alert(queue.dequeue())
// alert(queue.dequeue())