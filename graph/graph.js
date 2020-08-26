function Graph() {
    // 属性
    this.vertexes = [] // 存储顶点
    this.adjList = new Dictionary() // 存储边

    // 方法
    // 添加方法
    Graph.prototype.addVertex = function (v) {
        this.vertexes.push(v)
        this.adjList.set(v, [])
    }
    //添加边
    Graph.prototype.addEdge = function (v, w) {
        this.adjList.get(v).push(w)
        this.adjList.get(w).push(v)
    }

    Graph.prototype.toString = function () {
        var resultStr = "";
        for (let i = 0; i < this.vertexes.length; i++) {
            resultStr += this.vertexes[i] + '->';
            var adj = this.adjList.get(this.vertexes[i]);
            for (let j = 0; j < adj.length; j++) {
                resultStr += adj[j] + ' ';
            }
            resultStr += '\n'
        }
        return resultStr;
    }
    // 广度优先算法
    Graph.prototype.initializeColor = function () {
        var colors = []
        for (var i = 0; i < this.vertexes.length; i++) {
            colors[this.vertexes[i]] = "white"
        }
        return colors
    }
    //广度优先搜索
    Graph.prototype.bfs = function (v, handler) {
        // 1.初始化颜色
        var colors = this.initializeColor();
        var queue = new Queue();
        queue.enqueue(v);
        // 4.从队列中依次取出和放入数据
        while (!queue.isEmpty()) {
            var qv = queue.dequeue();
            colors[qv] = 'gray';
            var adj = this.adjList.get(qv)
            for (let i = 0; i < adj.length; i++) {
                if (colors[adj[i]] === 'white') {
                    colors[adj[i]] = 'gray';
                    queue.enqueue(adj[i]);
                }
            }
            colors[qv] = 'black';

            // 4.6.处理qv
            if (handler) {
                handler(qv)
            }
        }


    }

    // 深度优先搜索
    Graph.prototype.dfs = function (handler) {
        // 1.初始化颜色
        var color = this.initializeColor();
        for (let i = 0; i < this.vertexes.length; i++) {
            var v = this.vertexes[i];
            this.dfsVisit(v, color, handler);
        }

    }

    // dfs的递归调用方法
    Graph.prototype.dfsVisit = function (u, color, handler) {
        // 2.处理u顶点
        if (handler) {
            handler(u)
            return;
        }

        var adj = this.adjList.get(u);
        for (let i = 0; i < adj.length; i++) {
            var a = adj[i];
            if (color[a] === 'white') {
                color[u] = "gray";
                this.dfsVisit(a, color, handler)
            }

        }

        color[u] = "black";
    }
}


// 测试代码
var graph = new Graph()

// 添加顶点
var myVertexes = ["A", "B", "C", "D", "E", "F", "G", "H", "I"]
for (var i = 0; i < myVertexes.length; i++) {
    graph.addVertex(myVertexes[i])
}

// 添加边
graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('A', 'D');
graph.addEdge('C', 'D');
graph.addEdge('C', 'G');
graph.addEdge('D', 'G');
graph.addEdge('D', 'H');
graph.addEdge('B', 'E');
graph.addEdge('B', 'F');
graph.addEdge('E', 'I');

// alert(graph)

// 调用广度优先算法
var result = ""
// graph.bfs(graph.vertexes[0], function (v) {
//     result += v + " "
// })

graph.dfs(function (v) {
    result += v + " "
})
alert(result) // A B C D E F G H I 