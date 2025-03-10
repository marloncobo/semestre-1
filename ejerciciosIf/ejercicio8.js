let mensualidad
function mensualidades(){
    mensualidad = Number(prompt("Número de dias (15, 30, 90)"))
    switch(mensualidad){
        case 15:
        alert("El valor de la mensualidad es de 18000")
        return
        case 30:
        alert("El valor de la mensualidad es de 35000")
        return
        case 90:
        alert("El valor de la mensualidad es de 86000")
        return
        default:
        alert("ingrese un número valido")
        return mensualidades()
    }
}

mensualidades()