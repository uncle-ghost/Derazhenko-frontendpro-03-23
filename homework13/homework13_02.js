let arr = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47],
    min,
    index

min = Math.min(...arr)
index = arr.indexOf(min)

console.log(`
    The minimum array element: ${min}
    Sequence number: ${index + 1}
`)

// The minimum array element: -63
// Sequence number: 16 (if index: 15)
