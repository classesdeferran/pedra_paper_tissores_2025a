// NOMBRE DEL USUARIO
let buttonNombre = document.querySelector("header button");
let pNombre = document.querySelector("header p");
let respuesta = document.getElementById("respuesta");
let divImagen = document.getElementById('divImagen')

let nombreUsuario = ""

buttonNombre.addEventListener("click", () => {
  nombreUsuario = prompt("¿Cuál es tu nombre?");
  buttonNombre.style.display = "none";
  pNombre.textContent = `¡Mucha suerte ${nombreUsuario}!`;
});

let formJuego = document.forms["formJuego"];

formJuego.addEventListener("submit", (e) => {
  e.preventDefault();
  let jugadaHumano = formJuego["jugada"].value;

  let numMinimo = 1;
  let numMaximo = 3;
  let jugadaPC =
    Math.floor(Math.random() * (numMaximo - numMinimo + 1)) + numMinimo;

  let mensaje = "";
  let audioVictoria = document.getElementById('victoria')
  let audioEmpate = document.getElementById('empate')
  let audioDerrota = document.getElementById('derrota')
  audioVictoria.play()

  if (jugadaHumano == jugadaPC) {
    mensaje = `¡ Habéis empatado ${nombreUsuario}!`
    audioEmpate.play()
    divImagen.innerHTML = "<img src='img/empate.jpg' alt='empate'>"
  } else if (
    (jugadaHumano == 1 && jugadaPC == 3) ||
    (jugadaHumano == 2 && jugadaPC == 1) ||
    (jugadaHumano == 3 && jugadaPC == 2)
  ) {
    mensaje =  `¡ Has ganado ${nombreUsuario}!`;
    audioVictoria.play()
     divImagen.innerHTML = "<img src='img/victoria.jpg' alt='victoria'>"
  } else {
    mensaje =  `¡ Has perdido ${nombreUsuario}!`
    audioDerrota.play()
     divImagen.innerHTML = "<img src='img/derrota.jpg' alt='derrota'>"
  }

  respuesta.innerHTML = `<p>${mensaje}</p>`;
});
