function resultado() {
    let pitido = confirm("¿La computadora emite un pitido al iniciarse?")
    let discogira = confirm("¿El disco duro gira?")
if (pitido && discogira) {
        return alert("Póngase en contacto con el técnico de apoyo")
    } else if (pitido && !discogira) {
        return alert("Verificar contactos de la unidad")
    } else if (!pitido && !discogira) {
        return alert("Traiga la computadora para repararla en la central")
    } else if (!pitido && discogira) {
        return alert("Compruebe las conexiones de altavoces")
    }

}
resultado()
