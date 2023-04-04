let arr = [2, 7, 12, 25, 4, 3, 22, 44, 33, 100, 1]

function compareFunc(a, b) {
    return a - b;
}

console.log(arr.sort(compareFunc))

arr.splice(1, 3)

console.log(arr)

// [
//     1,  2,  3,  4,  7,
//     12, 22, 25, 33, 44,
//     100
// ]
// [
//     1,  7, 12,  22,
//     25, 33, 44, 100
// ]
