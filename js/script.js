// script.js - Versión optimizada sin dependencias externas
const themeBtn = document.getElementById('themeBtn');
const body = document.getElementById('body');

themeBtn.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  
  // Cambiar el texto del botón
  if (body.classList.contains('dark-mode')) {
    themeBtn.textContent = "Modo Claro";
    themeBtn.classList.replace('btn-outline-light', 'btn-light');
  } else {
    themeBtn.textContent = "Modo Oscuro";
    themeBtn.classList.replace('btn-light', 'btn-outline-light');
  }
});

// Validación del formulario (asegúrate de que el id sea 'contactForm')
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const feedback = document.getElementById('msgFeedback');
    if (feedback) feedback.textContent = "¡Gracias, tu mensaje ha sido enviado!";
  });
}

// Navbar scroll
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  navbar.classList.toggle('navbar-scrolled', window.scrollY > 50);
});


// --- Evento onChange ---
const selectorMotivo = document.getElementById('motivoContacto');
const feedbackMotivo = document.getElementById('feedbackMotivo');

if (selectorMotivo) {
  selectorMotivo.addEventListener('change', function(e) {
    const valor = e.target.value;
    
    if (valor === 'propuesta') {
      feedbackMotivo.textContent = "¡Excelente! Me pondré en contacto a la brevedad.";
    } else if (valor === 'consulta') {
      feedbackMotivo.textContent = "Responderé tu duda lo antes posible.";
    } else {
      feedbackMotivo.textContent = ""; // Limpiar si selecciona 'Otros' o vacío
    }
  });
}
