const sumaDigitos = (numero) => {
    const numString = Math.abs(numero).toString()
    let suma = 0
    for (let i = 0; i < numString.length; i++) {
        suma += parseInt(numString[i])
    }
    return suma
}
console.log(sumaDigitos(1234)) // 10
console.log(sumaDigitos(-1234)) // 10