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

  // Focus JS
  function inputFocus() {
    const inputTextList = document.querySelectorAll(".input-focus");
    if (inputTextList.length < 1) return;

    inputTextList.forEach((input) => {
      input.addEventListener("focus", () => {
        input.parentElement.style.borderColor = "rgba(0,0,0,0.6)";
      });
      input.addEventListener("blur", () => {
        input.parentElement.style.borderColor = "#0000001a";
      });
    });
  }

  inputFocus();
}

main();
