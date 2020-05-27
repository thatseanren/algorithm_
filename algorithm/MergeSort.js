const input = [1, 23, 4, 5, 64, 3, 212, 0]

const Recursion = (input, left, right) => {
    if (right > left) {
        // Index of middle element that DEVIDE the array into two subarray
        let middle = left + Math.floor((right - left) / 2)

        Recursion(input, left, middle)
        Recursion(input, middle + 1, right)
        Compare_Merge(input, left, middle, right)
    }
}
const Compare_Merge = (arr, left, middle, right) => {
    let left_arr = [], right_arr = [];
    for (let i = 0; i <= middle - left; i++) {
        left_arr[i] = arr[i + left]
    }
    for (let i = 0; i < right - middle; i++) {
        right_arr[i] = arr[i + middle + 1]
    }
    let i, j, k;
    i = 0; j = 0; k = left;
    while (i < left_arr.length && j < right_arr.length) {
        if (left_arr[i] < right_arr[j]) {
            arr[k] = left_arr[i];
            i++;
        } else {
            arr[k] = right_arr[j];
            j++
        }
        k++;
    }
    while (j < right_arr.length) {
        arr[k] = right_arr[j]
        j++;
        k++;
    }
    while (i < left_arr.length) {
        arr[k] = left_arr[i];
        i++;
        k++;
    }

}
const Ensuring_array_is_sorted = (array, left, right) => {
    var sorted = true
    var arr = array.slice(left, right + 1)
    try {
        arr.sort((a, b) => { if (b > a) { _switch = false; return undefined } })
    } catch{
        error();
    }
    if (sorted) {
        return
    } else {
        sort(arr, left, right);
    }
}
const sort = (array, left, right) => {
    var divide_index = Math.floor((right - left) / 2);
    Ensuring_array_is_sorted(array, left, divide_index)
    Ensuring_array_is_sorted(array, divide_index + 1, right)
    Compare_Merge(array, left, divide_index, right)
}
Ensuring_array_is_sorted(input, 0, 7)
console.log(input)
//const input = [1, 23, 4, 5, 64, 3, 212, 0]

const Naive = (input) => {
    var count = 0;
    for (var i = 0; i < input.length - 1; i++) {
        for (var j = i + 1; j < input.length; j++) {
            if (input[i] > input[j]) {
                count++
            }
        }
    }
}
const fintSum = (input,left,right,sum)=>{
    if(right > left){
        var mid = Math.floor((right - left) / 2)
        fintSum(input, left, mid, sum);
        fintSum(input, mid+ 1, right, sum);
        fintSum_Compare(input,left,mid,right,sum)
    }
}
const fintSum_Compare = (input, left, mid, right, sum)=>{
    var l =left,r = mid + 1;
    for (var i = 0; i < ; i++){

    }
}