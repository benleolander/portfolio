function toggleTheme() {
  !document.documentElement.hasAttribute("theme") ? document.documentElement.setAttribute("theme", "alternate") : document.documentElement.removeAttribute("theme")
}

const themeButton = document.querySelector(".themeToggle")

themeButton.addEventListener('click', toggleTheme)