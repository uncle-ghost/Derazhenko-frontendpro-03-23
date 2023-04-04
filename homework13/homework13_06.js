let arr = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47],
    count = 0

arr.forEach(i => {
    if (i % 2 === 0 && i > 0) {
        count++
    }
})

console.log(`The number of even positive elements: ${count}`)

// The number of even positive elements: 10
