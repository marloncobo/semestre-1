function hojas(){
    let imprimir = prompt("Número de copias")
    if (imprimir>=0 && imprimir<=499){
        return {precio: 120, imprimir}
    } else if (imprimir>=500 && imprimir<=749){
        return {precio : 100, imprimir}
    }else if (imprimir>=750 && imprimir<=999){
        return {precio:80, imprimir}
    }else if (imprimir>=1000){
        return {precio: 50, imprimir}
    }else {
        alert("Número no valido")
        return hojas()
    }
}
function resultado(){
    let datos = hojas()
    let total = datos.imprimir*datos.precio
    alert(`El precio por copia es ${datos.precio} y su valor total es ${total}`)
}

resultado()