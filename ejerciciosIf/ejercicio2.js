let numero

function num(numero){
numero = prompt("Escribe un número")
if ((numero %= 2)===0 ){
    return  alert("El número es par")
}else if((numero %= 2)>0){
    return alert("El número es impar")
}else{
    alert("Ingrese un numero valido")
    return num()
}}
num(numero)