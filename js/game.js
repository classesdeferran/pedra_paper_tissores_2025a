// NOMBRE DEL USUARIO
let buttonNombre = document.querySelector("header button");
let pNombre = document.querySelector("header p");
let respuesta = document.getElementById("respuesta");
let divImagen = document.getElementById("divImagen");

let victoriasH = 0
let empates = 0
let derrotasH = 0


let iconos = ["✊", "✋", "✌️"];

let nombreUsuario = "";

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
  let audioVictoria = document.getElementById("victoria");
  let audioEmpate = document.getElementById("empate");
  let audioDerrota = document.getElementById("derrota");

  alert(`
Tu jugada ha sido : ${iconos[jugadaHumano - 1]}
Mi jugada ha sido : ${iconos[jugadaPC - 1]}
        `);

  if (jugadaHumano == jugadaPC) {
    mensaje = `¡ Habéis empatado ${nombreUsuario}!`;
    audioEmpate.play();
    divImagen.innerHTML = "<img src='img/empate.jpg' alt='empate'>";
    empates++

  } else if (
    (jugadaHumano == 1 && jugadaPC == 3) ||
    (jugadaHumano == 2 && jugadaPC == 1) ||
    (jugadaHumano == 3 && jugadaPC == 2)
  ) {
    mensaje = `¡ Has ganado ${nombreUsuario}!`;
    audioVictoria.play();
    divImagen.innerHTML = "<img src='img/victoria.jpg' alt='victoria'>";
    victoriasH++
  } else {
    mensaje = `¡ Has perdido ${nombreUsuario}!`;
    audioDerrota.play();
    divImagen.innerHTML = "<img src='img/derrota.jpg' alt='derrota'>";
    derrotasH++
  }

  let tabla = `
      <table>
        <tr>
            <th>Victorias</th>
            <th>Empates</th>
            <th>Derrotas</th>
        </tr>
        <tr>
            <td>${victoriasH}</td>
            <td>${empates}</td>
            <td>${derrotasH}</td>
        </tr>
    </table>
  `
  respuesta.innerHTML = `<p>${mensaje}</p>${tabla}`;

});
