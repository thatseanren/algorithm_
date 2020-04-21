const input = [2,3,4,5,6,7,8]

const Brute_force = input => {
    var length = input.length;
    for (var i = 0; i < length - 1; i++) {
        for (var j = i + 1; j < length; j++) {
            var max = input[i];
            var min = input[i];
            var subarray = []
            for (var z = i; z < i + j + 1; z++) {
                max = input[z] > max ? input[z] : max
                min = input[z] < min ? input[z] : min
                subarray.push(input[z])
            }
            //var max = Math.max((...))
            var left_arr = input.slice(0, i);
            var right_arr = input.slice(j + 1, length)
            var sorted = true;
            left_arr.sort((a, b) => {
                if (a - b !== 0) { sorted = false }
            })
            right_arr.sort((a, b) => {
                if (a - b !== 0) { sorted = false }
            })
            if (sorted && Math.max(...left_arr) < min && Math.min(...right_arr) > max) {
                if (left_arr.length == 0 && Math.min(...input) == subarray[0]) {
                    subarray.shift();
                    console.log(subarray)
                    return j - i
                }
                console.log(subarray)
                return j - i + 1
            }

        }
    }
}
const Better_Brute_Force = input => {
    var length = input.length
    var result = []
    for (var a = 0; a < length - 1; a++) {
        for (var b = a + 1; b < length; b++) {
            if (input[a] >= input[b]) {
                //a,b are unsorted
                result.push(a);
                result.push(b);
            }
        }
    }
    var max = Math.max(...result);
    var min = Math.min(...result);
    if (result.length === 0) {
        console.log("Array is sorted")
    } else {
        console.log(`Length of smallest unsorted array is ${max - min + 1}`)
    }
}

console.log(Brute_force(input))
console.log(Better_Brute_Force(input))