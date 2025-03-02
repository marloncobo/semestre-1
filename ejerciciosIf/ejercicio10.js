let imprimir, preciocopia
while (true){
imprimir = Number(prompt("Número de copias"))

if (imprimir>=0 && imprimir<=499){
    preciocopia=120
    break
} else if (imprimir>=500 && imprimir<=749){
    preciocopia=100
    break
}else if (imprimir>=750 && imprimir<=999){
    preciocopia=80
    break
}else if (imprimir>=1000){
    preciocopia=50
    break
}else {alert("Número no valido")
}}
let total = preciocopia*imprimir
alert(`El precio por copia es ${preciocopia} y su valor total es ${total}`)