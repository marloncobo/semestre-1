let tamaño = prompt("Ingresa el tamaño del sándwich (pequeño o grande)")
let incluyeTocineta = confirm("¿Deseas agregar tocineta? (Costo: $3000)")
let incluyeJalapeno = confirm("¿Deseas agregar jalapeño? (Gratis)")
let incluyePavo = confirm("¿Deseas agregar pavo? (Costo: $3000)")
let incluyeQueso = confirm("¿Deseas agregar queso? (Costo: $2500)")

let costoBase
if (tamaño === "pequeño") {
    costoBase = 6000
} else if (tamaño === "grande") {
    costoBase = 12000
} else {
    alert("Tamaño no válido")
    costoBase = 0
}
let costoTotal = costoBase
if (incluyeTocineta) costoTotal += 3000
if (incluyePavo) costoTotal += 3000
if (incluyeQueso) costoTotal += 2500

if (costoBase !== 0) {
    alert(`El costo total del sándwich es: $${costoTotal}`)
}
