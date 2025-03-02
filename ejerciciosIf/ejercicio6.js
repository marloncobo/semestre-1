let num, num2, num3

while(true){
num = Number(prompt("ingresa primer numero"))
num2 = Number(prompt("ingresa segundo numero"))
num3 = Number(prompt("ingresa tercer numero"))

if (num>num2 && num>num3){
    alert(`El numero mayor es ${num}`)
    break
}else if (num2>num && num2>num3){
    alert(`El numero mayor es ${num2}`)
    break
}else if(num3>num && num3>num2){
    alert(`El numero mayor es ${num3}`)
    break
}else{
    alert("error")
}}