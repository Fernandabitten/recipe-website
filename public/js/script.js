document.addEventListener("DOMContentLoaded", function () {
  const themeToggle = document.getElementById("theme-toggle");
  const body = document.body;

  // Função para aplicar o tema
  function applyTheme(theme) {
    body.classList.remove("dark", "light"); // Remove temas existentes
    body.classList.add(theme); // Adiciona o tema atual
  }

  // Obtém o tema do localStorage
  let currentTheme = localStorage.getItem("theme") || "dark";
  applyTheme(currentTheme); // Aplica o tema ao carregar a página

  // Adiciona o event listener para o botão de alternância (se existir)
  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      currentTheme = currentTheme === "dark" ? "light" : "dark";
      localStorage.setItem("theme", currentTheme);
      applyTheme(currentTheme);
      updateThemeIcon(currentTheme);
    });
  }

  // Função para atualizar os ícones do tema
  function updateThemeIcon(theme) {
    const sunIcon = document.querySelector("#theme-toggle .fa-sun");
    const moonIcon = document.querySelector("#theme-toggle .fa-moon");

    if (sunIcon && moonIcon) {
      if (theme === "dark") {
        sunIcon.style.display = "none";
        moonIcon.style.display = "inline-block";
      } else {
        sunIcon.style.display = "inline-block";
        moonIcon.style.display = "none";
      }
    }
  }

  updateThemeIcon(currentTheme);
});

// Carrossel de categorias
document.addEventListener("DOMContentLoaded", function () {
  // Atualiza a visibilidade das setas ao carregar a página
  Object.keys(carousels).forEach(updateArrowVisibility);
});

const carousels = {
  "pratos-principais": { index: 0 },
  sobremesas: { index: 0 },
  bebidas: { index: 0 },
};

function getItemsPerView() {
  if (window.innerWidth >= 1200) return 5; // Desktop
  if (window.innerWidth >= 768) return 3; // Tablet
  if (window.innerWidth >= 480) return 2; // Phablet
  return 1; // Mobile
}
function moveCarousel(direction, carouselName) {
  const carousel = document.querySelector(`.carousel.${carouselName}`);
  const totalItems = carousel.querySelectorAll(".card").length;
  const itemsPerView = getItemsPerView();
  const maxIndex = Math.max(0, totalItems - itemsPerView);

  carousels[carouselName].index = Math.max(
    0,
    Math.min(carousels[carouselName].index + direction, maxIndex)
  );

  const translateX = -(carousels[carouselName].index * (100 / itemsPerView));
  carousel.style.transform = `translateX(${translateX}%)`;

  updateArrowVisibility(carouselName);
}

function updateArrowVisibility(carouselName) {
  const carousel = document.querySelector(`.carousel.${carouselName}`);
  const leftArrow = carousel.parentElement.querySelector(".arrow-left");
  const rightArrow = carousel.parentElement.querySelector(".arrow-right");
  const itemsPerView = getItemsPerView();
  const totalItems = carousel.querySelectorAll(".card").length;
  const maxIndex = Math.max(
    0,
    carousel.querySelectorAll(".card").length - itemsPerView
  );

  // Se não houver itens suficientes para rolar, esconda as setas
  if (totalItems <= itemsPerView) {
    leftArrow.style.display = "none";
    rightArrow.style.display = "none";
    return;
  }

  leftArrow.style.opacity = carousels[carouselName].index === 0 ? "0.5" : "1";
  leftArrow.style.cursor =
    carousels[carouselName].index === 0 ? "default" : "pointer";
  rightArrow.style.opacity =
    carousels[carouselName].index === maxIndex ? "0.5" : "1";
  rightArrow.style.cursor =
    carousels[carouselName].index === maxIndex ? "default" : "pointer";
}
