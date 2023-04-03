let num1 = 1,
    num2 = 1,
    mult

for (num1; num2 <= 10; num1++) {
    mult = num2 * num1
    console.log(`${num2} * ${num1} = ${mult}`)

    if (num1 === 10) {
        num2++
        num1 = 0
    }
}
