const input = [3, 8, -10, 23, 19, -4, -14, 27];

const min_absolute_difference = (input) => {
    const record_pair = []
    var record_difference = null
    var result =[]
    input.sort((a, b) => {
        return a - b
    })
    input.sort((a, b) => {
        if (record_difference === null) {
            record_difference = Math.abs(a - b);
            result.push([a, b]);
            console.log(`record_difference is null set to ${record_difference}`)
        } else {
            if (record_difference > Math.abs(a - b)) {
                record_difference = Math.abs(a - b);
                result = [];
                result.push([a, b])
                console.log(`record_difference is set to ${record_difference}`)
            } else if (record_difference == Math.abs(a - b)) {
                result.push([a,b])
            } else {
                
            }
        };

    })
    return result

}
console.log(min_absolute_difference(input))