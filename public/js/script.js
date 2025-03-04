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
