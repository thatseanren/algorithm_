var input = [4, 5, 1, 2, 5, 3421, 123, 41]
//[0, 1, 2, 3,  4, 5, 6, 7, 8]
function between(min, max) {
    return Math.floor(
        Math.random() * (max - min) + min
    )
}
function DivideandConquer(input, left_index, right_index) {
    if ( right_index - left_index > 1) {
        const DivideIndex = between(left_index, right_index)
        DivideIndex == 0 ? between(0, input.length - 1) : DivideIndex
        DivideandConquer(input, left_index, DivideIndex)
        DivideandConquer(input, DivideIndex + 1, right_index)
        merge(input, left_index, right_index, DivideIndex)
    }
}
//0,          3            1
function merge(input, left_index, right_index, DivideIndex) {
    var left = [];
    var right = [];
    for (var i = 0; i <= DivideIndex; i++) {
        left.push(input[i])
    }
    for (var i = DivideIndex + 1; i <= right_index; i++) {
        right.push(input[i])
    }
    var l = 0, r = 0;
    for (var k = left_index; k <= right_index; k++) {
        if (left[l] > right[r]) {
            input[k] = right[r];
            r++;
        } else if (left[l] <= right[r]) {
            input[k] = left[l];
            l++;
        }else if(left[l] == undefined){
            input[k] = right[r]
            r++
        }else if(right[r] == undefined){
            input[k] = left[l]
            l++
        }
    }
}
// DivideandConquer(input, 0,7)
console.log(input)

