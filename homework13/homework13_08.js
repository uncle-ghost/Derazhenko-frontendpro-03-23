let arr = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47],
    total = 0

arr.forEach(i => {
    if (i % 2 !== 0 && i > 0) {
        total += i
    }
})

console.log(`
    Sum of odd positive elements: ${total}
`)

// Sum of odd positive elements: 146


