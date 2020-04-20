const input = [1, 2, 3, 4, 5, 6, 1]

const MoveElementToEnd = (input, item_index, position) => {

    const item_to_be_moved = input.splice(item_index, 1)
    console.log(item_to_be_moved)
    position = position > input.length ?
        input.length : position < 0 ? position + input.length : position
    console.log(position)
   input.splice(position, 0, item_to_be_moved[0])
    return input
}

console.log(MoveElementToEnd(input, 1, 4))