/* EJEMPLO BASICO */
/* let superTitulo = document.querySelector("#titulo");
console.log(superTitulo);
superTitulo.textContent = "HOLA AMIGOS DE FUNVAL"; */
/* ------------SELECIONADORES DE ELEMENTOS-------------------- */
let selecion1 = document.getElementById("titulo"); //RETORNA 1 SOLO ELEMENTO
let selecion2 = document.getElementsByClassName("titu"); // RETORNA UNA LISTA DE ELEMENTOS
let selecion3 = document.getElementsByTagName("h1"); // RETORNA UNA LISTA DE ELEMENTOS
let selecion4 = document.querySelector("#titulo"); // RETORNA EL PRIMER ELEMENTO Q COINICDA CON ESE CRITERIO
let selecion5 = document.querySelectorAll(".titu"); //RETORNA UNA LISTA DE ELEMENTOS
console.log(selecion1);
console.log(selecion2);
console.log(selecion3);
console.log(selecion4);
console.log(selecion5);
/* -----------MODIFICAMDO EL TEXTO----------------------- */
selecion4.textContent = "Kevin";
/* -----------MODIFICADOR DE CSS-----------------------------*/
//selecion4.style.backgroundColor = "red";
selecion4.style.fontSize = "100px";
/* --------------MODIFICADOR DE CLASES-------------------*/
selecion4.classList.add("p-4", "text-blue-500", "bg-slate-900");
/* -----------------modificando ATRIBUTOS----------------------- */
let imagenSud = document.querySelector("#imagen");
imagenSud.setAttribute(
  "src",
  "https://discursosud.com/wp-content/uploads/2023/08/jesus.jpg"
);
imagenSud.setAttribute("width", "100px");
console.log(imagenSud.getAttribute("alt"));
/* -----------------MODIFICACION DE TODO EL HTML INTERIOR------------------ */
let contenedor = document.querySelector("#contenedor-card");
contenedor.innerHTML = `
<div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img class="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
    </a>
    <div class="p-5">
        <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
        <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
             <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a>
    </div>
</div>
`;
