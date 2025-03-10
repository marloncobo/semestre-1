let genero, edad, ayuda

function ayudas(genero, edad){
    if (genero == "femenino") {
        if (edad > 50) {
            return ayuda = 120000
        } else if (edad >= 30 && edad <= 50) {
            return ayuda = 100000
        } else {
            return ayuda = 0
        }
    } else if (genero == "masculino") { 
        return ayuda = 40000
}}
function generos() {
    let genero = prompt("Ingrese su genero (femenino o masculino)")
    if (genero !== "femenino" && genero !== "masculino") {
        alert("Genero no valido")
        return generos()
    }
    return genero
}
function edades() {
    edad = prompt("Ingrese su edad:")
    if (isNaN(edad) || edad < 0) {
        alert("Ingresa un numero valido")
        return edades()
    }
    return edad
}

genero = generos()
edad = edades()
ayuda = ayudas(genero, edad)

alert(`El valor de ayuda mensual es: $${ayuda}`)