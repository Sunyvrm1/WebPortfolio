const navIcon = document.querySelector(".navIcon");
const headerCont = document.querySelector(".headerCont");

navIcon.addEventListener("click", () => {
    headerCont.classList.toggle("active")
})