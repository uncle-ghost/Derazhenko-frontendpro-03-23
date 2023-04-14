let arr = [],
    number = 0

function addToArr(array, element, value) {
    index = element - 1

    for(let i = 0; i <= index; i++) {
        array.push([])
    }
    array[index].push(value)

    if (element > number) {
        number = element
    }
    array.length = number
}

addToArr(arr, 3, 5)
addToArr(arr, 3, 8)
addToArr(arr, 1, 4)
addToArr(arr, 2, 3)
addToArr(arr, 5, 8)
addToArr(arr, 4, 11)

console.log(arr)


//  [ [ 4 ], [ 3 ], [ 5, 8 ], [ 11 ], [ 8 ] ]
