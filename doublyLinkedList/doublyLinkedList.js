// 创建双向链表的构造函数
function DoublyLinkedList() {
    // 创建节点构造函数
    function Node(element) {
        this.element = element
        this.next = null
        this.prev = null // 新添加的
    }

    // 定义属性
    this.length = 0
    this.head = null
    this.tail = null // 新添加的

    // 定义相关操作方法
    // 在尾部追加数据
    DoublyLinkedList.prototype.append = function (element) {
        var newNode = new Node(element);
        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++
    }
    // 正向遍历的方法
    DoublyLinkedList.prototype.forwardString = function () {
        var current = this.head;
        var forwardString = "";
        while (current) {
            forwardString += ',' + current.element;
            current = current.next;
        }
        return forwardString.slice(1)
    }
    // 反向遍历的方法
    DoublyLinkedList.prototype.reverseString = function () {
        var current = this.tail;
        var forwardString = "";
        while (current) {
            forwardString += ',' + current.element;
            current = current.prev;
        }
        return forwardString.slice(1)
    }
    // 实现toString方法
    DoublyLinkedList.prototype.toString = function () {
        return this.forwardString()
    }
    // 在任意位置插入数据
    DoublyLinkedList.prototype.insert = function (position, element) {
        if (position < 0 || position > this.length) { return false }
        var newNode = new Node(element);
        var current = this.head;
        var previous = null;
        var index = 0;
        if (position == 0) {
            if (this.head === null) {
                this.head = newNode;
                this.tail = newNode;
            } else {
                this.head.prev = newNode;
                newNode.next = this.head;
                this.head = newNode;
            }
        } else if (position == this.length) {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        else {
            while (index++ < position) {
                previous = current;
                current = current.next;
            }
            newNode.next = current;
            newNode.prev = previous;
            previous.next = newNode;
            current.prev = newNode;
        }
        this.length++
        return true
    }
    // 根据位置删除对应的元素
    DoublyLinkedList.prototype.removeAt = function (position) {
        // 1.判断越界的问题
        if (position < 0 || position >= this.length) return null

        // 2.判断移除的位置
        var current = this.head
        if (position == 0) {
            if (this.length === 1) {
                this.head = null;
                this.tail = null;
            } else {
                this.head = this.head.next;
                this.head.prev = null;
            }
        } else if (position == (this.length - 1)) {
            current = this.tail;
            this.tail = this.tail.prev;
            this.tail.next = null;
        } else {
            var index = 0;
            var previous = null;
            while (index++ < position) {
                previous = current;
                current = current.next;
            }
            previous.next = current.next;
            current.next.prev = previous;
        }
        this.length--
        return current.element
    }

    // 根据元素获取在链表中的位置
    DoublyLinkedList.prototype.indexOf = function (element) {
        // 1.定义变量保存信息
        var current = this.head
        var index = 0;
        while (current) {
            console.log(index)
            if (current.element === element) {
                return index;
            }
            index++
            current = current.next;
        }
    }
    // 根据元素删除
    DoublyLinkedList.prototype.remove = function (element) {
        var index = this.indexOf(element)
        return this.removeAt(index)
    }
    // 判断是否为空
    DoublyLinkedList.prototype.isEmpty = function () {
        return this.length === 0
    }

    // 获取链表长度
    DoublyLinkedList.prototype.size = function () {
        return this.length
    }

    // 获取第一个元素
    DoublyLinkedList.prototype.getHead = function () {
        return this.head.element
    }

    // 获取最后一个元素
    DoublyLinkedList.prototype.getTail = function () {
        return this.tail.element
    }
}
// 1.创建双向链表对象
var list = new DoublyLinkedList()

// 2.追加元素
list.append("abc")
list.append("cba")
list.append("nba")
list.append("mba")

// 3.获取所有的遍历结果
// alert(list.forwardString()) // abc,cba,nba,mba
// alert(list.reverseString()) // mba,nba,cba,abc
// alert(list) // abc,cba,nba,mba

// 4.insert方法测试
list.insert(0, "100")
list.insert(2, "200")
list.insert(6, "300")
alert(list) // 100,abc,200,cba,nba,mba,300

// 5.removeAt方法测试
// alert(list.removeAt(0)) // 100
// alert(list.removeAt(1)) // 200
// alert(list.removeAt(4)) // 300
// alert(list) // abc,cba,nba,mba

// 6.indexOf方法测试
// alert(list.indexOf("abc")) // 0
alert(list.indexOf("cba")) // 1
// alert(list.indexOf("nba")) // 2
// alert(list.indexOf("mba")) // 3