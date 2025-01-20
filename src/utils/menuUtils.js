export function toggleMobileMenu() {
  const mobileMenu = document.getElementById("mobile-menu");
  if (mobileMenu) {
    mobileMenu.classList.toggle("hidden");

    if (!mobileMenu.classList.contains("hidden")) {
      document.body.classList.add("overflow-hidden");
      document.documentElement.classList.add("overflow-hidden"); // Aplicar al html
    } else {
      document.body.classList.remove("overflow-hidden");
      document.documentElement.classList.remove("overflow-hidden"); // Remover del html
    }
  }
}
