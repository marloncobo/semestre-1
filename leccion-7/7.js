const contarVocales = str => {
  str = str.toLowerCase()

  let vocales = 0
    for (let i = 0; i < str.length; i++) {
        if (str[i] == "a" || str[i] == "e" || str[i] == "i" || str[i] == "o" || str[i] == "u") {
        vocales++
        }
    }
    return vocales
}
console.log(contarVocales("Hola Mundo")) // 4
console.log(contarVocales("JavaScript")) // 3