let tipoLavadora, cantidad, horas, costoBase, costoPorHora

function calcularCostoPorHora(tipoLavadora) {
    return tipoLavadora === 1 ? 4000 : 3000
}

function calcularDescuento(cantidad, costoPorHora, horas) {
    if (cantidad >= 3) {
        return (costoPorHora * cantidad * horas) * 0.03
    } else {
        return 0
    }
}

function calcularCostoTotal(cantidad, horas, costoPorHora) {
    let costoBase = costoPorHora * cantidad * horas
    return costoBase - calcularDescuento(cantidad, costoPorHora, horas)
}

tipoLavadora = Number(prompt("Ingresa el tipo de lavadora \n1(grande), 2(pequeña)"))
cantidad = Number(prompt("Ingresa la cantidad"))
horas = Number(prompt("Ingresa las horas"))
costoPorHora = calcularCostoPorHora(tipoLavadora)

let costoTotal = calcularCostoTotal(cantidad, horas, costoPorHora)

alert(`Costo total por alquilar ${cantidad} lavadoras tipo ${tipoLavadora} por ${horas} horas: $${costoTotal}`)