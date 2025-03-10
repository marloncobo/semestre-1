let operador, minInter, paqueteDatos
let minInterCon = Number(prompt("Ingresa la cantidad de minutos internacionales consumidos"))
let cargoFijo = 0

function calcularCargoFijo(operador) {
    switch (operador) {
        case "tigo":
            return 45000
        case "claro":
            return 30000
        case "movistar":
            return 40000
        default:
            alert("Operador no válido")
            return 0
    }
}

function calcularCostoMinInter(operador, minInter) {
    if (minInter) {
        switch (operador) {
            case "tigo":
                return 200
            case "claro":
                return 100
            case "movistar":
                return 250
            default:
                return 0
        }
    }
    return 0
}

function calcularCostoPaqueteDatos(operador, paqueteDatos) {
    if (paqueteDatos) {
        switch (operador) {
            case "tigo":
                return 12000
            case "claro":
                return 18000
            case "movistar":
                return 8000
            default:
                return 0
        }
    }
    return 0
}

while (true) {
    operador = prompt("Ingresa el operador (claro, tigo, movistar)")
    minInter = confirm("¿Quieres minutos internacionales?")
    paqueteDatos = confirm("¿Quieres un paquete de datos?")
    cargoFijo = calcularCargoFijo(operador)
    if (cargoFijo > 0) break
}

let costoMinInter = calcularCostoMinInter(operador, minInter)
let costoPaqueteDatos = calcularCostoPaqueteDatos(operador, paqueteDatos)
let costoTotal = cargoFijo + (costoMinInter * minInterCon) + costoPaqueteDatos

alert(`El costo total del paquete es: $${costoTotal}`)