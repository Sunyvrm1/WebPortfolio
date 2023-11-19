const navIcon = document.querySelector(".navIcon");
const headerCont = document.querySelector(".headerCont");

navIcon.addEventListener("click", () => {
  headerCont.classList.toggle("active");
});

//Change height on scroll

function changeHeader() {
  let navbarHeight = document.querySelector(".headerCont");
  if (document.documentElement.scrollTop < 110) {
    navbarHeight.classList.remove("shrink");
  } else {
    navbarHeight.classList.add("shrink");
  }
}
window.addEventListener("scroll", changeHeader);
