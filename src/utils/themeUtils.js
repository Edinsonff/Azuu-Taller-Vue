export function toggleDarkMode() {
  const htmlElement = document.querySelector("html");
  const bodyElement = document.querySelector("body");

  bodyElement.classList.add("fade-out");

  setTimeout(() => {
    const isDark = htmlElement.classList.contains("dark");

    if (isDark) {
      htmlElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      htmlElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }

    bodyElement.classList.remove("fade-out");
    bodyElement.classList.add("fade-in");

    setTimeout(() => {
      bodyElement.classList.remove("fade-in");
    }, 500);
  }, 500);
}

export function applyThemeFromLocalStorage() {
  const theme = localStorage.getItem("theme");
  const bodyElement = document.querySelector("body");

  if (theme === "dark") {
    document.querySelector("html").classList.add("dark");
  } else {
    document.querySelector("html").classList.remove("dark");
  }

  bodyElement.classList.remove("fade-in", "fade-out");
}
