let genero = prompt("femenino o masculino")
let edad = prompt("Edad")
let ayuda;

if (genero === "femenino") {
    if (edad > 50) {
        ayuda = 120000
    } else if (edad >= 30 && edad <= 50) {
        ayuda = 100000
    } else {
        ayuda = 0
    }
} else if (genero === "masculino") {
    ayuda = 40000
} else {
    ayuda = 0
}
alert(`El valor de ayuda mensual es: $${ayuda}`)