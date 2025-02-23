let imprimir = Number(prompt("Número de copias"))
let preciocopia

if (imprimir>=0 && imprimir<=499){
    preciocopia=120
} else if (imprimir>=500 && imprimir<=749){
    preciocopia=100
}else if (imprimir>=750 && imprimir<=999){
    preciocopia=80
}else if (imprimir>=1000){
    preciocopia=50
}else {alert("Número no valido")
}
let total = preciocopia*imprimir
alert(`El precio por copia es ${preciocopia} y su valor total es ${total}`)