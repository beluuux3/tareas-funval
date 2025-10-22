let mascotaObj = {
  nombre: "Bruce",
  edad: 8,
  peso: 30,
  color: "Blanco y negro",
  raza: "Esmoquin xd",
  vacunas: true,
  esMacho: false,
  comidaFav: "Croquetas",
  cantidadPatas: 4,
};

console.log(mascotaObj);

mascotaObj.edad = 9;
mascotaObj.pasatiempo = "Dormir";
delete mascotaObj.cantidadPatas;

let estudianteObj = {
  nombre: "Kevin",
  edad: 28,
  matricula: 1701212,
  pais: "Bolivia",
  altura: 1.6,
  varon: true,
  empresa: {
    nombre: "Funval",
    añoFunvadion: 2005,
  },
  notas: [, 45, 78, 0, 32, 25, 34],
};

/* 
    quiero q puedan extraer el promedio de nuestro estudiante y puedan determinar
    si esta aprobado o reprobado
    en caso de estar aprobado mostrar un mensaje q diga
    "el estudiante nombre de la empresa funval tiene un promedio de promedio por lo tanto esta aprobado"
    "el estudiante nombre de la pais Bolivia tiene un promedio de promedio por lo tanto esta reprobado"
*/

let notas = estudianteObj.notas;
let promedio = 0;

for (let i = 0; i < notas.length; i++) {
  promedio += notas[i];
}

promedio /= notas.length;

console.log(notas);

if (promedio > 51) {
  console.log(
    `El estudiante ${estudianteObj.nombre} de la empresa ${estudianteObj.empresa.nombre} tiene un promedio de ${promedio} por lo tanto esta aprobado`
  );
} else {
  console.log(
    `El estudiante ${estudianteObj.nombre} de la empresa ${estudianteObj.empresa.nombre} tiene un promedio de ${promedio} por lo tanto esta reprobado`
  );
}
