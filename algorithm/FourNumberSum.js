const input = [1, 2222, 4321, 5, 43, 968, 625]

const Four_Sum = (input, sum) => {
    input.sort((a, b) => {
        return a - b
    })
    for (var a = 0; a < input.length - 3; a++) {
        for (var j = a + 1; j < input.length - 2; j++) {
            let left = j + 1;
            let right = input.length - 1;

            while (left < right) {
                let total = input[left] + input[right] + input[a] + input[j]
                if (total == sum) {
                    return console.log([input[left], input[right], input[a], input[j]])
                } else if (total < sum) {
                    left++
                } else{
                    right--
                }
            }
        }
    }
}



Four_Sum(input, 3858)