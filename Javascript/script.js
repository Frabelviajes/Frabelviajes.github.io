

//Indutrias Animacion

const observerElements = document.querySelectorAll("#about");
const options = {
    rootMargin: '0px 0px -50% 0px',
}

const Observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      document.querySelector("header").classList.add("sticky");
    } else {
      entry.target.classList.remove("visible");
      document.querySelector("header").classList.remove("sticky");
    }
  });
}, options);

observerElements.forEach((el) => {
  Observer.observe(el);
});

//Animacion Imagen
const target = document.querySelector(".bus-trigger");
function handleIntersection(entries) {
  entries.map((entry) => {
    if (entry.isIntersecting) {
        document.querySelector(".bus").classList.add("visible");
    } else {
        document.querySelector(".bus").classList.remove("visible");
    }
  });
}
const observer = new IntersectionObserver(handleIntersection);
observer.observe(target);

//Animacion Imagen
const target2 = document.querySelector(".trigger");
function handleIntersection2(entries) {
  entries.map((entry) => {
    if (entry.isIntersecting) {
        document.querySelector("header").classList.add("sticky");
    } else {
        document.querySelector("header").classList.remove("sticky");
    }
  });
}
const observer2 = new IntersectionObserver(handleIntersection2);
observer2.observe(target2);

function menu() {
  document.querySelector(".menu").classList.toggle("active");
  document.querySelector(".toggle").classList.toggle("active");
}