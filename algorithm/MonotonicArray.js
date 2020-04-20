const input = [1, 1, 1, 1, 1, 1, 1]

const MonotonicArray = (input) => {
    var result = true
    var trend = null;
    input.sort((a, b) => {
        if (!trend) {
            trend = a - b > 0 ? 'increasing' : a - b < 0 ? 'decreasing' : null
        } else if (trend === 'increasing' && a - b < 0) {
            result = false
        } else if (trend === 'decreasing' && a - b > 0) {
            result = false
        }
    })
    if (trend === null) { result = false }
    return result
}

console.log(MonotonicArray(input))