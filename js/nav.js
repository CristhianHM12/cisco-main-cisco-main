document.addEventListener('DOMContentLoaded', function() {
    // Cargar el navbar
    fetch('./components/navbar.html')
        .then(response => response.text())
        .then(data => {
            document.body.insertAdjacentHTML('afterbegin', data);
            initializeNavbar();
            initializeMobileMenu();
            initializeSearchModal();
            addDynamicStyles();
        })
        .catch(error => console.error('Error loading navbar:', error));
});
// 🔹 Inserta un carrusel automático de marcas después del navbar
document.addEventListener("DOMContentLoaded", function () {
  // Esperar a que el navbar se cargue dinámicamente
  const observer = new MutationObserver(() => {
    const nav = document.querySelector("nav");
    if (nav && !document.querySelector(".marcasSwiper")) {
      // Crear HTML del carrusel
      const carruselHTML = `
  <div class="bg-white py-3 border-b shadow-sm md:hidden"> <!-- 👈 md:hidden lo oculta en escritorio -->
    <div class="swiper marcasSwiper w-full max-w-6xl mx-auto">
      <div class="swiper-wrapper">
        <!-- Logos -->
        <div class="swiper-slide flex justify-center items-center">
          <a href="https://www.ds3comunicaciones.com/alfa/index.html"
              class="flex items-center justify-center  rounded-md hover:bg-gray-100 transition-all hover:-translate-y-0.5">
              <img src="http://www.ds3comunicaciones.com/belden/images/ALFA_logo1.gif" alt="Alfa"
                class="max-w-[100px] max-h-8 w-auto h-auto object-contain" />
            </a>
        </div>

        <div class="swiper-slide flex justify-center items-center">
              <a href="https://www.ds3comunicaciones.com/airlive/index.html"
              class="flex items-center justify-center p-1 rounded-md hover:bg-gray-100 transition-all hover:-translate-y-0.5">
              <img src="http://www.ds3comunicaciones.com/belden/images/airlivelogo.gif" alt="Airlive"
                class="max-w-[100px] max-h-8 w-auto h-auto object-contain" />
            </a>
        </div>

        <div class="swiper-slide flex justify-center items-center">
          <a href="https://www.ds3comunicaciones.com/andrew/index.html"
              class="flex items-center justify-center p-1 rounded-md hover:bg-gray-100 transition-all hover:-translate-y-0.5">
              <img src="http://www.ds3comunicaciones.com/andrew/images/logo_andrew.jpg" alt="Andrew"
                class="max-w-[100px] max-h-8 w-auto h-auto object-contain" />
            </a>
        </div>

        <div class="swiper-slide flex justify-center items-center">
            <a href="https://www.ds3comunicaciones.com/AMP/index.html"
              class="flex items-center justify-center p-1 rounded-md hover:bg-gray-100 transition-all hover:-translate-y-0.5">
              <img src="http://www.ds3comunicaciones.com/belden/images/amp_logo2-91x20.jpg" alt="AMP"
                class="max-w-[100px] max-h-8 w-auto h-auto object-contain" />
            </a>
        </div>

        <div class="swiper-slide flex justify-center items-center">
          <a href="https://www.ds3comunicaciones.com/amphenol/index.html"
              class="flex items-center justify-center p-1 rounded-md hover:bg-gray-100 transition-all hover:-translate-y-0.5">
              <img src="http://www.ds3comunicaciones.com/belden/images/amphenol_logo-100x21.jpg" alt="Amphenol"
                class="max-w-[100px] max-h-8 w-auto h-auto object-contain" />
            </a>
        </div>
        <div class="swiper-slide flex justify-center items-center">
           <a href="https://www.ds3comunicaciones.com/belden/index.html"
              class="flex items-center justify-center p-1 rounded-md hover:bg-gray-100 transition-all hover:-translate-y-0.5">
              <img src="http://www.ds3comunicaciones.com/belden/images/Belden-Logo-93x15.jpg" alt="Belden"
                class="max-w-[100px] max-h-8 w-auto h-auto object-contain" />
            </a>
        </div><div class="swiper-slide flex justify-center items-center">
          <a href="https://www.ds3comunicaciones.com/cisco/index.html"
              class="flex items-center justify-center p-1 rounded-md hover:bg-gray-100 transition-all hover:-translate-y-0.5">
              <img src="http://www.ds3comunicaciones.com/cisco/images/logo-cisco.gif" alt="Cisco"
                class="max-w-[100px] max-h-8 w-auto h-auto object-contain" />
            </a>
        </div><div class="swiper-slide flex justify-center items-center">
         <a href="https://www.ds3comunicaciones.com/dahua/index.html"
              class="flex items-center justify-center p-1 rounded-md hover:bg-gray-100 transition-all hover:-translate-y-0.5">
              <img src="http://www.ds3comunicaciones.com/dahua/images/dahua_logo.jpg" alt="Dahua"
                class="max-w-[100px] max-h-8 w-auto h-auto object-contain" />
            </a>
        </div>


      </div>
    </div>
  </div>
`;


      // Insertar el carrusel justo debajo del navbar
      nav.insertAdjacentHTML("afterend", carruselHTML);

      // Inicializar el carrusel con Swiper
      new Swiper(".marcasSwiper", {
        slidesPerView: 3,
        spaceBetween: 20,
        loop: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        breakpoints: {
          640: { slidesPerView: 3 },
          768: { slidesPerView: 4 },
          1024: { slidesPerView: 6 },
        },
      });

      // Dejar de observar después de insertarlo
      observer.disconnect();
    }
  });

  // Observar cambios en el body (porque navbar se carga dinámicamente)
  observer.observe(document.body, { childList: true, subtree: true });
});

