// keywords: Breadth-First-Search
{
    "input: "

    "output:"
}
const chalk = require('chalk')
let matrix = [
    [0, 0, 1, 1, 0],
    [1, 1, 1, 0, 0],
    [1, 0, 0, 0, 0],
    [0, 1, 1, 1, 0],
    [1, 0, 0, 0, 1]
]
function RiverSize_Entry(matrix) {
    const output = [];
    const record = matrix.map(i => i.map(j => false));
    console.log(chalk.red(typeof record))
    for (var i = 0; i < matrix.length; i++) {
        for (var j = 0; j < matrix[i].length; j++) {
            if (record[i][j]) { continue };
            if (matrix[i][j] === 0) {
                record[i][j] = true;
                continue;
            } else {
                record[i][j] = true;
                RiverSize_BFS(i, j, matrix, record, output)
            }
        }
    }
    return output
}

function RiverSize_BFS(i, j, matrix, record, output) {
    var queue = [];
    var river_length = 1;
    queue.push([i, j])
    while (queue.length > 0) {
        var currentNode = queue.shift()
        let index = currentNode[0];
        let index_ = currentNode[1];
        let above = index == 0 ? null : matrix[index - 1][index_]
        let below = index == matrix.length - 1 ? null : matrix[index + 1][index_]
        let left = index_ == 0 ? null : matrix[index][index_ - 1]
        let right = index_ == matrix[index].length - 1 ? null : matrix[index][index_ + 1]
        if (above !== null && record[index - 1][index_] !== true) {
            if (above) {
                river_length++;
                record[index - 1][index_] = true
                queue.push([index - 1, index_])
            } else if (above === 0) {
                record[index - 1][index_] = true
            }
        }
        if (below !== null && record[index + 1][index_] !== true) {
            if (below) {
                river_length++;
                record[index + 1][index_] = true
                queue.push([index + 1, index_])
            } else if (below === 0) {
                record[index + 1][index_] = true
            }
        }
        if (left !== null && record[index][index_ - 1] !== true) {
            if (left) {
                river_length++;
                record[index][index_ - 1] = true;
                queue.push([index, index_ - 1])
            } else if (left === 0) {
                record[index][index_ - 1] = true;
            }
        }
        if (right !== null && record[index][index_ + 1] !== true) {
            if (right) {
                river_length++;
                record[index][index_ + 1] = true
                queue.push([index, index_ + 1])
            } else if (right === 0) {
                record[index][index_ + 1] = true
            }
        }

    }
    output.push(river_length)
}
console.log(`${chalk.red(RiverSize_Entry(matrix))}`)