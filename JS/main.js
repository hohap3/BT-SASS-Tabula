function main() {
  function showNavbar() {
    const navbarBtn = document.querySelector(
      ".header__navbar-mobile-menu button"
    );
    if (!navbarBtn) return;

    navbarBtn.addEventListener("click", () => {
      const navbar = document.querySelector(".header__navbar");
      if (!navbar) return;
      navbar.classList.toggle("d-flex");
    });
  }

  showNavbar();
}

main();
