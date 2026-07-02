const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");

console.log(menuBtn);
console.log(mobileMenu);

menuBtn.addEventListener("click", () => {
    console.log("Button clicked");
    mobileMenu.classList.toggle("hidden");
});