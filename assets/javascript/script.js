$(document).ready(function () {
  $("#fullview").fullView({
    //Navigation
    navbar: "#navbar",
    navbar: ".btn",
    backToTop: true,
    dotsTooltips: true,

    // Callback
    onScrollEnd: function (currentView) {
      if (!currentView.hasClass("nav-transparent")) {
        $(".header").addClass("changed");
      } else {
        $(".header").removeClass("changed");
      }
    }
  });
});


let slider = document.querySelector(".slider-contenedor")
let sliderIndividual = document.querySelectorAll(".contenido-slider")
let contador = 1;
let width = sliderIndividual[0].clientWidth;
let intervalo = 4200;

window.addEventListener("resize", function(){
    width = sliderIndividual[0].clientWidth;
})

setInterval(function(){
    slides();
},intervalo);



function slides(){
    slider.style.transform = "translate("+(-width*contador)+"px)";
    slider.style.transition = "transform .8s";
    contador++;

    if(contador == sliderIndividual.length){
        setTimeout(function(){
            slider.style.transform = "translate(0px)";
            slider.style.transition = "transform 0s";
            contador=1;
        },1500)
    }
}

const btn_close = document.querySelector('#close');
const cont_cookies = document.querySelector('.cookies-box');
const acep = document.querySelector('#acep');

acep.addEventListener('click',() => {
  aceptarCookies();
})


function comprobarCookies(){
  if (localStorage.cookie1 == 'true'){
    cont_cookies.style.opacity = '0';
    cont_cookies.style.display = 'none';
  }
}

comprobarCookies();

function aceptarCookies(){
  localStorage.cookie1 = 'true';
  cont_cookies.style.display = 'none';

  let expire = new Date()
  expire = new Date(expire.getTime() + 77600000);
  document.cookie1 = 'cookie1=aceptada; expire'+expire;
}

btn_close.addEventListener('click',() => {
  cont_cookies.style.display = 'none'; 
});

