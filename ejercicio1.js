let nombre = prompt("ingrese su nombre")
let horas = Number(prompt("ingrese el número de horas trabajadas"))

if (horas>=0 && horas<=10){
    let salario = horas * 30000
    alert(`Señor/a ${nombre}, el número de horas es ${horas} y su salario equivale a ${salario}.`)
    } else if (horas>10){
        let salario = horas * 33000
        alert(`Señor/a ${nombre}, el número de horas es ${horas} y su salario equivale a ${salario}.`)
    }