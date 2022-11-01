const menuToggler = document.querySelector(".menu-toggler");
const menu = document.querySelector(".menu");

const handleMenuToggler = (ev) => {
  if (menu.classList.contains("menu--active")) {
    menu.classList.remove("menu--active");
    menu.classList.add("menu--inactive");
    return;
  }
  menu.classList.add("menu--active");
  menu.classList.remove("menu--inactive");
};

const setMenuToglerController = () => {
  menuToggler.addEventListener("click", handleMenuToggler);
};

setMenuToglerController();
