let pitido = confirm("¿La computadora emite un pitido al iniciarse?");
let discogira = confirm("¿El disco duro gira?");

if (pitido && discogira) {
    alert("Póngase en contacto con el técnico de apoyo");
} else if (pitido && !discogira) {
    alert("Verificar contactos de la unidad");
} else if (!pitido && !discogira) {
    alert("Traiga la computadora para repararla en la central");
} else if (!pitido && discogira) {
    alert("Compruebe las conexiones de altavoces");
} else {
    alert("Estado no reconocido");
}
