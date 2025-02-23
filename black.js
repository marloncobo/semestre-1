function obtenerCarta() {
    return Math.floor(Math.random() * 10) + 1
}

// Función para pedir una carta y actualizar el total del turno
function pedirCarta(turno) {
    let carta = obtenerCarta()
    turno.total += carta
    turno.cartas++
    alert(`Carta ${turno.cartas}: ${carta}. Total: ${turno.total}`)
}

alert("Bienvenido al Blackjack")

let usuario = {
    total: 0,
    cartas: 0
}

// Pedir hasta 3 cartas al usuario
for (let i = 0; i < 3; i++) {
    if (confirm("¿Quieres pedir una carta?")) {
        pedirCarta(usuario)
    } else {
        alert(`Te quedaste con un total de ${usuario.total}`)
        break
    }
}

alert(`Te quedaste con un total de ${usuario.total}`)

let maquina = {
    total: 0,
    cartas: 0
}

while (maquina.cartas < 3) {
    pedirCarta(maquina)
}

alert(`La maquina se queda con un total de ${maquina.total}`)

// Comparación de resultados
if (usuario.total > 21) {
    alert(`Te pasaste de 21 \n(total: ${usuario.total}). La maquina gana`)
} else if (maquina.total > 21) {
    alert(`La maquina se paso de 21 \n(total: ${maquina.total}). Ganaste`)
} else {
    if ((21 - usuario.total) < (21 - maquina.total)) {
        alert(`Ganaste \ntu total: ${usuario.total}, Maquina: ${maquina.total}`)
    } else if ((21 - usuario.total) > (21 - maquina.total)) {
        alert(`La maquina gana.\ntu total: ${usuario.total}, Maquina: ${maquina.total}`)
    } else {
        alert(`Empate. Ambos tienen ${usuario.total}`)
    }
}