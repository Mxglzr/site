const frases = [
  "Ahora ni siquiera yo puedo pensar",
  "En otra cosa que no sea su caminar",
  "Aprendí todos tus libros, tus gustos preferidos",
  "Para cuando llame suene entretenido",
  "No quiero que nadie me quite lo mío",
  "Quiero que me calme con solo un besito",
  "Que estemos tranquilos a pesar del ruido",
  "Que exista en la calle y todo ese lío",
  "Sé que me gustó, sin tener varita esa chica me hechizó",
  "Y yo un sangre sucia que no sabe magia",
  "Tendrá rayos láser porque mira y mata",
  "Con lo que camina le hace falta capa",
  "Es una heroína, pero a nadie salva"
];

let index = 0;
const fraseElemento = document.getElementById("frase");

function mostrarFrase() {
  fraseElemento.classList.remove("visible"); // oculta
  setTimeout(() => {
    fraseElemento.innerHTML = `“${frases[index]}”`;
    fraseElemento.classList.add("visible"); // aparece con transición
    index = (index + 1) % frases.length;
  }, 1000); // tiempo de transición
}

// Mostrar primera de inmediato
mostrarFrase();
setInterval(mostrarFrase, 2800); // cambia cada 4 segundos

// Corazones al hacer click
document.addEventListener("click", (e) => {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerHTML = "❤️";
  heart.style.left = `${e.clientX}px`;
  heart.style.top = `${e.clientY}px`;
  document.body.appendChild(heart);

  // eliminar corazón después de la animación
  setTimeout(() => {
    heart.remove();
  }, 2000);
});
