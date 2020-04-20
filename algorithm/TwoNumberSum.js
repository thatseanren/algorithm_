const input = [1, 2, 3, 4, 5, 098765, 43213]

const Two_Sum = (input, sum) => {
    input.sort((a, n) => {
        return a -n
    })
    let left = 0;
    let right = input.length - 1;
    while (left < right) {
        if (input[left] + input[right] == sum) {
            return console.log([input[left],input[right]])
        } else if (input[left] + input[right] < sum) {
            left ++
        } else {
            right -- 
        }
    }
}
Two_Sum(input,141978)