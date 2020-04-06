const chalk = require('chalk')

const input = [1, 2222, 4321, 5, 43, 968]

function Three_Sum(arr, sum) {
    console.log(chalk.red(`\n${'Sorting...'} `) + `${arr} \n`)
    const input = arr.sort(function(a, b) {
        return a - b;
      });
    console.log (input)
    var result = []
    for (var i = 0; i < input.length; i++){
        let first = i;
        let second = i + 1;
        let third = input.length - 1;
        while (second < third) {
            if (input[first] + input[second] + input[third] === sum) {
                result.push([input[first], input[second], input[third]]);
                second++;
                third--
            } else if (input[first] + input[second] + input[third]  > sum) {
                third--
            } else {
                second++;
            }   
        }
    }
    console.log(`\n`)
    console.log(result)
}
Three_Sum(input,3233)