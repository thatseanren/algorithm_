// [i, i + 1, ...n] 
            //[1,4,5,]
var input = [4, 5, 1, 2, 5, 3421, 123, 41]

var sorted = []
sorted[0] = input[0]
while (sorted.length < input.length) {
    var start = sorted.length ;
    var index_ = sorted.length - 1;
    compare(index_, start)

}
function compare(index_, start) {
    if (sorted[index_] <= input[start]) {
        sorted.splice(index_ + 1, 0, input[start])
    } else {
        if (index_ > 0) {
            compare(index_ - 1, start)
        } else {
            sorted.splice(index_, 0, input[start])
        }
    }
}

console.log(sorted)