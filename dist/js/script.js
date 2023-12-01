const navIcon = document.querySelector(".navIcon");
const headerCont = document.querySelector(".headerCont");

navIcon.addEventListener("click", () => {
  headerCont.classList.toggle("active");
});

// navigation

window.addEventListener("scroll", function () {
  var links = document.querySelectorAll("nav ul li");

  links.forEach(function (link) {
    var sectionId = link.querySelector("a").getAttribute("href").substring(1);
    var section = document.getElementById(sectionId);
    var sectionTop = section.getBoundingClientRect().top;
    var viewportHeight =
      window.innerHeight || document.documentElement.clientHeight;
    console.log(viewportHeight);

    if (sectionTop < 0.5 * viewportHeight) {
      links.forEach(function (link) {
        if (link !== link.parentNode.parentNode.querySelector(".activeColor")) {
          link.classList.remove("activeColor");
        }
      });
      link.classList.add("activeColor");
    }
  });
});
