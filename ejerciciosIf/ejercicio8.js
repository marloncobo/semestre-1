let mensualidad
while (true){
mensualidad = Number(prompt("Número de dias"))
if (mensualidad== 15){
    alert("El valor de la mensualidad es de 18000")
    break
} else if (mensualidad == 30){
    alert("El valor de la mensualidad es de 35000")
    break
} else if (mensualidad == 90){
    alert("El valor de la mensualidad es de 86000")
    break
} else {
    alert("ingrese un número valido")
}    
}
