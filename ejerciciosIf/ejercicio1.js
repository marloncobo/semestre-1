let nombre = prompt("ingrese su nombre")
let horas
let salario
while (true){
    horas = Number(prompt("ingrese el número de horas trabajadas"))
    if (horas>=0 && horas<=10){
    salario = horas * 30000
    break
    } if (horas>10){
    salario = horas * 33000
    break} else{
        alert("error")
    } 
}

alert(`Señor/a ${nombre}, el número de horas es ${horas} y su salario equivale a ${salario}.`)