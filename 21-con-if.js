let inicio = prompt("¿Quieres jugar?")
let carta,carta2,carta3,suma,sumaM,cartaM,cartaM2,cartaM3

if (inicio=="si"){
    carta = Math.floor(Math.random()*10) + 1
    cartaM = Math.floor(Math.random()*10) + 1
    alert(`Tu carta es ${carta} \nLa primera carta de la maquina es ${cartaM}`)
    
    inicio = confirm("¿Quieres pedir otra carta?")
    if (inicio){
        carta2 = Math.floor(Math.random()*10) + 1
        cartaM2 = Math.floor(Math.random()*10) + 1
        alert(`Tu segunda carta es ${carta2} \nLa segunda carta de la maquina es ${cartaM2}`)
        suma = carta + carta2
        sumaM = cartaM + cartaM2
        alert(`Tus cartas son ${carta}, ${carta2}. Llevas un total de ${suma} \nLas cartas de la maquina son ${cartaM}, ${cartaM2}. Lleva un total de ${sumaM}`)
        
        inicio = confirm("¿Quieres pedir otra carta?")
            if (inicio){
                carta3 = Math.floor(Math.random()*10) + 1
                cartaM3 = Math.floor(Math.random()*10) + 1
                alert(`Tu tercera carta es ${carta3} \nLa tercera carta de la maquina es ${cartaM3}`)
                suma = carta + carta2 + carta3
                sumaM = cartaM + cartaM2 + cartaM3
                alert(`Tus cartas son ${carta}, ${carta2}, ${carta3}. Llevas un total de ${suma} \nLas cartas de la maquina son ${cartaM}, ${cartaM2}, ${cartaM3}. Lleva un total de ${sumaM}`)

                if (carta3 == cartaM3){
                    alert("Empate")
                }else if(suma > 21){
                    alert(`Te pasaste. Gana la maquina con ${sumaM}, perdiste con ${suma}`)
                }else if(sumaM > 21){
                    alert(`Ganaste con ${suma}. La maquina se paso con ${sumaM}`)
                }else{
                    if (carta3 > cartaM3){
                    alert(`Ganaste con ${suma}, la maquina perdio con ${sumaM}`)
                    } else {
                        alert(`Gana la maquina con ${sumaM}, perdiste con ${suma}`)
                }}
            }else{
                if (carta2 == cartaM2){
                    alert("Empate")
                }else if(suma > 21){
                    alert(`Te pasaste. Gana la maquina con ${sumaM}, perdiste con ${suma}`)
                }else if(sumaM > 21){
                    alert(`Ganaste con ${suma}. La maquina se paso con ${sumaM}`)
                }else{
                    if (carta2 > cartaM2){
                    alert(`Ganaste con ${suma}`)
                    } else {
                        alert(`Gana la maquina con ${sumaM}, perdiste con ${suma}`)
                }}
            }
    }else{
        if (carta == cartaM){
            alert("Empate")
        }else if(suma > 21){
            alert(`Te pasaste. Gana la maquina con ${sumaM}, perdiste con ${suma}`)
        }else if(sumaM > 21){
            alert(`Ganaste con ${suma}. La maquina se paso con ${sumaM}`)
        }else{
            if (carta > cartaM){
            alert(`Ganaste con ${carta}, la maquina perdio ${cartaM}`)
            } else{
                alert(`Gana la maquina con ${cartaM}, perdiste con ${carta}`)
        }}
    }    
}
