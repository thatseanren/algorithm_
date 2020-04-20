// const input = [1,11,3,0,15,5,2,4,10,7,12,6]
const input = [8, 4, 2, 10, 3, 6, 7, 9, 1, -1, 0, 11, 12, 13, 14, 15, 16, 17, 18, 19,5]
const largest_range = (input) => {
    var arr = []
    var current = {
        value: 0,
        range: [],
    }
    input.sort((a, b) => {
        return a - b
    })
    console.log(input)
    input.sort((b, a) => {
        if (a - b == -1) {
            console.log(`${a} - ${b} = ${a-b}`)
            if (arr.length == 0 || arr[arr.length - 1] == null) {
                arr.push(a)
            } else if (arr.length == 1 || arr[arr.length - 2] == null) {
                arr.push(b)
            } else {
                arr.pop()
                arr.push(b)
            }
        } else {
            arr.push(null)

        }

    })
    if (arr[arr.length - 1] !== null) {
        arr.push(null)
    }
    console.log(arr)
    for (var a = 0; a < arr.length; a++) {
        if (arr[a] == null) {
            if (arr[a - 1] - arr[a - 2] > current.value) {
                current.value = arr[a - 1] - arr[a - 2];
                current.range = [[arr[a - 2], arr[a - 1]]]
            }
        }
    }
    console.log(current)
}
largest_range(input)