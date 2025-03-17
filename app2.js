let saldo = [0]
let total 
const consultarSaldo = () => {
    total = saldo.reduce((a, b) => a + b)
    alert(`Su saldo es de ${total}`)
}

const retirarDinero = () => {
    let retirar = parseInt(prompt("Introduce la cantidad a retirar:"))
    total = saldo.reduce((a, b) => a + b)
    if (retirar !== isNaN) {    
        if (retirar > total) {
            alert("No tienes suficiente saldo.")
        }else if (retirar > 500) {
            alert("El monto máximo a retirar es de 500")
        }else {
            saldo.push(-retirar)
            if (total < 0) {
                saldo.pop()
                alert("No tienes suficiente saldo.")
            }else{
                let resta = saldo.reduce((a, b) => a + b)
                alert(`Has retirado ${retirar}. Tu saldo actual es de ${resta}`)
            }
        }
    }else{
        alert("Cantidad no valida")
    }
}
const depositarDinero = () => {
    let depositar = parseInt(prompt("Introduce la cantidad a depositar:"))
    if (depositar !== isNaN) { 
        saldo.push(depositar)   
        let suma = saldo.reduce((a, b) => a + b)
        alert(`Has depositado ${depositar}. Tu saldo actual es de ${suma}`)
    }else {
        alert("Cantidad no valida")
    }
}
while (true) {
    let opcion = prompt("Elige una opción:\n1. Consultar saldo\n2. Retirar dinero\n3. Depositar dinero\n4. Salir")
    if (opcion === "1") {
        consultarSaldo()
    } else if (opcion === "2") {
        retirarDinero()
    } else if (opcion === "3") {
        depositarDinero()
    } else if (opcion === "4") {
        alert("Saliendo...")
        break
    } else {
        alert("Opción no valida.")
    }
}