let tipoLavadora
let cantidad
let horas

while (true){
tipoLavadora = Number(prompt("Ingresa el tipo de lavadora"))
    if (tipoLavadora<3 && tipoLavadora>0){
    break
}else{
    alert("error")
}
}

while (true){
cantidad = Number(prompt("Ingresa la cantidad"))    
    if (cantidad){       
    break
}else{
    alert("error")
}
}

while (true){
horas = Number(prompt("Ingresa las horas"))    
    if (horas>0){
        break
}else{
    alert("error")
}
}

let costoPorHora = tipoLavadora === 1 ? 4000 : 3000
let costoBase = costoPorHora * cantidad * horas
let descuento = cantidad > 3 ? 0.03 : 0
let Total = costoBase * (1 - descuento)
alert(`Costo total por alquilar ${cantidad} lavadoras tipo ${tipoLavadora} por ${horas} horas: $${Total}`)