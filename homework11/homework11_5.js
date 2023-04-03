let number = 3,
    arr = [],
    result,
    total = 0

for (let i = 1; i <= number; i++) {
    result = Math.pow(3, i)
    arr.push(result)
}

arr.forEach(i => {
    if (i === number) {
        total++
    }
})

if (total >= 1) {
    console.log('We can')
} else {
    console.log('We can not')
}