// Funcionalidad: Galería de imágenes del producto

document.addEventListener("DOMContentLoaded", function() {
  const mainImage = document.getElementById("img_main");
  const thumbnails = document.querySelectorAll(".miniatura");

  thumbnails.forEach(img => {
    img.addEventListener("click", function() {
      // Intercambio de imágenes
      const tempSrc = mainImage.src;
      mainImage.src = this.src;
      this.src = tempSrc;

      // Quitar el borde activo anterior
      thumbnails.forEach(t => t.classList.remove("miniatura-activa"));
      // Agregar borde a la miniatura actual
      this.classList.add("miniatura-activa");
    });
  });
});
// Funcionalidad: Carrusel automático de marcas
document.addEventListener("DOMContentLoaded", function() {
  const carrusel = document.querySelector(".carrusel-marcas");

  if (!carrusel) return; // Si no existe el contenedor, salir

  let desplazamiento = 0;

  function moverCarrusel() {
    desplazamiento += 1;
    if (desplazamiento >= carrusel.scrollWidth / 2) {
      desplazamiento = 0;
    }
    carrusel.scrollLeft = desplazamiento;
  }

  // Mueve el carrusel cada 30ms (ajusta velocidad)
  setInterval(moverCarrusel, 30);
});



function initializeNavbar() {
    // Menú hamburguesa (versión simplificada que será reemplazada por initializeMobileMenu)
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    if (mobileMenuButton) {
        const icon = mobileMenuButton.querySelector('i');
        mobileMenuButton.addEventListener('click', function() {
            if (icon) {
                icon.classList.toggle('fa-bars');
                icon.classList.toggle('fa-times');
            }
        });
    }
}

function initializeMobileMenu() {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const closeMenuButton = document.getElementById('close-menu');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuOverlay = document.getElementById('menu-overlay');

    if (!mobileMenuButton || !mobileMenu) return;

    mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.remove('-translate-x-full');
        mobileMenu.classList.remove('hidden');
        if (menuOverlay) menuOverlay.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
        
        // Cambiar ícono
        const icon = mobileMenuButton.querySelector('i');
        if (icon) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        }
    });

    if (closeMenuButton) {
        closeMenuButton.addEventListener('click', closeMobileMenu);
    }

    if (menuOverlay) {
        menuOverlay.addEventListener('click', closeMobileMenu);
    }

    function closeMobileMenu() {
        mobileMenu.classList.add('-translate-x-full');
        if (menuOverlay) menuOverlay.classList.add('hidden');
        document.body.style.overflow = '';
        
        // Cambiar ícono
        const icon = mobileMenuButton.querySelector('i');
        if (icon) {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    }
}

function initializeSearchModal() {
    const searchModal = document.getElementById('search-modal');
    const searchButton = document.getElementById('search-button');
    const mobileSearchButton = document.getElementById('mobile-search-button');
    const closeSearch = document.getElementById('close-search');

    function openSearchModal() {
        if (searchModal) {
            searchModal.classList.remove('none');
            searchModal.classList.add('anim');
            document.body.style.overflow = 'hidden';
        }
    }

    function closeSearchModal() {
        if (searchModal) {
            searchModal.classList.add('none');
            document.body.style.overflow = '';
        }
    }

    if (searchButton) searchButton.addEventListener('click', openSearchModal);
    if (mobileSearchButton) mobileSearchButton.addEventListener('click', openSearchModal);
    if (closeSearch) closeSearch.addEventListener('click', closeSearchModal);

    if (searchModal) {
        searchModal.addEventListener('click', function(e) {
            if (e.target === searchModal) {
                closeSearchModal();
            }
        });
    }

    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && searchModal && !searchModal.classList.contains('none')) {
            closeSearchModal();
        }
    });
}

function addDynamicStyles() {
    const style = document.createElement('style');
    style.textContent = `
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap');
        
        .anim {
            animation: fadeIn 0.3s ease-in-out;
        }
        
        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }
        
        .none {
            display: none;
        }
        
        /* Estilos para el menú móvil */
        .-translate-x-full {
            transform: translateX(-100%);
        }
        
        #mobile-menu {
            transition: transform 0.3s ease-in-out;
        }
        
        #menu-overlay {
            background-color: rgba(0, 0, 0, 0.5);
        }
    `;
    document.head.appendChild(style);
}