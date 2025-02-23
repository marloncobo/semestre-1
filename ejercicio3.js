let tipoLavadora = Number(prompt("Ingresa el tipo de lavadora"))
let cantidad = Number(prompt("Ingresa la cantidad"))
let horas = Number(prompt("Ingresa el numero de horas"))

if (tipoLavadora<3){
let costoPorHora = tipoLavadora === 1 ? 4000 : 3000
let costoBase = costoPorHora * cantidad * horas
let descuento = cantidad > 3 ? 0.03 : 0
let Total = costoBase * (1 - descuento)
alert(`Costo total por alquilar ${cantidad} lavadoras tipo ${tipoLavadora} por ${horas} horas: $${Total}`);
}else{alert("error")}