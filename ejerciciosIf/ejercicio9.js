let ang, ang2, ang3, suma
function angulo(){
    ang = Number(prompt("ingresa primer angulo"))
    ang2 = Number(prompt("ingresa segundo angulo"))
    ang3 = Number(prompt("ingresa tercer angulo"))
    if (isNaN(ang) || isNaN(ang2) || isNaN(ang3)){
        alert("Ingresa un numero valido")
        return angulo()
    }else{
        return ang, ang2, ang3
    }
}
function sumar(ang, ang2, ang3){
    suma = ang+ang2+ang3
    if (suma==180){
        return alert("El triangulo es valido")
    } else {
        return alert("Triangulo no valido")
    }   
}
angulo(), sumar(ang, ang2, ang3)


    
