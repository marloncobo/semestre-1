function mostrar(){
let numeromodelo = Number(prompt("Ingresa el número de modelo de tu carro"))
let modelosDefectuosos = [119, 179, 189, 195, 221, 780]

if (modelosDefectuosos.includes(numeromodelo)){
    return alert("El automóvil está defectuoso, llevar a garantía")
} else {
    return alert("Su automóvil no está defectuoso")
}}
mostrar()