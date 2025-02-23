/*Ejecercicios de color rojo*/ 
/*1*/
let edad = 17
let puedeVotar = (edad >= 18) ? "Puede votar" : "No puede votar"
console.log(puedeVotar)

/*2*/
let numero = -1
let clasificacion = (numero > 0) ? "Número positivo" : (numero < 0) ? "Número negativo" : "Cero"
console.log(clasificacion)

/*3*/
let estacionamiento = true;
let nombreEstacionamiento = "Bolivar";
let mensaje = estacionamiento ? `El estacionamiento llamado ${nombreEstacionamiento} está ocupado` : `El estacionamiento llamado ${nombreEstacionamiento} está disponible`;
console.log(mensaje);

/*4*/
const correo4 = "masarria_747@unihumboldt.edu.co"
const contraseña4 = "12345"
correo4 == "masarria_747@unihumboldt.edu.co" && contraseña4 == "12345"?
console.log(`Señor con email ${correo4}, bienvenido al sistema`) :
console.log(`El correo y la contraseña son incorrectas`)

/*5*/
let colorSemaforo = "rojo";
let accionSemaforo = (colorSemaforo === "verde") ? "Puede seguir" : 
(colorSemaforo === "amarillo") ? "Prepárese para detenerse" :
(colorSemaforo === "rojo") ? "Debe detenerse" : "Color de semáforo desconocido";
console.log(accionSemaforo);

/*Ejercicios de color amarillo*/
/*1*/
let agua = 100
if (agua >= 100){
    console.log("El agua esta hirviendo")
}

/*2*/
let cliente = "no premium"
if (cliente == "no premium"){
    console.log(`Sera atendido en el modulo 1`)
}else if (cliente == "premium"){
    console.log("Esta habilitado el modulo VIP")
}else {
    console.log("No esta en el sistema registrese por favor")
}

/*3*/
const email = "juan@example.com";
const contraseña = "12345";
let emailIngresado = "juan@example.com";
let claveIngresada = "12345";

email === emailIngresado && contraseña === claveCorrecta ? 
console.log(`Señor usuario con correo ${email} bienvenido al sistema`) : console.log("El correo o la contraseña son incorrectas");

/*4*/
let derecha = true
let izquierda = false
let arriba = true
let abajo = false
if(derecha){
    console.log("derecha")
}else if (izquierda){
    console.log("izquierda")
}else if (arriba){
    console.log("arriba")
}else{
    console.log("abajo")
}

/*5*/
let dispositivoEncendido = false;
dispositivoEncendido ? console.log("El dispositivo está encendido") : console.log("El dispositivo está apagado");

/*6*/
let dia = "jueves"
let clase = "Inglés"
if (dia == "jueves"){
    console.log(`la clase de hoy es ${clase}`)
}