let tamaño, incluyeTocineta, incluyePavo, incluyeQueso, costoTotal

while(true){
tamaño = prompt("Ingresa el tamaño del sándwich (pequeño o grande)")

if (tamaño === "pequeño") {
    costoTotal = 6000
    incluyeTocineta = confirm("¿Deseas agregar tocineta? (Costo: $3000)")
    incluyeJalapeno = confirm("¿Deseas agregar jalapeño? (Gratis)")
    incluyePavo = confirm("¿Deseas agregar pavo? (Costo: $3000)")
    incluyeQueso = confirm("¿Deseas agregar queso? (Costo: $2500)")
    break
} else if (tamaño === "grande") {
    costoTotal = 12000
    incluyeTocineta = confirm("¿Deseas agregar tocineta? (Costo: $3000)")
    incluyeJalapeno = confirm("¿Deseas agregar jalapeño? (Gratis)")
    incluyePavo = confirm("¿Deseas agregar pavo? (Costo: $3000)")
    incluyeQueso = confirm("¿Deseas agregar queso? (Costo: $2500)")
    break
} else {
    alert("Tamaño no válido")
}

}
if (incluyeTocineta) {costoTotal += 3000}
if (incluyePavo) {costoTotal += 3000}
if (incluyeQueso) {costoTotal += 2500}
alert(`El costo total del sándwich es: $${costoTotal}`)
