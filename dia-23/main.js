/* console.log("Levantarme");
console.log("Asearme");
console.log("Encender pc");
console.log("Revisar pendientes");
console.log("Comenzar a trabajar");

console.log("Iniciar con diseño");
console.log("Renderizar diseño");
setTimeout(() => {
  console.log("Renderizado finalizado...");
}, 7000);

setTimeout(() => {
  console.log("Colocar la caldera");
}, 2000);

console.log("Comer queque de platano");

setTimeout(() => {
  console.log("Tomar un chocolate caliente");
}, 2000);
 */

let usuario = [
  {
    nombre: "Belen",
    edad: 27,
    pais: "Bolivia",
    ciudad: "La Paz",
    cel: 67676767,
    ocupacion: "Desarrolladora Frontend",
  },
  {
    nombre: "Carlos",
    edad: 30,
    pais: "Argentina",
    ciudad: "Buenos Aires",
    cel: 12345678,
    ocupacion: "Diseñador UX",
  },
  {
    nombre: "Ana",
    edad: 25,
    pais: "Chile",
    ciudad: "Santiago",
    cel: 87654321,
    ocupacion: "Desarrolladora Backend",
  },
  {
    nombre: "Luis",
    edad: 28,
    pais: "Peru",
    ciudad: "Lima",
    cel: 98765432,
    ocupacion: "Desarrollador Fullstack",
  },
  {
    nombre: "Maria",
    edad: 26,
    pais: "Colombia",
    ciudad: "Bogotá",
    cel: 12345679,
    ocupacion: "Desarrolladora Mobile",
  },
  {
    nombre: "Pedro",
    edad: 29,
    pais: "Ecuador",
    ciudad: "Quito",
    cel: 23456789,
    ocupacion: "Desarrollador Backend",
  },
];

let contenedor = document.querySelector("#container");

const promesaUsuarios = new Promise((resolve, reject) => {
  setTimeout(() => {
    let resuelto = true;
    if (resuelto) {
      resolve(usuario);
    } else {
      reject("No se pudieron cargar los usuarios");
    }
  }, 3000);
});

promesaUsuarios
  .then((respuesta) => {
    console.log("Se cumplio la promesa :3", respuesta);
    respuesta.forEach(({ nombre, edad, pais, ciudad, cel, ocupacion }) => {
      contenedor.innerHTML += `<a href="#" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">${nombre}</h5>
<p class="font-normal text-gray-700 dark:text-gray-400">Ocupacion:${ocupacion}-Edad:${edad}.</p>
</a> `;
    });
  })
  .catch((error) => {
    console.log("No se cumplio la promesa :c", error);
  });

/* 
crear una promesa y consumirla
*/

let contenedor1 = document.querySelector("#container1");
let contenedor2 = document.querySelector("#container2");
let contenedor3 = document.querySelector("#container3");
let contenedor4 = document.querySelector("#container4");
let contenedor5 = document.querySelector("#container5");

/* ----------------EJERCICIOS PROMESAS---------------- */
// 1. Promesa que retorna un array de productos
const getProductos = new Promise((resolve, reject) => {
  setTimeout(() => {
    const productos = [
      { id: 1, nombre: "Laptop", precio: 1200 },
      { id: 2, nombre: "Mouse", precio: 25 },
      { id: 3, nombre: "Teclado", precio: 45 },
    ];
    resolve(productos);
  }, 1000);
});

getProductos.then((respProductos) => {
  respProductos.forEach(({ id, nombre, precio }) => {
    contenedor1.innerHTML += `<div>
            <h3>${nombre}</h3>
            <p>Precio: $${precio}</p>
        </div>`;
  });
});

// 2. Promesa que retorna un array de notas de estudiantes
const getNotas = new Promise((resolve, reject) => {
  setTimeout(() => {
    const notas = [
      { estudiante: "Ana", notas: [18, 15, 19] },
      { estudiante: "Luis", notas: [12, 14, 16] },
      { estudiante: "María", notas: [20, 19, 18] },
    ];
    resolve(notas);
  }, 1500);
});

getNotas.then((respNotas) => {
  respNotas.forEach(({ estudiante, notas }) => {
    contenedor2.innerHTML += `<div>
            <h3>${estudiante}</h3>
            <p>Notas: ${notas.join(", ")}</p>
        </div>`;
  });
});

// 3. Promesa que puede fallar aleatoriamente
const getUsuarios = new Promise((resolve, reject) => {
  setTimeout(() => {
    const exito = Math.random() > 0.3; // 70% de éxito
    if (exito) {
      resolve([
        { id: 1, nombre: "Kevin" },
        { id: 2, nombre: "Carla" },
        { id: 3, nombre: "Diego" },
      ]);
    } else {
      reject("Error al obtener usuarios 😢");
    }
  }, 1200);
});

getUsuarios
  .then((respUsuarios) => {
    respUsuarios.forEach(({ id, nombre }) => {
      contenedor3.innerHTML += `<div>
            <h3>${nombre}</h3>
            <p>ID: ${id}</p>
        </div>`;
    });
  })
  .catch((error) => {
    contenedor3.innerHTML = `<p>${error}</p>`;
  });

// 4. Promesa que retorna un array de cursos
const getCursos = new Promise((resolve) => {
  setTimeout(() => {
    const cursos = [
      { codigo: "INF101", nombre: "Programación I" },
      { codigo: "INF202", nombre: "Estructuras de Datos" },
      { codigo: "INF303", nombre: "Base de Datos" },
    ];
    resolve(cursos);
  }, 800);
});

// 5. Promesa que retorna un array de tareas
const getTareas = new Promise((resolve) => {
  setTimeout(() => {
    const tareas = [
      { id: 1, titulo: "Estudiar Promesas", completada: false },
      { id: 2, titulo: "Hacer ejercicio", completada: true },
      { id: 3, titulo: "Leer un libro", completada: false },
    ];
    resolve(tareas);
  }, 2000);
});
