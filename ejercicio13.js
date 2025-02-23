let operador = prompt("Ingresa el operador (claro, tigo, movistar)").toLowerCase();
let minInterCon = Number(prompt("Ingresa la cantidad de minutos internacionales consumidos"));

let cargoFijo = 0
let minInter = confirm("¿Quieres minutos internacionales?")
let paqueteDatos = confirm("¿Quieres un paquete de datos?")

switch (operador) {
    case "tigo":
        cargoFijo = 45000;
        if (minInter !== false){
            minInter = 200;
        }
        if (paqueteDatos !== false){
            paqueteDatos = 12000;
        }
        break;
    case "claro":
        cargoFijo = 30000;
        if (minInter !== false){
            minInter = 100;
        }
        if (paqueteDatos !== false){
            paqueteDatos = 18000;
        }
        break;
    case "movistar":
        cargoFijo = 40000;
        if (minInter !== false){
            minInter = 250;
        }
        if (paqueteDatos !== false){
            paqueteDatos = 8000;
        }
        break;
    default:
        alert("Operador no válido");

}
let costoTotal = cargoFijo + (minInter * minInterCon) + paqueteDatos;

if (cargoFijo !== 0) {
    alert(`El costo total del paquete es: $${costoTotal}`);
}