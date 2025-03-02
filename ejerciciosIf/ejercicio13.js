let operador, minInter, paqueteDatos
let minInterCon = Number(prompt("Ingresa la cantidad de minutos internacionales consumidos"));
let cargoFijo = 0

while (true){
operador = prompt("Ingresa el operador (claro, tigo, movistar)")
minInter = confirm("¿Quieres minutos internacionales?")
paqueteDatos = confirm("¿Quieres un paquete de datos?")
if (operador="tigo") {
    cargoFijo = 45000
    if (minInter !== false){
        minInter = 200
    }
    if (paqueteDatos !== false){
       paqueteDatos = 12000
    }break
}else if (operador="claro"){
    cargoFijo = 30000
    if (minInter !== false){
        minInter = 100
    }
    if (paqueteDatos !== false){
        paqueteDatos = 18000;
    }break
}else if (operador=="movistar"){
    cargoFijo = 40000
    if (minInter !== false){
        minInter = 250
    }
    if (paqueteDatos !== false){
        paqueteDatos = 8000
    }break;
}else {
    alert("Operador no válido")
}
}
let costoTotal = cargoFijo + (minInter * minInterCon) + paqueteDatos;

alert(`El costo total del paquete es: $${costoTotal}`)