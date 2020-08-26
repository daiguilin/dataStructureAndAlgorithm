// 封装ArrayList
function ArrayList() {
    this.array = []

    ArrayList.prototype.insert = function (item) {
        this.array.push(item)
    }

    ArrayList.prototype.toString = function () {
        return this.array.join()
    }

    //冒泡排序
    ArrayList.prototype.bubbleSort = function () {
        var arr = this.array;
        var len = arr.length - 1;
        for (let i = len; i >= 0; i--) {
            for (let j = 0; j < i; j++) {
                if (arr[j] > arr[j + 1]) {
                    this.swap(j, j + 1)
                }
            }
        }
    }

    //选择排序
    ArrayList.prototype.selectionSort = function () {
        var length = this.array.length;
        var arr = this.array;
        var min = 0;
        /*
        自我实现注意事项：
        1.外层循环只需执行length-1，因为最后一个元素不需要和其他元素进行比较
        2.外层循环记录最小值得位置，内层循环把最小值与后面所有的元素进行比较，也就是从最小值得下一个元素开始进行循环比较
        3.对于临界值一定要注意，最容易忽略的细节
        */
        for (let j = 0; j < length; j++) {
            min = j;
            for (let i = j + 1; i < length; i++) {
                var temp = arr[min];
                if (temp > arr[i]) {
                    console.log('1111')
                    this.swap(min, i)
                }
            }
        }

    }

    //

    ArrayList.prototype.swap = function (m, n) {
        var arr = this.array;
        var temp = arr[m];
        arr[m] = arr[n];
        arr[n] = temp;
    }
}

// 初始化数据项
var list = new ArrayList()
list.insert(6)
list.insert(10)
list.insert(2)
list.insert(33)
list.insert(35)
list.insert(44)

list.insert(11)
list.insert(5)


// 测试冒泡排序
list.selectionSort()
alert(list) // 2,5,6,10,11,33
