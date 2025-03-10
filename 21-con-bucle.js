let inicio = prompt("¿Quieres jugar? (si/no)")
if (inicio === "si") {
    let cartasJugador = [Math.floor(Math.random() * 10) + 1]
    let cartasMaquina = [Math.floor(Math.random() * 10) + 1]
    alert(`Tu carta es ${cartasJugador[0]} \nLa primera carta de la maquina es ${cartasMaquina[0]}`)

    for (let i = 1; i <= 2; i++) {
        if (confirm("¿Quieres pedir otra carta?")) {
            cartasJugador.push(Math.floor(Math.random() * 10) + 1)
            cartasMaquina.push(Math.floor(Math.random() * 10) + 1)
            alert(`Tus cartas son ${cartasJugador.join(', ')}. Llevas un total de ${cartasJugador.reduce((a, b) => a + b, 0)} \nLas cartas de la maquina son ${cartasMaquina.join(', ')}. Lleva un total de ${cartasMaquina.reduce((a, b) => a + b, 0)}`)
        } else {
            break
        }
    }

    let sumaJugador = cartasJugador.reduce((a, b) => a + b, 0)
    let sumaMaquina = cartasMaquina.reduce((a, b) => a + b, 0)
    if (sumaJugador == sumaMaquina) {
        alert("Empate")
    } else if (sumaJugador > 21) {
        alert(`Te pasaste. Gana la maquina con ${sumaMaquina}, perdiste con ${sumaJugador}`)
    } else if (sumaMaquina > 21) {
        alert(`Ganaste con ${sumaJugador}. La maquina se paso con ${sumaMaquina}`)
    } else {
        if (sumaJugador > sumaMaquina) {
            alert(`Ganaste con ${sumaJugador}, la maquina perdio con ${sumaMaquina}`)
        } else {
            alert(`Gana la maquina con ${sumaMaquina}, perdiste con ${sumaJugador}`)
        }
    }
}