let arr = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47],
    count = 0,
    total = 0

arr.forEach(i => {
    if (i > 0) {
        total += i
        count++
    }
})

console.log(`
    Sum of positive elements: ${total}
    The number of positive elements: ${count}
`)

// Sum of positive elements: 438
// The number of positive elements: 14
