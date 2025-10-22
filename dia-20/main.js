let btn = document.querySelector("#botoncito");
let par = document.querySelector("#parrafo");

let btn1 = document.querySelector("#dia");
let par1 = document.querySelector("#textFiona");
let img1 = document.querySelector("#fotito");

btn.addEventListener("click", () => {
  /*  if (btn.classList.contains("bg-green-800")) {
    btn.classList.replace("bg-green-800", "bg-red-800");
    btn.textContent = "Kevin estuvo aqui";
  } else {
    btn.classList.replace("bg-red-800", "bg-green-800");
    btn.textContent = "haz click";
  } */
  par.textContent =
    "funval tiene un programa de desarrollo web q consiste en 2 niveles";
});
/* function color() {
  btn.classList.replace("bg-green-800", "bg-yellow-600");
  btn.textContent = "boren estuvo aqui";
}
 */

btn1.addEventListener("click", () => {
  if (btn1.classList.contains("bg-amber-500")) {
    btn1.classList.replace("bg-amber-500", "bg-blue-800");
    par1.textContent = "Y de noche otra";
    img1.src =
      "https://upload.wikimedia.org/wikipedia/en/b/b9/Princess_Fiona.png";
  } else {
    btn1.classList.replace("bg-blue-800", "bg-amber-500");
    par1.textContent = "De día soy una";
    img1.src =
      "https://upload.wikimedia.org/wikipedia/en/d/d0/Fiona_standing_human.png";
  }
});

let input = document.querySelector("#nombre");
let par2 = document.querySelector("#par2");
input.addEventListener("input", () => {
  console.log(input.value);
  par2.textContent = input.value;
});

/* ------------------------------- */
let form = document.querySelector("#formulario");

form.addEventListener("submit", (e) => {
  //console.log("hola mundo");
  e.preventDefault();
  /* console.log("hola mundo");
  console.log(e);
  let nombreEstudiante = form.nombre.value;
  let edad = form.edad.value;
  let pais = form.pais.value;
  console.log(nombreEstudiante, edad, pais);
  let mensaje = `bienvenido ${nombreEstudiante} del pais de: ${pais} de edad:${edad}`;
  console.log(mensaje); */
  let datos = new FormData(form);
  let nombreEstudiante = datos.get("nombre");
  let edad = datos.get("edad");
  let pais = datos.get("pais");
  let mensaje = `bienvenido ${nombreEstudiante} del pais de: ${pais} de edad:${edad}`;
  console.log(mensaje);
});

function conversiones(monedaOrigen, monedaDestino, cant) {
  let cantidad = parseFloat(cant);
  let resultado;

  switch (monedaOrigen) {
    case "Argentina":
      if (monedaDestino === "Argentina") resultado = cantidad;
      else if (monedaDestino === "Perú") resultado = 0.0025 * cantidad;
      else if (monedaDestino === "Chile") resultado = 0.68 * cantidad;
      else resultado = "Conversión no disponible";
      break;

    case "Perú":
      if (monedaDestino === "Perú") resultado = cantidad;
      else if (monedaDestino === "Argentina") resultado = cantidad * 425.19;
      else if (monedaDestino === "Chile") resultado = cantidad * 282.34;
      else resultado = "Conversión no disponible";
      break;

    case "Chile":
      if (monedaDestino === "Chile") resultado = cantidad;
      else if (monedaDestino === "Argentina") resultado = cantidad * 1.47;
      else if (monedaDestino === "Perú") resultado = 0.0035 * cantidad;
      else resultado = "Conversión no disponible";
      break;

    default:
  }

  return resultado;
}

let form1 = document.querySelector("#formulario2");
form1.addEventListener("submit", (e) => {
  e.preventDefault();
  let datos1 = new FormData(form1);
  let nombre = datos1.get("nombre");
  let cantidad = datos1.get("cantidad");
  let paisOrigen = datos1.get("pais1");
  let paisDestino = datos1.get("pais2");

  alert(
    `${nombre}: Tu dinero de ${paisOrigen} ${cantidad} en el país ${paisDestino} es igual a ${conversiones(
      paisOrigen,
      paisDestino,
      cantidad
    ).toFixed(2)}`
  );
});
