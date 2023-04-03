let i,
    n = 80,
    result

for (i = 1; i <= 100; i++) {
    result = Math.pow(i, 2)

    if (result <= n) {
        console.log(i)
    }
}