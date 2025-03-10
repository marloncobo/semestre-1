const palindromo = num => {
    if (!Number.isInteger(num)) 
        return "El argumento debe ser un número entero"

    const numString = Math.abs(num).toString()
    let numInvertido = ""

    for (let i = numString.length - 1; i >= 0; i--) {
        numInvertido += numString[i]
    }

    return numString === numInvertido
}
console.log(palindromo(121)) // true
console.log(palindromo(123)) // false