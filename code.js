/* --------------------------- NO TOCAR DESDE ACÁ --------------------------- */
let datosPersona = {
  nombre: "",
  edad: 0,
  ciudad: "",
  interesPorJs: "",
};

const listado = [{
    imgUrl: "https://huguidugui.files.wordpress.com/2015/03/html1.png",
    lenguajes: "HTML y CSS",
    bimestre: "1er bimestre",
  },
  {
    imgUrl: "https://jherax.files.wordpress.com/2018/08/javascript_logo.png",
    lenguajes: "Javascript",
    bimestre: "2do bimestre",
  },
  {
    imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png",
    lenguajes: "React JS",
    bimestre: "3er bimestre",
  },
];

const profileBtn = document.querySelector("#completar-perfil");
const materiasBtn = document.querySelector("#obtener-materias");
const verMasBtn = document.querySelector("#ver-mas");
const cambiarTema = document.querySelector('#cambiar-tema');

profileBtn.addEventListener("click", renderizarDatosUsuario);
materiasBtn.addEventListener("click", recorrerListadoYRenderizarTarjetas);
cambiarTema.addEventListener("click", alternarColorTema);
/* --------------------------- NO TOCAR HASTA ACÁ --------------------------- */

function obtenerDatosDelUsuario() {
  /* --------------- PUNTO 1: Escribe tu codigo a partir de aqui --------------- */
  let nombre = "";
  do {
    nombre = prompt("Ingresa tu nombre");
  } while (!nombre || nombre.length < 3);
 
  const nombres = nombre.split(" ");
  nombre = nombres.map(nombre => {
    return nombre.charAt(0).toUpperCase() + nombre.slice(1).toLowerCase();
  }).join(" ");
 
  let anioNacimiento;
  do {
    anioNacimiento = parseInt(prompt("Ingresa el año en que naciste"));
  } while (isNaN(anioNacimiento) || anioNacimiento > 2024);
  
  const edad = 2024 - anioNacimiento;
 
  let ciudad = "";
  do {
    ciudad = prompt("Ingresa la ciudad donde vives");
  } while (!ciudad || ciudad.length < 3);
  
  const ciudadCapitalizada = ciudad.split(" ");
  
  ciudad = ciudadCapitalizada.map(palabra => {
    return palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase();
  }).join(" ");
  
  let interesPorJsTexto;
    if (confirm("Te interesa Javascript?")) {
      interesPorJsTexto = "Sí";
    } else {
      interesPorJsTexto = "No";
  }
 
  datosPersona.nombre = nombre;
  datosPersona.edad = edad;
  datosPersona.ciudad = ciudad;
  datosPersona.interesPorJs = interesPorJsTexto;
}

function renderizarDatosUsuario() {
  /* ------------------- NO TOCAR NI ELIMINAR ESTA FUNCION. ------------------- */
  obtenerDatosDelUsuario();
  /* --------------- PUNTO 2: Escribe tu codigo a partir de aqui --------------- */
  const nombreDeUsuario = document.querySelector("#nombre");
  const edadUsuario = document.querySelector("#edad");
  const ciudadUsuario = document.querySelector("#ciudad");
  const interesPorJs = document.querySelector("#javascript");
  
  nombreDeUsuario.textContent = datosPersona.nombre;
  edadUsuario.textContent = datosPersona.edad;
  ciudadUsuario.textContent = datosPersona.ciudad; 
  interesPorJs.textContent = datosPersona.interesPorJs;
}

function recorrerListadoYRenderizarTarjetas() {
  /* ------------------ PUNTO 3: Escribe tu codigo desde aqui ------------------ */
  const fila = document.querySelector("#fila");

  fila.innerHTML = "";

  listado.forEach(materia => {
      const template = `
        <div class="caja">
          <img src="${materia.imgUrl}" alt=${materia.lenguajes}>
          <p class="lenguajes">Lenguaje: ${materia.lenguajes}</p>
          <p class="bimestre">Bimestre: ${materia.bimestre}</p>
        </div>
      `;
      fila.innerHTML += template;
    }); 
}

function alternarColorTema() {
  /* --------------------- PUNTO 4: Escribe tu codigo aqui --------------------- */
  const sitio = document.querySelector("body");
  sitio.classList.toggle("dark");
}

/* --------------------- PUNTO 5: Escribe tu codigo aqui --------------------- */
function agregarTexto() {
  window.addEventListener("keydown", function(event) {
      if (event.code === 'KeyF') {
        const parrafo= document.querySelector("#sobre-mi")
        parrafo.classList.remove("oculto");
      }
  });
}

agregarTexto();

