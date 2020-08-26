// 创建BinarySearchTree
function BinarySearchTree() {
    // 创建结点构造函数
    function Node(key) {
        this.key = key
        this.left = null
        this.right = null
    }

    // 保存根的属性
    this.root = null

    // 二叉搜索树相关的操作方法
    // 向树中插入数据
    BinarySearchTree.prototype.insert = function (key) {
        // 1.根据key创建对应的node
        var newNode = new Node(key)

        // 2.判断根结点是否有值
        if (this.root === null) {
            this.root = newNode
        } else {
            this.insertNode(this.root, newNode)
        }
    }
    BinarySearchTree.prototype.insertNode = function name(node, newNode) {
        if (newNode.key < node.key) {
            if (node.left == null) {
                node.left = newNode
            } else {
                this.insertNode(node.left, newNode)
            }
        } else {
            if (node.right == null) {
                node.right = newNode;
            } else {
                this.insertNode(node.right, newNode)
            }
        }
    }

    BinarySearchTree.prototype.preOrderTraversal = function (handler) {
        this.preOrderTraversalNode(this.root, handler)
    }

    BinarySearchTree.prototype.preOrderTraversalNode = function (node, handler) {
        if (node != null) {
            handler(node.key)
            this.preOrderTraversalNode(node.left, handler)
            this.preOrderTraversalNode(node.right, handler)
        }
    }

    // 中序遍历
    BinarySearchTree.prototype.inOrderTraversal = function (handler) {
        this.inOrderTraversalNode(this.root, handler)
    }

    BinarySearchTree.prototype.inOrderTraversalNode = function (node, handler) {
        if (node !== null) {
            this.inOrderTraversalNode(node.left, handler)
            handler(node.key)
            this.inOrderTraversalNode(node.right, handler)
        }
    }

    // 后续遍历
    BinarySearchTree.prototype.postOrderTraversal = function (handler) {

    }

    BinarySearchTree.prototype.postOrderTraversalNode = function (node, handler) {
        if (node !== null) {
            this.postOrderTraversalNode(node.left, handler)
            this.postOrderTraversalNode(node.right, handler)
            handler(node.key)
        }
    }

    // 获取最大值和最小值
    BinarySearchTree.prototype.min = function () {
        var node = this.root
        while (node.left !== null) {
            node = node.left
        }
        return node.key
    }

    BinarySearchTree.prototype.max = function () {
        var node = this.root
        while (node.right !== null) {
            node = node.right
        }
        return node.key
    }

    // 搜搜特定的值
    BinarySearchTree.prototype.search = function (key) {
        return this.searchNode(this.root, key)
    }

    BinarySearchTree.prototype.searchNode = function (node, key) {
        if (node == null) {
            return false
        }
        if (node.key > key) {
            return this.searchNode(node.left, key)
        } else if (node.key < key) {
            return this.searchNode(node.right, key)
        } else {
            return true
        }

    }
}

// 测试代码
var bst = new BinarySearchTree()

// 插入数据
bst.insert(11)
bst.insert(7)
bst.insert(15)
bst.insert(5)
bst.insert(3)
bst.insert(9)
bst.insert(6)
bst.insert(8)
bst.insert(10)
bst.insert(13)
bst.insert(12)
bst.insert(14)
bst.insert(20)
bst.insert(18)
bst.insert(25)

// 测试前序遍历结果
var resultString = ""
bst.preOrderTraversal(function (key) {
    resultString += key + " "
})
// alert(resultString) // 11 7 5 3 6 9 8 10 15 13 12 14 20 18 25
// 查找特定的值
alert(bst.search(10)) // true
alert(bst.search(21)) // false