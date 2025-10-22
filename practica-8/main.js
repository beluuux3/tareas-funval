/* Ejercicio 1 — Tarjetas de Usuarios
Crea una función que reciba un objeto usuario con propiedades:
{ nombre, edad, pais, ...resto }.

Desestructura las propiedades principales y usa el operador rest para capturar el resto.
Genera dinámicamente una tarjeta en el DOM mostrando todos los datos.
Cada vez que se invoque la función con un nuevo usuario, debe agregarse una nueva tarjeta al contenedor. */

let usuarios = [
  {
    nombre: "Belen",
    edad: 27,
    pais: "Bolivia",
    ciudad: "La Paz",
    cel: 67676767,
    ocupacion: "Desarrolladora Frontend",
  },
  {
    nombre: "Kevin",
    edad: 28,
    pais: "Bolivia",
    ciudad: "La Paz",
    cel: 67676767,
    ocupacion: "Profesor Frontend",
  },
  {
    nombre: "Ignacio",
    edad: 27,
    pais: "Argentina",
    ciudad: "Buenos Aires",
    cel: 67676767,
    ocupacion: "Desarrollador UX",
  },
];
const boton = document.getElementById("mostrar");
let indice = 0;
const contenedor = document.querySelector(".container1");

boton.addEventListener("click", () => {
  if (indice < usuarios.length) {
    crearTarjeta(usuarios[indice]);
    indice++;
  } else {
    boton.disabled = true;
    alert("No hay mas para mostrar");
  }
});

function crearTarjeta({ nombre, edad, pais, ...resto }) {
  const tarjeta = document.createElement("div");
  tarjeta.className =
    "bg-white shadow-lg rounded-xl p-4 m-4 w-64 border border-gray-200 hover:shadow-l transition";

  tarjeta.innerHTML = `
    <h2 class="text-xl font-semibold text-blue-600 mb-2">${nombre}</h2>
    <p><strong>Edad:</strong> ${edad}</p>
    <p><strong>País:</strong> ${pais}</p>
    ${Object.entries(resto)
      .map(([key, value]) => `<p><strong>${key}:</strong> ${value}</p>`)
      .join("")}
  `;

  contenedor.appendChild(tarjeta);
}

/* Ejercicio 2 — Tabla de Productos
Crea una función renderProducto que reciba un objeto producto con propiedades:
{ nombre, precio, stock, ...rest }.

Inserta en el DOM una fila en una tabla mostrando nombre, precio, stock y las propiedades adicionales.
Agrega varios productos para mostrar la funcionalidad. */

let productos = [
  {
    nombre: "Laptop",
    precio: 1200,
    stock: 30,
    marca: "Dell",
    color: "Negro",
    garantia: "2 años",
  },
  {
    nombre: "Mouse",
    precio: 25,
    stock: 100,
    marca: "Logitech",
    color: "Gris",
  },
  {
    nombre: "Teclado",
    precio: 45,
    stock: 50,
    marca: "Redragon",
    color: "Negro con luces",
  },
];

const cuerpoTabla = document.querySelector("#productos");
const botonAgregar = document.querySelector("#agregar");
let indice1 = 0;

function renderProducto({ nombre, precio, stock, ...rest }) {
  const fila = document.createElement("tr");
  fila.className = "hover:bg-gray-50";

  const extras = Object.entries(rest)
    .map(
      ([key, value]) => `<span class="block text-sm">${key}: ${value}</span>`
    )
    .join("");

  fila.innerHTML = `
    <td class="border border-gray-300 px-4 py-2">${nombre}</td>
    <td class="border border-gray-300 px-4 py-2">$${precio}</td>
    <td class="border border-gray-300 px-4 py-2">${stock}</td>
    <td class="border border-gray-300 px-4 py-2">${extras}</td>
  `;

  cuerpoTabla.appendChild(fila);
}

botonAgregar.addEventListener("click", () => {
  if (indice1 < productos.length) {
    renderProducto(productos[indice1]);
    indice1++;
  } else {
    botonAgregar.disabled = true;
    alert("No hay mas para mostrar");
  }
});

/* Ejercicio 3 — Lista de Tareas
Crea una función agregarTarea que reciba un objeto { titulo, descripcion, ...extra }.

La función debe crear un <li> con la información principal y un botón “Ver más”.
Al hacer clic en “Ver más”, mostrar en consola las propiedades adicionales (...extra).
Mantén un array de tareas usando spread para no mutar el original. */

let tareas = [
  {
    titulo: "Comprar comestibles",
    descripcion: "Leche, Pan, Huevos",
    prioridad: "Alta",
    fechaVencimiento: "2024-07-01",
    asignadaA: "Juan",
  },
  {
    titulo: "Preparar presentación",
    descripcion: "Proyecto final de curso",
    prioridad: "Media",
    fechaVencimiento: "2024-08-10",
    asignadaA: "Belén",
  },
  {
    titulo: "Llamar al proveedor",
    descripcion: "Confirmar pedido de insumos",
    prioridad: "Baja",
    fechaVencimiento: "2024-07-15",
    asignadaA: "Kevin",
  },
];

let listaTareas = document.querySelector(".tareas");
let btnAgregar = document.getElementById("agregar1");
let indice2 = 0;

