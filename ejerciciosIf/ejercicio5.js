let Física, Química, Biología, Matemáticas, Informática, materias
while (true){
    Física = Number(prompt("Física"))
    Química = Number(prompt("Química"))
    Biología = Number(prompt("Biología"))
    Matemáticas = Number(prompt("Matemáticas"))
    Informática = Number(prompt("Informática"))
    materias = Física+Química+Biología+Matemáticas+Informática
if (materias<=50 && materias>=0){
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
    break
}else {
    alert("error")
}} 