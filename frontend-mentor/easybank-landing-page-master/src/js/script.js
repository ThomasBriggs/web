const hamburgerMenu = document.getElementById("hamburger")

hamburgerMenu.addEventListener("click", () => {
    hamburgerMenu.classList.toggle("open")
    document.getElementById("overlay").classList.toggle("active")
    document.getElementById("mobile-menu").classList.toggle("active")
    document.querySelector("body").classList.toggle("noscroll")
})