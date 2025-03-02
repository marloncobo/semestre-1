let genero, edad, ayuda

while(true){
genero = prompt("femenino o masculino")
edad = prompt("Edad")

if (genero == "femenino") {
    if (edad > 50) {
        ayuda = 120000
    } else if (edad >= 30 && edad <= 50) {
        ayuda = 100000
    } else {
        ayuda = 0
    }
    break
} else if (genero == "masculino") {
    ayuda = 40000
    break
} else {
    alert("error")
}}
alert(`El valor de ayuda mensual es: $${ayuda}`)