/**
 * Created by Bryan Molina on 9/08/14.
 */

var peso;
var pesoEnMarte; //CamelCase
alert("¿Quieres saber tu peso en Marte?");
peso = prompt("¿Cuál es tu peso en Kg?", "75");
peso = parseInt(peso)
pesoEnMarte = (peso/9.81)*3.711;
alert ("Tu peso en Marte es :" + pesoEnMarte)

/*
var nombre= "Bryan";
var apellido= "Molina";
var edad=23;

alert(nombre + " " + apellido + "\n" + edad + " años.");
alert("2" + 5 + 8 );
alert("2" + 5 * 8 );
*/