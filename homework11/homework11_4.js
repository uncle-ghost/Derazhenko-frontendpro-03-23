let number = 4,
    total = 0

for (let i = 1; i <= number; i++) {
    if (number % i === 0) {
        total++
    }
}

if (total <= 2) {
    console.log(`Number '${number}' is a simple number`)
} else {
    console.log(`Number '${number}' is not a simple number`)
}