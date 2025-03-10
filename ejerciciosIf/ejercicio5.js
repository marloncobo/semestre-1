let Física, Química, Biología, Matemáticas, Informática
let materias 
let porcentaje
let calificacion

function porcent(){
    return (materias / 50) * 100
}
function cacularCalificacion(){
    if (porcentaje <= 59.9) {
        return "Mala"
    } else if (porcentaje <= 80) {
        return "Buena"
    } else {
        return "Excelente"
    }
}

while (true){
    Física = Number(prompt("Física"))
    Química = Number(prompt("Química"))
    Biología = Number(prompt("Biología"))
    Matemáticas = Number(prompt("Matemáticas"))
    Informática = Number(prompt("Informática")) 
    materias = Física+Química+Biología+Matemáticas+Informática
    porcentaje = porcent()
    calificacion = cacularCalificacion()
    if (materias<=50 && materias>=0){
    alert(`Tu porcentaje es ${porcentaje}% y tu calificación es ${calificacion}.`)
    break
    }else {
    alert("error")
}} 