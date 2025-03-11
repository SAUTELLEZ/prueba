"use strict";
let nombre= "EL PIRIPITUCHI";
const pi = 3.141516;//constante
var ciudad = "CDMX"//variable

console.log(nombre,pi,ciudad)

let texto  ="mi ma esta malita ";
let numero ="12";
let numero1 ="1"
let bool   ="tue";
console.log (typeof texto,typeof numero,typeof bool);

let nombre2= prompt("COMO TE LLAMAS");
alert("bienvenido mi tio "+ nombre2);
/*
alert("bienvenido"+nombre2);
 let num = prompt("Imgresa las calificaciones mi kakakakakarnal");
 if(num>=90){
    alert("pasaste mi tio")

 }
 else if (num<=80 ||num>=60){
    alert("pasaste mi tio de pansazo")

 }
 else{
    alert("lastima mi carnal")
 }
*/
//vamos a comparar igual 
let usuario = prompt( "ingresa el usuario");
let clave = prompt("pasword");
if (usuario === "admin" && clave === "12345"){
    alert ( "acceso permitido");
}else {
    alert("nel mi padrino");
}


let dia = prompt("ingresa un dia ");

switch(dia.toLocaleLowerCase()){
    case"lunes":
    alert("inicio de semana");
    break;
    case"martes":
    alert("mhe martes ");

    break;
    case "miercoles":
        case"jueves ":
        alert("dias que no interesan segun ");
        break;
        case"viernes":
        case"sabado":
        alert("dia de loquera ");
        break;
        default:
            alert("parametro no permitido");
}