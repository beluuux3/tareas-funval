let numero = parseInt(prompt("Ingrese el numero: "));

let suma = 0;

for (let i = 1; i <= numero; i++) {
  suma += i;
}
console.log("El resultado es la suma del 1 al " + numero + " es " + suma);
