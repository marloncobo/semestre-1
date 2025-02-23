let num = Number(prompt("ingresa primer numero"))
let num2 = Number(prompt("ingresa segundo numero"))
let num3 = Number(prompt("ingresa tercer numero"))

if (num>num2 && num>num3){
    alert(`El numero mayor es ${num}`)
}else if (num2>num && num2>num3){
    alert(`El numero mayor es ${num2}`)
}else {
    alert(`El numero mayor es ${num3}`)
}