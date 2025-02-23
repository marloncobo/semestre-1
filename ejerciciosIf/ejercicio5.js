let Física = Number(prompt("Física"))
let Química = Number(prompt("Química"))
let Biología = Number(prompt("Biología"))
let Matemáticas = Number(prompt("Matemáticas"))
let Informática = Number(prompt("Informática"))
let materias = Física+Química+Biología+Matemáticas+Informática
if (materias>=0 && materias<=50){
    let porcentaje = (materias / 50) * 100 
    let calificacion
    if (porcentaje <= 59.9) {
        calificacion = "Mala"
    } else if (porcentaje <= 80) {
        calificacion = "Buena"
    } else {
        calificacion = "Excelente"
    }
    alert(`Tu porcentaje es ${porcentaje}% y tu calificación es ${calificacion}.`)
}else {
    alert("error")
}