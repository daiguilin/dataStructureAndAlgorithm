

function HashTable() {
    // 定义属性
    this.storage = []
    this.count = 0
    this.limit = 8
    HashTable.prototype.hashCode = function (str, max) {
        var hashCode = 0;
        for (let i = 0; i < str.length; i++) {
            hashCode = hashCode * 37 + str.charCodeAt(i)
        }
        hashCode = hashCode % max;
        return hashCode;
    }
    // 插入数据方法
    HashTable.prototype.put = function (key, value) {
        var index = this.hashCode(key, this.limit);
        var bucket = this.storage[index];
        if (bucket === undefined) {
            bucket = [];
            this.storage[index] = bucket;
        }
        // 4.判断是新增还是修改原来的值.
        var override = false;

        for (let i = 0; i < bucket.length; i++) {
            var item = bucket[i];
            if (item[0] === key) {
                item[1] = value;
                override = true;
            }
        }

        // 5.如果是新增, 前一步没有覆盖
        if (!override) {
            bucket.push([key, value]);
            this.count++
            // 数组扩容
            if (this.count > this.limit * 0.75) {
                var primeNum = this.getPrime(this.limit * 2)
                this.resize(primeNum)
            }
        }
    }

    // 获取存放的数据
    HashTable.prototype.get = function (key) {
        var index = this.hashCode(key, this.limit);
        var bucket = this.storage[index];
        if (bucket === null) {
            return null;
        }
        for (let i = 0; i < bucket.length; i++) {
            var item = bucket[i];
            if (item[0] === key) {
                return item[1]
            }
        }

        return null;
    }

    // 删除数据
    HashTable.prototype.remove = function (key) {
        var index = this.hashCode(key, this.limit);
        var bucket = this.storage[index];
        if (bucket === null) {
            return null;
        }

        for (let i = 0; i < bucket.length; i++) {
            var item = bucket[i];
            if (item[0] === key) {
                var value = item[1];
                bucket[i].splice(i, 1);
                this.count--;
                // 缩小数组的容量
                if (this.limit > 8 && this.count < this.limit * 0.25) {
                    var primeNum = this.getPrime(Math.floor(this.limit / 2))
                    this.resize(primeNum)
                }
                return value;
            }
        }
        return null;
    }

    // isEmpty方法
    HashTable.prototype.isEmpty = function () {
        return this.count == 0
    }
    // size方法
    HashTable.prototype.size = function () {
        return this.count
    }

    // 哈希表扩容
    HashTable.prototype.resize = function (newLimit) {
        var oldStorage = this.storage;
        // 2.重置属性
        this.limit = newLimit
        this.count = 0
        this.storage = []

        // 3.遍历旧数组中的所有数据项, 并且重新插入到哈希表中
        oldStorage.forEach(function (bucket) {
            // 1.bucket为null, 说明这里面没有数据
            if (bucket == null) {
                return
            }

            // 2.bucket中有数据, 那么将里面的数据重新哈希化插入
            for (var i = 0; i < bucket.length; i++) {
                var tuple = bucket[i]
                this.put(tuple[0], tuple[1])
            }
        }.bind(this))
    }
    // 判断是否是质数
    HashTable.prototype.isPrime = function (num) {
        var temp = parseInt(Math.sqrt(num))
        // 2.循环判断
        for (var i = 2; i <= temp; i++) {
            if (num % i == 0) {
                return false
            }
        }
        return true
    }

    // 获取质数
    HashTable.prototype.getPrime = function (num) {
        while (!isPrime(num)) {
            num++
        }
        return num
    }
}

// 测试哈希表
// 1.创建哈希表
var ht = new HashTable()

// 2.插入数据
ht.put("abc", "123")
ht.put("cba", "321")
ht.put("nba", "521")
ht.put("mba", "520")

// 3.获取数据
alert(ht.get("abc"))
ht.put("abc", "111")
alert(ht.get("abc"))

// 4.删除数据
alert(ht.remove("abc"))
alert(ht.get("abc"))