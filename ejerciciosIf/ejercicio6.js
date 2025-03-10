let num, num2, num3,resultado
function mayor(num,num2,num3){
    if (num>num2 && num>num3){
        return num
    }else if (num2>num && num2>num3){
        return num2
    }else if(num3>num && num3>num2){
        return num3
    }
}
while(true){
num = Number(prompt("ingresa primer numero"))
num2 = Number(prompt("ingresa segundo numero"))
num3 = Number(prompt("ingresa tercer numero"))
resultado = mayor(num,num2,num3)
if (isNaN(num,num2,num3)){
    alert("Ingresa un numero valido")
}else{
    break
}
}
alert(`El numero mayor es ${resultado}`)