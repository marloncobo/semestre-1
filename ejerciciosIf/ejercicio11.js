while (true){
let pitido = confirm("¿La computadora emite un pitido al iniciarse?")
let discogira = confirm("¿El disco duro gira?")

if (pitido && discogira) {
    alert("Póngase en contacto con el técnico de apoyo")
    break
} else if (pitido && !discogira) {
    alert("Verificar contactos de la unidad")
    break
} else if (!pitido && !discogira) {
    alert("Traiga la computadora para repararla en la central")
    break
} else if (!pitido && discogira) {
    alert("Compruebe las conexiones de altavoces")
    break
}
}