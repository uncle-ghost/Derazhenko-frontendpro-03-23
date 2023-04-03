let number = 124,
    arr = [],
    total = 0,
    count = 0

for (let i = 1; i <= number; i++) {
    if (number % i === 0) {
        arr.push(i)

        if (i % 2 === 0) {
            total += i
            count++
        }
    }
}

console.log(`
    ${arr.join()}
    Number of even divisors: ${count}
    Sum of even divisors: ${total}
`)