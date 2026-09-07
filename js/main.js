(function () {
  'use strict';

  /* Mobile navigation toggle ------------------------------------------- */
  var header = document.getElementById('siteHeader');
  var navToggle = document.getElementById('navToggle');

  if (navToggle && header) {
    navToggle.addEventListener('click', function () {
      var isOpen = header.classList.toggle('nav-open');
      navToggle.setAttribute('aria-expanded', String(isOpen));
      navToggle.setAttribute('aria-label', isOpen ? 'Cerrar menú' : 'Abrir menú');
    });

    document.querySelectorAll('.main-nav a').forEach(function (link) {
      link.addEventListener('click', function () {
        header.classList.remove('nav-open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* Toast helper ---------------------------------------------------------- */
  var toast = document.getElementById('toast');
  var toastTimer = null;

  function showToast(message) {
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add('show');
    window.clearTimeout(toastTimer);
    toastTimer = window.setTimeout(function () {
      toast.classList.remove('show');
    }, 3200);
  }

  /* Search form ------------------------------------------------------------ */
  var searchForm = document.getElementById('searchForm');
  var llegadaInput = document.getElementById('llegada');
  var salidaInput = document.getElementById('salida');

  if (llegadaInput && salidaInput) {
    var today = new Date().toISOString().split('T')[0];
    llegadaInput.min = today;
    salidaInput.min = today;

    llegadaInput.addEventListener('change', function () {
      salidaInput.min = llegadaInput.value || today;
      if (salidaInput.value && salidaInput.value <= llegadaInput.value) {
        salidaInput.value = '';
      }
    });
  }

  if (searchForm) {
    searchForm.addEventListener('submit', function (event) {
      event.preventDefault();
      var destino = document.getElementById('destino');
      var destinoValor = destino && destino.value.trim();

      var hoteles = document.getElementById('hoteles');
      if (hoteles) {
        hoteles.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }

      showToast(
        destinoValor
          ? 'Buscando hoteles disponibles en ' + destinoValor + '…'
          : 'Buscando hoteles disponibles…'
      );
    });
  }

  /* Hotel carousel ------------------------------------------------------- */
  var track = document.getElementById('hotelTrack');
  var prevBtn = document.getElementById('carPrev');
  var nextBtn = document.getElementById('carNext');

  function scrollByCard(direction) {
    if (!track) return;
    var card = track.querySelector('.hotel-card');
    var step = card ? card.offsetWidth + 22 : 300;
    track.scrollBy({ left: direction * step, behavior: 'smooth' });
  }

  if (prevBtn) prevBtn.addEventListener('click', function () { scrollByCard(-1); });
  if (nextBtn) nextBtn.addEventListener('click', function () { scrollByCard(1); });

  /* Newsletter form -------------------------------------------------------- */
  var newsletterForm = document.getElementById('newsletterForm');
  var newsletterMsg = document.getElementById('newsletterMsg');

  if (newsletterForm) {
    newsletterForm.addEventListener('submit', function (event) {
      event.preventDefault();
      if (newsletterMsg) {
        newsletterMsg.textContent = 'Listo, revisa tu correo para confirmar la suscripción.';
      }
      newsletterForm.reset();
    });
  }
})();
