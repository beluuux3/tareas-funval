const lista = document.querySelector("#listaTareas");
const input = document.querySelector("#tareaInput");
const contador = document.querySelector("#contador");

let tareas = [];
let filtroActual = "todas";

document.addEventListener("click", (e) => {
  const target = e.target;

  if (target.id === "agregarBtn") {
    agregarTarea();
  } else if (target.classList.contains("eliminar")) {
    eliminarTarea(target.closest("li").dataset.id);
  } else if (target.classList.contains("editar")) {
    editarTarea(target.closest("li").dataset.id);
  } else if (target.classList.contains("check")) {
    completarTarea(target.closest("li").dataset.id);
  } else if (target.closest("[data-filtro]")) {
    cambiarFiltro(target.dataset.filtro);
  }
});

function agregarTarea() {
  const texto = input.value.trim();
  if (!texto) return;

  tareas.push({ id: Date.now(), texto, completada: false });
  input.value = "";
  renderTareas();
}

function eliminarTarea(id) {
  tareas = tareas.filter((t) => t.id != id);
  renderTareas();
}

function editarTarea(id) {
  const tarea = tareas.find((t) => t.id == id);
  const nuevoTexto = prompt("Edita tu tarea:", tarea.texto);
  if (nuevoTexto !== null && nuevoTexto.trim() !== "") {
    tarea.texto = nuevoTexto.trim();
    renderTareas();
  }
}

function completarTarea(id) {
  const tarea = tareas.find((t) => t.id == id);
  tarea.completada = !tarea.completada;
  renderTareas();
}

function cambiarFiltro(filtro) {
  filtroActual = filtro;
  document
    .querySelectorAll("[data-filtro]")
    .forEach((b) => b.classList.remove("bg-[#e66caf]", "text-black"));
  document
    .querySelector(`[data-filtro="${filtro}"]`)
    .classList.add("bg-[#e66caf]", "text-black");
  renderTareas();
}

function renderTareas() {
  lista.innerHTML = "";

  const filtradas = tareas.filter((t) =>
    filtroActual === "todas"
      ? true
      : filtroActual === "completadas"
      ? t.completada
      : !t.completada
  );

  filtradas.forEach((t) => {
    const li = document.createElement("li");
    li.dataset.id = t.id;
    li.className = `flex justify-between items-center bg-pink-900 px-3 py-2 rounded-xl ${
      t.completada ? "opacity-60 line-through" : ""
    }`;

    li.innerHTML = `
      <span>${t.texto}</span>
      <div class="space-x-1 flex items-center">
        <button class="check bg-green-400 text-black px-2 rounded hover:bg-green-300"><svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="check size-6 scale-90">
  <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
</svg>
</button>
        <button class="editar bg-yellow-400 text-black px-2 rounded hover:bg-yellow-300"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="editar size-6 scale-90">
  <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
</svg>
</button>
        <button class="eliminar bg-red-500 text-white px-2 rounded hover:bg-red-400"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="eliminar size-6 scale-90">
  <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
</svg>
</button>
      </div>
    `;
    lista.appendChild(li);
  });
}
