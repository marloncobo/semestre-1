let numero
while (true){
numero = Number(prompt("Escribe un número"))
if ((numero %= 2)==0 ){
    alert("El número es par")
    break
}if((numero %= 2)>0){
    alert("El número es impar")
    break
}else{
    alert("error")
}
}