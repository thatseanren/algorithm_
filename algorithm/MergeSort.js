const input = [1, 23, 4, 5, 64, 3, 212, 0]

const Recursion = (input, left, right ) => {
    if (right > left ) {
        // Index of middle element that DEVIDE the array into two subarray
        let middle = left  +  Math.floor((right - left) / 2)

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
    while (i < left_arr.length && j < right_arr.length){
        if (left_arr[i] < right_arr[j]){
            arr[k] = left_arr[i];
            i++;  
        }else{
            arr[k] = right_arr[j] ;
            j++
        }
        k++;
    }
    while (j < right_arr.length) {      
            arr[k] = right_arr[j]
            j++;
            k++;
    }
    while (i < left_arr.length){     
            arr[k] = left_arr[i];
            i++;
            k++;
    }

}
Recursion(input, 0, input.length - 1)
console.log(input)