let tareasMostradas = [];

function agregarTarea({ titulo, descripcion, ...extra }) {
  tareasMostradas = [...tareasMostradas, { titulo, descripcion, ...extra }];

  const li = document.createElement("li");
  li.className =
    "border border-gray-300 rounded-lg p-4 mb-3 flex justify-between items-center";

  li.innerHTML = `
    <div>
      <h3 class="font-semibold text-lg text-blue-600">${titulo}</h3>
      <p class="text-gray-700">${descripcion}</p>
    </div>
    <button class="verMas bg-green-500 text-white px-3 py-1 rounded-md hover:bg-green-600 transition">
      Ver más
    </button>
  `;

  li.querySelector(".verMas").addEventListener("click", () => {
    console.log(`Detalles extra de "${titulo}":`, extra);
  });

  listaTareas.appendChild(li);
}

btnAgregar.addEventListener("click", () => {
  if (indice2 < tareas.length) {
    agregarTarea(tareas[indice2]);
    indice2++;
  } else {
    btnAgregar.disabled = true;
    alert("No hya nada mas para mostrar");
  }
});

/* Ejercicio 4 — Tabla de Estudiantes
Crea una función mostrarEstudiantes(...estudiantes) que reciba varios objetos estudiantes.

Cada estudiante tiene { nombre, edad, notas }.
Desestructura para calcular el promedio de notas y genera dinámicamente una tabla en el DOM.
Usa spread para agregar estudiantes sin mutar el array original.
Bonus: agrega un botón que actualice la edad o las notas de un estudiante y vuelva a renderizar la tabla. */

let estudiantes = [
  { nombre: "Ana", edad: 20, notas: [85, 90, 78] },
  { nombre: "Luis", edad: 22, notas: [88, 76, 92] },
  { nombre: "Marta", edad: 21, notas: [90, 91, 89] },
];

const tabla = document.querySelector("#estudiantes");
const btnMostrar = document.querySelector("#mostrar1");
const btnActualizar = document.querySelector("#actualizar1");

let listaEstudiantes = [...estudiantes];

function calcularPromedio(notas) {
  const suma = notas.reduce((acc, n) => acc + n, 0);
  return (suma / notas.length).toFixed(2);
}

function mostrarEstudiantes(...estudiantes) {
  tabla.innerHTML = "";
  estudiantes.forEach(({ nombre, edad, notas }) => {
    const promedio = calcularPromedio(notas);

    const fila = document.createElement("tr");
    fila.className = "hover:bg-gray-50";

    fila.innerHTML = `
      <td class="border border-gray-300 px-4 py-2 font-medium">${nombre}</td>
      <td class="border border-gray-300 px-4 py-2">${edad}</td>
      <td class="border border-gray-300 px-4 py-2">${notas.join(", ")}</td>
      <td class="border border-gray-300 px-4 py-2">${promedio}</td>
    `;

    tabla.appendChild(fila);
  });
}

btnMostrar.addEventListener("click", () => {
  mostrarEstudiantes(...listaEstudiantes);
  btnMostrar.disabled = true;
});

btnActualizar.addEventListener("click", () => {
  listaEstudiantes = listaEstudiantes.map((est) =>
    est.nombre === "Luis"
      ? {
          ...est,
          edad: est.edad + 1,
          notas: [...est.notas, 95],
        }
      : est
  );

  mostrarEstudiantes(...listaEstudiantes);
});

/* Ejercicio 5 — Configuración de App
Crea una función configurarApp que reciba un objeto { titulo, version, ...resto }.

Desestructura las propiedades principales y usa rest para capturar las adicionales.
Muestra en el DOM el título y versión, y lista las propiedades adicionales.
Permite actualizar la configuración creando un nuevo objeto con spread y re-renderiza la información sin recargar la página.
 */

let configApp = {
  titulo: "Mi ToDo",
  version: "1.0",
  tema: "Oscuro",
  idioma: "Español",
  autor: "Desarrollador Belu",
};

const contenedor1 = document.querySelector("#config-container");
const btnActualizar1 = document.querySelector("#actualizar2");

function configurarApp({ titulo, version, ...resto }) {
  contenedor1.innerHTML = `
    <h2 class="text-xl font-semibold text-blue-600 mb-2">${titulo}</h2>
    <p class="text-gray-700"><strong>Versión:</strong> ${version}</p>
    <h3 class="mt-3 font-medium text-gray-800">Otras configuraciones:</h3>
    <ul class="list-disc ml-6 mt-2 text-gray-600">
      ${Object.entries(resto)
        .map(([key, value]) => `<li><strong>${key}:</strong> ${value}</li>`)
        .join("")}
    </ul>
  `;
}

configurarApp(configApp);

btnActualizar1.addEventListener("click", () => {
  configApp = {
    ...configApp,
    version: "2.0",
    tema: configApp.tema === "Oscuro" ? "Claro" : "Oscuro",
    idioma: configApp.idioma === "Español" ? "Inglés" : "Español",
  };

  configurarApp(configApp);

  alert("Actualizado");
  btnActualizar1.classList.add("bg-green-500");
  setTimeout(() => {
    btnActualizar1.textContent = "Actualizar configuración";
    btnActualizar1.classList.remove("bg-green-500");
  }, 1500);
});
