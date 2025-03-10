function obtenerCarta() {
    return Math.floor(Math.random() * 10) + 1;
}

function mostrarCartas(cartasJugador, cartasMaquina) {
    alert(`Tus cartas son ${cartasJugador.join(', ')}. Llevas un total de ${sumarCartas(cartasJugador)} \nLas cartas de la maquina son ${cartasMaquina.join(', ')}. Lleva un total de ${sumarCartas(cartasMaquina)}`);
}

function sumarCartas(cartas) {
    return cartas.reduce((a, b) => a + b, 0);
}

function determinarGanador(sumaJugador, sumaMaquina) {
    if (sumaJugador == sumaMaquina) {
        alert("Empate");
    } else if (sumaJugador > 21) {
        alert(`Te pasaste. Gana la maquina con ${sumaMaquina}, perdiste con ${sumaJugador}`);
    } else if (sumaMaquina > 21) {
        alert(`Ganaste con ${sumaJugador}. La maquina se paso con ${sumaMaquina}`);
    } else {
        if (sumaJugador > sumaMaquina) {
            alert(`Ganaste con ${sumaJugador}, la maquina perdio con ${sumaMaquina}`);
        } else {
            alert(`Gana la maquina con ${sumaMaquina}, perdiste con ${sumaJugador}`);
        }
    }
}

let inicio = prompt("¿Quieres jugar? (si/no)");
if (inicio.toLowerCase() === "si") {
    let cartasJugador = [obtenerCarta()];
    let cartasMaquina = [obtenerCarta()];
    alert(`Tu carta es ${cartasJugador[0]} \nLa primera carta de la maquina es ${cartasMaquina[0]}`);

    for (let i = 1; i <= 3; i++) {
        if (confirm("¿Quieres pedir otra carta?")) {
            cartasJugador.push(obtenerCarta());
            cartasMaquina.push(obtenerCarta());
            mostrarCartas(cartasJugador, cartasMaquina);
        } else {
            break;
        }
    }

    let sumaJugador = sumarCartas(cartasJugador);
    let sumaMaquina = sumarCartas(cartasMaquina);
    determinarGanador(sumaJugador, sumaMaquina);
}