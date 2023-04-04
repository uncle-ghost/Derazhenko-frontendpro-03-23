let arr = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47],
    maxNum,
    index

maxNum = Math.max(...arr)
index = arr.indexOf(maxNum)

arr.fill(0)
arr[index] = maxNum

console.log(arr)

// [
//     0, 0,  0, 0, 0, 0, 0, 0,
//     0, 0,  0, 0, 0, 0, 0, 0,
//     0, 0, 76, 0, 0, 0, 0, 0
// ]


// Якщо під "обнулити" малося на увазі - видалити:

arr.length = 0
arr.push(maxNum)

console.log(arr)

// [ 76 ]
