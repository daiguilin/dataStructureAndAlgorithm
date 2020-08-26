// 封装链表的构造函数
// 链表得三要素
// 1.head 此变量初始化为null，一旦链表有元素，需将第一个元的引用地址传递给head，用来做链表各种操作的首次索引
// 2.node 链表节点的构成，由值和下一个元素的引用地址构成，可以利用循环条件，判断引用地址是否存在不断查找下一级元素做相应的处理
// 3.length 保存链表的长度
function LinkedList() {
    // 封装一个Node类, 用于保存每个节点信息
    function Node(element) {
        this.element = element
        this.next = null
    }

    // 链表中的属性
    this.length = 0  // 链表的长度
    this.head = null // 链表的第一个节点

    // 链表中的方法
    LinkedList.prototype.append = function (element) {
        var newNode = new Node(element);
        if (this.head == null) {
            this.head = newNode;
        } else {
            var current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
        this.length++;

    }
    LinkedList.prototype.toString = function () {
        var current = this.head;
        var str = '';
        while (current) {
            str += ', ' + current.element;
            current = current.next;
        }
        return str.slice(1)
    }
    // 根据下标插入元素
    LinkedList.prototype.insert = function (position, element) {
        var newNode = new Node(element);
        var current = this.head;
        var previous = null;
        var index = 0;
        if (position < 0 || position >= this.length) {
            return false;
        }
        if (position == 0) {
            newNode.next = current;
            this.head = newNode;
        } else {
            while (index++ < position) {
                previous = current;
                current = current.next;
            }
            newNode.next = current;
            previous.next = newNode;
        }
        this.length++;
    }
    // 根据下标删除元素
    LinkedList.prototype.removeAt = function (position, element) {
        var current = this.head;
        var previous = null;
        var index = 0;
        if (position < 0 || position >= this.length) {
            return false;
        }
        if (position == 0) {
            this.head = current.next;
        } else {
            while (index++ < position) {
                previous = current;
                current = current.next;
            }
            previous.next = current.next;
        }
        this.length--;
    }
    // 根据元素获取链表中的位置
    LinkedList.prototype.indexOf = function (element) {
        var current = this.head;
        var index = 0;
        while (current) {
            if (current.element === element) {
                return index;
            }
            index++;
            current = current.next;
        }
        return -1;
    }
    // 根据元素删除信息
    LinkedList.prototype.remove = function (element) {
        var index = this.indexOf(element)
        return this.removeAt(index)
    }
    // 判断链表是否为空
    LinkedList.prototype.isEmpty = function () {
        return this.length == 0
    }
    // 获取链表的长度
    LinkedList.prototype.size = function () {
        return this.length
    }
    // 获取第一个节点
    LinkedList.prototype.getFirst = function () {
        return this.head.element
    }
}
// 测试链表
// 1.创建链表
var list = new LinkedList()

// 2.追加元素
list.append(15)
list.append(10)
list.append(20)
// 4.测试insert方法
// list.insert(0, 100)
// list.insert(4, 200)
// list.insert(2, 300)
// 5.测试removeAt方法
// list.removeAt(0)
// list.removeAt(1)
// list.removeAt(3)
// 6.测试indexOf方法
// alert(list.indexOf(15)) // 0
// alert(list.indexOf(10)) // 1
// alert(list.indexOf(20)) // 2
// alert(list.indexOf(100)) // -1
// 7.测试remove方法
list.remove(15)
alert(list) // 10,20
// 8.测试其他方法
alert(list.isEmpty()) // false
alert(list.size()) // 2
alert(list.getFirst()) // 10
// 3.打印链表的结果
alert(list.toString())