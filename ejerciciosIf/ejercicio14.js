let tamaño, incluyeTocineta, incluyePavo, incluyeQueso, incluyeJalapeno, costoTotal
tamaño = prompt("Ingresa el tamaño del sándwich (pequeño o grande)")

function obtenerIngredientes() {
    return {
        incluyeTocineta: confirm("¿Deseas agregar tocineta? (Costo: $3000)"),
        incluyeJalapeno: confirm("¿Deseas agregar jalapeño? (Gratis)"),
        incluyePavo: confirm("¿Deseas agregar pavo? (Costo: $3000)"),
        incluyeQueso: confirm("¿Deseas agregar queso? (Costo: $2500)")
    }
}

function calcularCostoBase(tamaño) {
    switch (tamaño) {
        case "pequeño":
            return 6000
        case "grande":
            return 12000
        default:
            alert("Tamaño no válido")
            return 0
    }
}

function calcularCostoTotal(costoBase, ingredientes) {
    let costoTotal = costoBase
    if (ingredientes.incluyeTocineta) {
        costoTotal += 3000 }
    if (ingredientes.incluyePavo) {
        costoTotal += 3000 }
    if (ingredientes.incluyeQueso) {
        costoTotal += 2500 }
    return costoTotal
}

function mostrarCostoTotal(costoTotal) {
    if (costoTotal > 0) {
        alert(`El costo total del sándwich es: $${costoTotal}`)
    }
}

costoTotal = calcularCostoBase(tamaño)
let ingredientes = obtenerIngredientes()
costoTotal = calcularCostoTotal(costoTotal, ingredientes)
mostrarCostoTotal(costoTotal)