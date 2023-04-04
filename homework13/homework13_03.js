let arr = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47],
    max,
    index

max = Math.max(...arr)
index = arr.indexOf(max)

console.log(`
    The maximum array element: ${max}
    Sequence number: ${index + 1}
`)

// The maximum array element: 76
// Sequence number: 19 (if index: 18)
