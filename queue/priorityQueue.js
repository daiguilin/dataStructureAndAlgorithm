/*
 * @Author: daiGuilin
 * @Date: 2020-07-30 19:05:56
 * @LastEditTime: 2020-07-30 20:37:49
 * @LastEditors: daiGuilin
 */
// 自定义队列
function PriorityQueue() {
    var items = [];
    // 封装一个新的构造函数, 用于保存元素和元素的优先级
    function QueueElement(element, priority) {
        this.element = element
        this.priority = priority
    }

    // 队列操作的方法
    this.enqueue = function (element, priority) {
        var queueElement = new QueueElement(element, priority);
        var added = false;
        if (this.isEmpty()) {
            items.push(queueElement)
        } else {
            for (var i = 0; i < items.length; i++) {
                if (queueElement.priority < items[i].priority) {
                    items.splice(i, 0, queueElement)
                    added = true;
                    break;
                }
            }
            if (!added) {
                items.push(queueElement)
            }
        }

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
// 创建优先级队列对象
var pQueue = new PriorityQueue()

// 添加元素
pQueue.enqueue("abc", 10)
pQueue.enqueue("cba", 5)
pQueue.enqueue("nba", 12)
pQueue.enqueue("mba", 3)

// 遍历所有的元素
var size = pQueue.size()
for (var i = 0; i < size; i++) {
    var item = pQueue.dequeue()
    console.log(item.element + "-" + item.priority)
}