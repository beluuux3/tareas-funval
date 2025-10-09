/* crear una aplicacion q pida el nombre de usuario y 
la contraseña a una persona si esta contraseña o nombre de usuario son incorrectos 
volver a pedir q ingrese sus datos hasta q estos sean correctos
username == "ADMIN"
password == 123456
*/
let user, pass;

do {
  user = prompt("Ingrese usuario").toLowerCase();
  pass = prompt("Ingrese contraseña");

  console.log("Usuario ingresado: " + user + "Contraseña Ingresada: " + pass);
} while (user != "admin" || pass != "123456");

alert("Ingreso satisfactorio");

/* 
    crear una aplicacion q muestre los n terminos de la serie de los numeros
    pares ejemplo
    si el cliente coloca n = 6
    deberan mostrar en consola  2,4,6,8,10,12
    n=3
    2,4,6
    n=7
    2,4,6,8,10,12,14
*/

console.log("EJERCICIO 2 - Nº NUMEROS PARES ");

let num = parseInt(prompt("Ingrese un número: "));

for (let i = 1; i <= num; i++) {
  console.log(i * 2);
}
