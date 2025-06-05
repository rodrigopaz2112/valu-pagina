
let slideIndex = 0;
const slides = document.querySelectorAll(".slide");
const navLinks = document.getElementById("navLinks");

// Mostrar el primer slide
mostrarSlide(slideIndex);

// Función para cambiar de slide con los botones
function cambiarSlide(n) {
  slideIndex += n;
  if (slideIndex >= slides.length) slideIndex = 0;
  if (slideIndex < 0) slideIndex = slides.length - 1;
  mostrarSlide(slideIndex);
}

// Mostrar el slide actual y ocultar los demás
function mostrarSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove("active");
    if (i === index) {
      slide.classList.add("active");
    }
  });
}

// Carrusel automático cada 5 segundos
setInterval(() => {
  cambiarSlide(1);
}, 5000);

// Mostrar u ocultar menú móvil
function toggleMenu() {
  navLinks.classList.toggle("active");
}


window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  navbar.classList.toggle("scroll-activa", window.scrollY > 50);
});



function abrirModal(imagen, titulo, descripcion) {
  document.getElementById("modal").style.display = "block";
  document.getElementById("modal-imagen").src = imagen;
  document.getElementById("modal-titulo").textContent = titulo;
  document.getElementById("modal-descripcion").textContent = descripcion;
}

function cerrarModal() {
  document.getElementById("modal").style.display = "none";
}

document.getElementById("cerrarModal").addEventListener("click", function() {
  document.getElementById("modal").style.display = "none";
});







document.addEventListener('DOMContentLoaded', function () {
  const formulario = document.getElementById('formulario-contacto');

  formulario.addEventListener('submit', function (e) {
    e.preventDefault(); // Evita el envío tradicional del formulario

    // Aquí puedes agregar validaciones adicionales si lo deseas

    // Mostrar notificación de éxito con Toastify
    Toastify({
      text: "✅ ¡Mensaje enviado con éxito!",
      duration: 3000,
      gravity: "top", // Posición: 'top' o 'bottom'
      position: "right", // Posición: 'left', 'center' o 'right'
      backgroundColor: "#28a745", // Color de fondo
      stopOnFocus: true, // Detener temporizador al pasar el mouse
    }).showToast();

    // Opcional: Limpiar los campos del formulario
    formulario.reset();
  });
});




