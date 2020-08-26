/*
 * @Author: daiGuilin
 * @Date: 2020-07-30 20:11:19
 * @LastEditTime: 2020-07-30 20:24:47
 * @LastEditors: daiGuilin
 */
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
function passGame(nameList, num) {
    var queue = new Queue();
    for (var i = 0; i < nameList.length; i++) {
        queue.enqueue(nameList[i])
    }
    while (queue.size() > 1) {
        for (var j = 0; j < num; j++) {
            queue.enqueue(queue.dequeue())
        }
        queue.dequeue();
    }
    var lastName = queue.dequeue();
    return nameList.indexOf(lastName)
}
// 验证结果
var names = ['John', 'Jack', 'Camila', 'Ingrid', 'Carl'];
var index = passGame(names, 7) // 数到8的人淘汰
alert("最终位置:" + index)