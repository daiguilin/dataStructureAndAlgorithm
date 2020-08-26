/*
 * @Author: daiGuilin
 * @Date: 2020-07-30 16:26:30
 * @LastEditTime: 2020-07-30 17:34:19
 * @LastEditors: daiGuilin
 */
function Stack() {
    var items = [];
    this.push = function (element) {
        return items.push(element)
    }
    this.pop = function () {
        return items.pop()
    }
    this.peek = function () {
        return items[items.length - 1]
    }
    this.isEmpty = function () {
        return items.length == 0
    }
    this.size = function () {
        return items.length
    }
}
// 模拟面试题
// var stack = new Stack()

// // 情况下代码模拟
// stack.push(6)
// stack.push(5)
// alert(stack.pop())     // 5
// stack.push(4)
// stack.pop()     // 4
// stack.push(3)
// stack.pop()     // 3
// stack.pop()     // 6
// stack.push(2)
// stack.push(1)
// stack.pop()     // 1
// stack.pop()     // 2
// console.log(stack.items)
// 封装十进制转二进制的函数
function dec2bin(decNumber) {
    var remainder;
    var _stack = new Stack();
    while (decNumber > 0) {
        remainder = decNumber % 2;
        decNumber = Math.floor(decNumber / 2);
        _stack.push(remainder)
    }
    var str = '';
    while (_stack.size() > 0) {
        str = str + String(_stack.pop());
    }
    return str;
}
// dec2bin(100)
alert(dec2bin(100))