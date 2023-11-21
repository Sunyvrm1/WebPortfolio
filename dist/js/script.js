const navIcon = document.querySelector(".navIcon");
const headerCont = document.querySelector(".headerCont");

navIcon.addEventListener("click", () => {
  headerCont.classList.toggle("active");
});

// const skillSection = document.getElementById('skill');

// function animateSkillsOnScroll() {
//   function checkScroll() {
//     const rect = skillSection.getBoundingClientRect();
//     const windowHeight = window.innerHeight || document.documentElement.clientHeight;

//     if (rect.top < windowHeight && rect.bottom >= 0) {
//       skillSection.classList.add('skill-animation');
//       window.removeEventListener('scroll', checkScroll);
//     }
//   }

//   window.addEventListener('scroll', checkScroll);
// }

// animateSkillsOnScroll(); // Trigger the scroll animation on initial load

// window.addEventListener('scroll', function() {
//   console.log(window.scrollY);
// });
