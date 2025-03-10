const sumaDivisores = (num) => {
    if (!Number.isInteger(num)) {
        return 'Error'
    }
    num = Math.abs(num)
    let suma = 0
    for (let i = 1; i < num; i++) {
        if (num % i === 0) {
        suma += i
        }
    }
    return suma
}
console.log(sumaDivisores(10)) // 8
console.log(sumaDivisores(20)) // 22